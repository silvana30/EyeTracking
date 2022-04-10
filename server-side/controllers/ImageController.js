'use strict'

var mongoose = require('mongoose')
var Image = mongoose.model('Image')
var express = require('express')

function listImages(req, res) {
  Image.find().populate('trackingData').exec({}, function (error, images) {
    if (error){
      console.log('ERROR: ', error)
      res.send(error);
    }
    console.log("LIST IMAGES: ", images);
    res.json(images);
  })
}

function insertImage(req, res) {
  console.log("NEW Image: ", req.body)

  var newImage = new Image(req.body)
  newImage.save(function (error, image) {
    if (error) {
      console.log("INSERT USER error", error)
    }
    res.json(image)
  });
};

module.exports = {
    listImages,
    insertImage
  }