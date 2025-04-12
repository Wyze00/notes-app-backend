/* eslint-disable linebreak-style */

const handler = require('./handler.js');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.addNoteHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNotesHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.updateNoteHander
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteHandler
  }
];

module.exports = routes;