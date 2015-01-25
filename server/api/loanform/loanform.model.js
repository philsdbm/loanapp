'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Loanform Schema
 */
var LoanformSchema = new Schema({
    loan_date: Date,
    renewal_type: {type: Schema.ObjectId, ref:'renewal_type'},
    loantype: {type: Schema.ObjectId, ref:'Loantype'},
    member: {type: Schema.ObjectId, ref:'Member'},
    salary: Number,
    fixed_deposit: Number,
    bureau: {type: Schema.ObjectId, ref:'Bureau'},
    loans_granted: Number,
    interest_on_loans: Number,
    service_charge: Number,
    fines_and_penalties: Number,
    underpayment_of_previous_loan: Number,
    previous_loan_granted_on: Date,
    previous_loan: Number,
    less_payments: Number,
    notes: String,
    capital_buildup: Number,
    net_loan_proceeds: Number,
    months_to_pay: Number,
    loan_monthly_repayment: Number,
    check_no: Number,
    check_amount: Number,
    check_date: Date
});

module.exports = mongoose.model('Loanform',  LoanformSchema);
