'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Account_balance Schema
 */
var Account_balanceSchema = new Schema({
    loantype: {type: Schema.ObjectId, ref:'Loantype'},
    member: {type: Schema.ObjectId, ref:'Member'},
    application_date: Date,
    loan_granted: Number,
    equity: Number,
    net_proceeds: Number,
    term: Number,
    monthly_repayment: Number,
    check_no: String,
    release_date: Date,
    loan_balance: Number,
    as_of: Date
});

module.exports = mongoose.model('Account_balance',  Account_balanceSchema);
