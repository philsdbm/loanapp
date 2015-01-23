'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Bureau Schema
 */
var BureauSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Bureau',  BureauSchema);
