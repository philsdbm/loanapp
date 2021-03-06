'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Member Schema
 */
var MemberSchema = new Schema({
    first_name: String,
    middle_name: String,
    last_name: String,
    bureau: {type: Schema.ObjectId, ref:'Bureau'},
    salary: Number,
    fixed_deposit: Number,
    savings_deposit: Number,
    join_date: Date,
    loan: {type: Schema.ObjectId, ref:'LoanForm'}
});

module.exports = mongoose.model('Member',  MemberSchema);
