/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var renewaltype = require('./renewaltype.model');

exports.register = function(socket) {
  renewaltype.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  renewaltype.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('renewaltype:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('renewaltype:remove', doc);
}