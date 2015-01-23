'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Loantype Schema
 */
var LoantypeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Loantype',  LoantypeSchema);
