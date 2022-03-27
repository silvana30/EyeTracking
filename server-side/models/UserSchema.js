'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	userId: {
    // 6240a1acff180e3450237619
    type: String
  },
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  email:{
    type: String
  },
  age: {
    type: Number
  },
  sex: {
    type: String
  },
  education: {
    type: String
  },
  income: {
    type: String
  },
  trackingData: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrackingData"
  }]
});

module.exports = mongoose.model('Users', UserSchema);
