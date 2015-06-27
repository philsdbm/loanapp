/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var account_balance = require('./account_balance.model');

exports.register = function(socket) {
  account_balance.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  account_balance.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('account_balance:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('account_balance:remove', doc);
}