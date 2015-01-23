'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Loantype Schema
 */
var LoantypeSchema = new Schema({
    name: String,
    percent: Number,
    contributable: Boolean
});

module.exports = mongoose.model('Loantype',  LoantypeSchema);
