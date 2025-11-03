const mongoose = require('mongoose');

const nastupSchema = new mongoose.Schema({
  natjecanjeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Natjecanje',
    required: true
  },
  kategorijaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kategorije',
    required: true
  },
  klubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Klub',
    required: true
  },
  imekoreografije: {
    type: String,
    required: true
  },
  trajanje: {
    type: Number,
    required: true
  },
  imekoreografa: {
    type: String,
    required: true
  },
  glazbaUrl: {
    type: String,
    required: true
  },
  prihvaceno: {
    type: Boolean,
    required: true
  },
  bodovi: {
    type: Number,
    default: 0
  },
  ranking: {
    type: Number
  }
});

module.exports = mongoose.model('Nastup', nastupSchema);
