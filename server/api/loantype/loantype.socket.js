/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var loantype = require('./loantype.model');

exports.register = function(socket) {
  loantype.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  loantype.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('loantype:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('loantype:remove', doc);
}