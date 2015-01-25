/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var renewal_type = require('./renewal_type.model');

exports.register = function(socket) {
  renewal_type.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  renewal_type.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('renewal_type:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('renewal_type:remove', doc);
}