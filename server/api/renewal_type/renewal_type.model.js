'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Renewal_type Schema
 */
var Renewal_typeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Renewal_type',  Renewal_typeSchema);
