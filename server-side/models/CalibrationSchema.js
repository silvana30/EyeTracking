'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalibrationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
      },
    summary :{
        type: String
    },
    item: {
        type: Strings
    }
});

module.exports = mongoose.model('CalibrationData', CalibrationSchema);
