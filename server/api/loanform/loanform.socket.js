/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var loanform = require('./loanform.model');

exports.register = function(socket) {
  loanform.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  loanform.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('loanform:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('loanform:remove', doc);
}