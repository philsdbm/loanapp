/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /bureaus              ->  index
 * POST    /bureaus              ->  create
 * GET     /bureaus/:id          ->  show
 * PUT     /bureaus/:id          ->  update
 * DELETE  /bureaus/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Bureau = require('./bureau.model');

// Get list of bureaus
exports.index = function(req, res) {
  Bureau.find(function (err, bureaus) {
    if(err) { return handleError(res, err); }
    return res.json(200, bureaus);
  });
};

// Get a single bureau
exports.show = function(req, res) {
  Bureau.findById(req.params.id, function (err, bureau) {
    if(err) { return handleError(res, err); }
    if(!bureau) { return res.send(404); }
    return res.json(bureau);
  });
};

// Creates a new bureau in the DB.
exports.create = function(req, res) {
  Bureau.create(req.body, function(err, bureau) {
    if(err) { return handleError(res, err); }
    return res.json(201, bureau);
  });
};

// Updates an existing bureau in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bureau.findById(req.params.id, function (err, bureau) {
    if (err) { return handleError(res, err); }
    if(!bureau) { return res.send(404); }
    var updated = _.merge(bureau, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bureau);
    });
  });
};

// Deletes a bureau from the DB.
exports.destroy = function(req, res) {
  Bureau.findById(req.params.id, function (err, bureau) {
    if(err) { return handleError(res, err); }
    if(!bureau) { return res.send(404); }
    bureau.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}