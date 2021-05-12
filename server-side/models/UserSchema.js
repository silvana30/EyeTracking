'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	userId: {
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
  }
});

module.exports = mongoose.model('Users', UserSchema);
