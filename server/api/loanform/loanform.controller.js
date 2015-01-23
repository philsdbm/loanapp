/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /loanforms              ->  index
 * POST    /loanforms              ->  create
 * GET     /loanforms/:id          ->  show
 * PUT     /loanforms/:id          ->  update
 * DELETE  /loanforms/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Loanform = require('./loanform.model');

// Get list of loanforms
exports.index = function(req, res) {
  Loanform.find(function (err, loanforms) {
    if(err) { return handleError(res, err); }
    return res.json(200, loanforms);
  });
};

// Get a single loanform
exports.show = function(req, res) {
  Loanform.findById(req.params.id, function (err, loanform) {
    if(err) { return handleError(res, err); }
    if(!loanform) { return res.send(404); }
    return res.json(loanform);
  });
};

// Creates a new loanform in the DB.
exports.create = function(req, res) {
  Loanform.create(req.body, function(err, loanform) {
    if(err) { return handleError(res, err); }
    return res.json(201, loanform);
  });
};

// Updates an existing loanform in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Loanform.findById(req.params.id, function (err, loanform) {
    if (err) { return handleError(res, err); }
    if(!loanform) { return res.send(404); }
    var updated = _.merge(loanform, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, loanform);
    });
  });
};

// Deletes a loanform from the DB.
exports.destroy = function(req, res) {
  Loanform.findById(req.params.id, function (err, loanform) {
    if(err) { return handleError(res, err); }
    if(!loanform) { return res.send(404); }
    loanform.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}