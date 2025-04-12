/* eslint-disable linebreak-style */

const { nanoid } = require('nanoid');
const notes = require('./notes.js');

const addNoteHandler = (request, h) => {

  // Data - data
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  // tambah notes
  const newNotes = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNotes);

  // check kalo udh tambah
  let isSuccess = false;

  for (const note of notes){
    if (note.id ==  id){
      isSuccess = true;
      break;
    }
  }

  if (isSuccess){

    const responseText = {
      'status': 'success',
      'message': 'Catatan berhasil ditambahkan',
      'data': {
        'noteId': id
      }
    };

    return h
      .response(responseText)
      .code(201);

  } else {

    const responseText = {
      'status': 'error',
      'message': 'Catatan gagal ditambahkan'
    };

    return h
      .response(responseText)
      .code(500);
  }
};

const getAllNotesHandler = (request, h) => {

  const responseText = {
    'status': 'success',
    'data' : {
      'notes': notes
    }
  };

  return h.response(responseText).code(200);
};

const getNotesHandler = (request, h) => {

  const { id } = request.params;

  // check kalo ada notes
  const note = notes.filter((e) => e.id == id);

  if (note.length > 0){

    const responseText = {
      'status': 'success',
      'data': {
        'note': note[0]
      }
    };

    return h.response(responseText).code(200);

  } else {

    const responseText = {
      'status': 'fail',
      'message': 'Catatan tidak ditemukan'
    };

    return h.response(responseText).code(404);
  }
};

const updateNoteHander = (request, h) => {

  const id = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const idx = notes.findIndex((e) => e.id == id);

  if (idx.length != -1){

    notes[idx] = {
      ...notes[idx], title, tags, body, updatedAt
    };

    const responseText = {
      'status': 'success',
      'message': 'Catatan berhasil diperbaharui'
    };

    return h.response(responseText).code(200);

  } else {

    const responseText = {
      'status': 'fail',
      'message': 'Gagal memberbaharui catatan karena id tidak ada'
    };

    return h.response(responseText).code(404);
  }
};

const deleteNoteHandler = (request, h) => {

  const { id } = request.params;

  const idx = notes.findIndex((e) => e.id === id);

  if (idx != -1){

    notes.splice(idx, 1);

    const responseText = {
      'status': 'success',
      'message': 'Catatan berhasil dihapus'
    };

    return h.response(responseText).code(200);

  } else {

    const responseText = {
      'status': 'fail',
      'message': 'Gagal menghapus catatan karena id tidak ada'
    };

    return h.response(responseText).code(404);
  }
};

module.exports = { addNoteHandler, getAllNotesHandler, getNotesHandler, updateNoteHander, deleteNoteHandler };