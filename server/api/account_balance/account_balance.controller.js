/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /account_balances              ->  index
 * POST    /account_balances              ->  create
 * GET     /account_balances/:id          ->  show
 * PUT     /account_balances/:id          ->  update
 * DELETE  /account_balances/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Account_balance = require('./account_balance.model');

// Get list of account_balances
exports.index = function(req, res) {
  Account_balance.find(function (err, account_balances) {
    if(err) { return handleError(res, err); }
    return res.json(200, account_balances);
  });
};

// Get a single account_balance
exports.show = function(req, res) {
  Account_balance.findById(req.params.id, function (err, account_balance) {
    if(err) { return handleError(res, err); }
    if(!account_balance) { return res.send(404); }
    return res.json(account_balance);
  });
};

// Creates a new account_balance in the DB.
exports.create = function(req, res) {
  Account_balance.create(req.body, function(err, account_balance) {
    if(err) { return handleError(res, err); }
    return res.json(201, account_balance);
  });
};

// Updates an existing account_balance in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Account_balance.findById(req.params.id, function (err, account_balance) {
    if (err) { return handleError(res, err); }
    if(!account_balance) { return res.send(404); }
    var updated = _.merge(account_balance, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, account_balance);
    });
  });
};

// Deletes a account_balance from the DB.
exports.destroy = function(req, res) {
  Account_balance.findById(req.params.id, function (err, account_balance) {
    if(err) { return handleError(res, err); }
    if(!account_balance) { return res.send(404); }
    account_balance.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}