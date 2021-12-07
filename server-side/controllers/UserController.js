'use strict'

var mongoose = require('mongoose')
var User = mongoose.model('Users')
var express = require('express')
var route = express.Router()

var net = require('net')
var parseString = require('xml2js').parseString
const {startRecord, stopRecord} = require('../GazepointService')

var client = new net.Socket()
client.setEncoding('utf8')

function listUsers(req, res) {
  User.find({}, function (error, users) {
    if (error)
      res.send(error);
    console.log("LIST USERS: ", users);
    // res.json(users);
    client.connect({
      host: '127.0.0.1', // Host machine IP
      port: 4242 // Gazepoint Port
    })
  })
}

function insertUser(req, res) {
  console.log("NEW USER: ", req.body)

  var newUser = new User(req.body)
  newUser.save(function (error, user) {
    if (error) {
      console.log("INSERT USER error", error)
    }
    res.json(user)

  });
};

module.exports = {
  listUsers,
  insertUser
}

client.on('connect', function () {
  console.log('Connected with Gazepoint API server')

  // Send message to Gazepoint API server to enable data
  client.write('<GET ID="CALIBRATE_START" />\r\n')
  client.write('<SET ID="CALIBRATE_START" STATE="1" />\r\n')

  client.write('<GET ID="CALIBRATE_SHOW" />\r\n')
  client.write('<SET ID="CALIBRATE_SHOW" STATE="1" />\r\n')

  client.write('<GET ID="CALIBRATE_TIMEOUT" />\r\n')
  client.write('<GET ID="CALIBRATE_DELAY" />\r\n')
  client.write('<GET ID="CALIBRATE_RESULT_SUMMARY" />\r\n')

  // client.write('<GET ID="TRACKER_DISPLAY" />\r\n')
})

client.on('data', function (data) {
  // Print Gazepoint data stream to console
  console.log('data', data)
  parseString(data, (err, result) => {
    console.log(result)
    if (result?.CAL
      && result.CAL['$']
      && result.CAL['$'].ID === 'CALIB_RESULT_PT'
      && result.CAL['$'].PT === '5'
    ) {
      setTimeout(() => {
        client.write('<SET ID="CALIBRATE_SHOW" STATE="0" />\r\n') //stop calibration
        startRecord(client)
        setTimeout(() => {
          stopRecord(client)
        }, 3000)
      }, 3000)
    }
    if (result?.ACK
      && result.ACK['$']
      && result.ACK['$'].ID === 'CALIBRATE_RESULT_SUMMARY'
    ) {
      //save data
      console.log(result)
    }
    if (result?.REC
      && result.REC['$']) {
      //SAVE records
      console.log(result)
    }
  })
})
