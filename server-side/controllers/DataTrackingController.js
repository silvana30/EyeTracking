'use strict'

var mongoose = require('mongoose')
var TrackingData = mongoose.model('TrackingData')
var express = require('express')
var route = express.Router()
var net = require('net')

var client = new net.Socket()
client.setEncoding('utf8')

function listTrackings(req, res) {
  TrackingData.find({}, function (error, dataTrackings) {
    if (error){
      console.log('ERROR: ', error)
      res.send(error);
    }
    console.log("LIST DATA TRACKED: ", dataTrackings);
    res.json(dataTrackings);
  })
}

function insertTracking(req, res) {
  console.log("NEW DATA TRACKING: ", req.body)

  var newTracking = new TrackingData(req.body)
  newTracking.save(function (error, dataTracking) {
    if (error) {
      console.log("INSERT USER error", error)
    }
    res.json(dataTracking)
  });
};

module.exports = {
    listTrackings,
    insertTracking
  }