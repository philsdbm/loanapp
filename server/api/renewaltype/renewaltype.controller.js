/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /renewaltypes              ->  index
 * POST    /renewaltypes              ->  create
 * GET     /renewaltypes/:id          ->  show
 * PUT     /renewaltypes/:id          ->  update
 * DELETE  /renewaltypes/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Renewaltype = require('./renewaltype.model');

// Get list of renewaltypes
exports.index = function(req, res) {
  Renewaltype.find(function (err, renewaltypes) {
    if(err) { return handleError(res, err); }
    return res.json(200, renewaltypes);
  });
};

// Get a single renewaltype
exports.show = function(req, res) {
  Renewaltype.findById(req.params.id, function (err, renewaltype) {
    if(err) { return handleError(res, err); }
    if(!renewaltype) { return res.send(404); }
    return res.json(renewaltype);
  });
};

// Creates a new renewaltype in the DB.
exports.create = function(req, res) {
  Renewaltype.create(req.body, function(err, renewaltype) {
    if(err) { return handleError(res, err); }
    return res.json(201, renewaltype);
  });
};

// Updates an existing renewaltype in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Renewaltype.findById(req.params.id, function (err, renewaltype) {
    if (err) { return handleError(res, err); }
    if(!renewaltype) { return res.send(404); }
    var updated = _.merge(renewaltype, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, renewaltype);
    });
  });
};

// Deletes a renewaltype from the DB.
exports.destroy = function(req, res) {
  Renewaltype.findById(req.params.id, function (err, renewaltype) {
    if(err) { return handleError(res, err); }
    if(!renewaltype) { return res.send(404); }
    renewaltype.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}