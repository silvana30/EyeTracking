'use strict'

var mongoose = require('mongoose')
var AOI = mongoose.model('AOI')
var Images = mongoose.model('Image')
var express = require('express')
var route = express.Router()
var net = require('net')

var client = new net.Socket()
client.setEncoding('utf8')

function listAOIData(req, res) {
  TrackingData.find({}, function (error, dataAOI) {
    if (error){
      console.log('ERROR: ', error)
      res.send(error);
    }
    console.log("LIST Area Of Interest DATA: ", dataAOI);
    res.json(dataAOI);
  })
}

function insertAOIData(req, res) {
  console.log("NEW DATA for AOI: ", req.body)
  // find user by userId <- sent in tracking data post
  // update user document with tracking id prop <-
  var newAOI = new AOI(req.body)
  newAOI.save(function (error, dataAOI) {
    if (error) {
      console.log("INSERT error", error)
    }
    Images.findOneAndUpdate({_id: req.body.imageId}, {aoiData: dataAOI}, {upsert: true}).exec(function(err, image){
      if(err){
        console.log('IMAGE not found: ', err)
      }
    })
    res.json(dataTracking)
  });
};

module.exports = {
    listAOIData,
    insertAOIData
  }