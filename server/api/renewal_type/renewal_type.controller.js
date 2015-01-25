/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /renewal_types              ->  index
 * POST    /renewal_types              ->  create
 * GET     /renewal_types/:id          ->  show
 * PUT     /renewal_types/:id          ->  update
 * DELETE  /renewal_types/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Renewal_type = require('./renewal_type.model');

// Get list of renewal_types
exports.index = function(req, res) {
  Renewal_type.find(function (err, renewal_types) {
    if(err) { return handleError(res, err); }
    return res.json(200, renewal_types);
  });
};

// Get a single renewal_type
exports.show = function(req, res) {
  Renewal_type.findById(req.params.id, function (err, renewal_type) {
    if(err) { return handleError(res, err); }
    if(!renewal_type) { return res.send(404); }
    return res.json(renewal_type);
  });
};

// Creates a new renewal_type in the DB.
exports.create = function(req, res) {
  Renewal_type.create(req.body, function(err, renewal_type) {
    if(err) { return handleError(res, err); }
    return res.json(201, renewal_type);
  });
};

// Updates an existing renewal_type in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Renewal_type.findById(req.params.id, function (err, renewal_type) {
    if (err) { return handleError(res, err); }
    if(!renewal_type) { return res.send(404); }
    var updated = _.merge(renewal_type, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, renewal_type);
    });
  });
};

// Deletes a renewal_type from the DB.
exports.destroy = function(req, res) {
  Renewal_type.findById(req.params.id, function (err, renewal_type) {
    if(err) { return handleError(res, err); }
    if(!renewal_type) { return res.send(404); }
    renewal_type.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}