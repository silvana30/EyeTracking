'use strict'

var mongoose = require('mongoose')
var Calibration = mongoose.model('Calibration')
var Users = mongoose.model('Users')
var express = require('express')
var route = express.Router()
var net = require('net')

var client = new net.Socket()
client.setEncoding('utf8')

function listCalibrations(req, res) {
  Calibration.find({}, function (error, calibrationData) {
    if (error){
      console.log('ERROR: ', error)
      res.send(error);
    }
    res.json(calibrationData);
  })
}

function insertCalibration(req, res) {
  // find user by userId <- sent in tracking data post
  // update user document with tracking id prop <-
  var newCalibration = new Calibration(req.body)
  newCalibration.save(function (error, dataCalibration) {
    if (error) {
      console.log("INSERT error", error)
    }
    Users.findOneAndUpdate({_id: req.body.userId}, {$push: {calibrationData: dataCalibration} }, {upsert: true}).exec(function(err, user){
      if(err){
        console.log('USER not found: ', err)
      }
    })
    res.json(dataCalibration)
  });
};

module.exports = {
    listCalibrations,
    insertCalibration
  }