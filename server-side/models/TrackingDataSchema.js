'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrackingDataSchema = new Schema({
	userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }, // 61e439d9590fb7362861c20d
  coordinates:{
    type: {Number}
  },
  imageId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  } // 61e446500509dc2a30c09948
});

module.exports = mongoose.model('TrackingData', TrackingDataSchema);
