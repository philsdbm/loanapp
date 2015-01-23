/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var bureau = require('./bureau.model');

exports.register = function(socket) {
  bureau.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  bureau.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bureau:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bureau:remove', doc);
}