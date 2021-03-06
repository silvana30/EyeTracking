'use strict'

var mongoose = require('mongoose')
var TrackingData = mongoose.model('TrackingData')
var Users = mongoose.model('Users')
var Images = mongoose.model('Image')
var express = require('express')
var route = express.Router()
var net = require('net')
const UserSchema = require('../models/UserSchema')

var client = new net.Socket()
client.setEncoding('utf8')

function listTrackings(req, res) {
  TrackingData.find({}, function (error, dataTrackings) {
    if (error){
      console.log('ERROR: ', error)
      res.send(error);
    }
    res.json(dataTrackings);
  })
}

function insertTracking(req, res) {
  // find user by userId <- sent in tracking data post
  // update user document with tracking id prop <-
  var newTracking = new TrackingData(req.body)
  newTracking.save(function (error, dataTracking) {
    if (error) {
      console.log("INSERT error", error)
    }
    Users.findOneAndUpdate({_id: req.body.userId}, {$push: {trackingData: dataTracking} }, {upsert: true}).exec(function(err, user){
      if(err){
        console.log('USER not found: ', err)
      }
    })
    Images.findOneAndUpdate({_id: req.body.imageId}, {$push: {trackingData: dataTracking} }, {upsert: true}).exec(function(err, image){
      if(err){
        console.log('IMAGE not found: ', err)
      }
    })
    res.json(dataTracking)
  });
};

module.exports = {
    listTrackings,
    insertTracking
  }