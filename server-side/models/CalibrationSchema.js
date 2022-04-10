'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalibrationSchema = new Schema({
    userId: {
        type: String
    },
    summary :{
        type: String
    },
    item: {
        type: Strings
    }
});

module.exports = mongoose.model('Calibration', CalibrationSchema);
