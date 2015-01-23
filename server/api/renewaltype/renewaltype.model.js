'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Renewaltype Schema
 */
var RenewaltypeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Renewaltype',  RenewaltypeSchema);
