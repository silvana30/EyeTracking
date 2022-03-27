'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
	imageId: {
    type: String
  },
  item :{
    type: String
  }
});

module.exports = mongoose.model('Image', ImageSchema);
