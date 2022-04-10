'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = mongoose.model('ImageSchema')

var AOISchema = new Schema({
	x: {
    type: Number
  },
  y:{
    type: Number
  },
  a:{
    type: Number
  },
  b: {
    type: Number
  },
  aoiId: {
    type: String
  },
  imageId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  }
});

module.exports = mongoose.model('AOI', AOISchema);
