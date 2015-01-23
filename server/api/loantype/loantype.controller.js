/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /loantypes              ->  index
 * POST    /loantypes              ->  create
 * GET     /loantypes/:id          ->  show
 * PUT     /loantypes/:id          ->  update
 * DELETE  /loantypes/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Loantype = require('./loantype.model');

// Get list of loantypes
exports.index = function(req, res) {
  Loantype.find(function (err, loantypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, loantypes);
  });
};

// Get a single loantype
exports.show = function(req, res) {
  Loantype.findById(req.params.id, function (err, loantype) {
    if(err) { return handleError(res, err); }
    if(!loantype) { return res.send(404); }
    return res.json(loantype);
  });
};

// Creates a new loantype in the DB.
exports.create = function(req, res) {
  Loantype.create(req.body, function(err, loantype) {
    if(err) { return handleError(res, err); }
    return res.json(201, loantype);
  });
};

// Updates an existing loantype in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Loantype.findById(req.params.id, function (err, loantype) {
    if (err) { return handleError(res, err); }
    if(!loantype) { return res.send(404); }
    var updated = _.merge(loantype, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, loantype);
    });
  });
};

// Deletes a loantype from the DB.
exports.destroy = function(req, res) {
  Loantype.findById(req.params.id, function (err, loantype) {
    if(err) { return handleError(res, err); }
    if(!loantype) { return res.send(404); }
    loantype.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}