'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  // 6253069420998c1628aa876f
	imageId: {
    type: String
  },
  item :{
    type: String
  },
  trackingData: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TrackingData"
}]
});

module.exports = mongoose.model('Image', ImageSchema);
