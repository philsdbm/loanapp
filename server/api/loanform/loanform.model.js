'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Loanform Schema
 */
var LoanformSchema = new Schema({
    loan_date: Date,
    renewaltype: {type: Schema.ObjectId, ref:'Renewaltype'},
    loantype: {type: Schema.ObjectId, ref:'Loantype'},
    member: {type: Schema.ObjectId, ref:'Member'},
    bureau: {type: Schema.ObjectId, ref:'Member.bureau'}
});

module.exports = mongoose.model('Loanform',  LoanformSchema);
