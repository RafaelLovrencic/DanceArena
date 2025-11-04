const mongoose = require('mongoose');

const natjecanjeSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: true
  },
  opis: {
    type: String,
    required: true
  },
  datum: {
    type: Date,
    required: true
  },
  lokacija: {
    type: String,
    required: true
  },
  organizatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // referenca na organizatora
    required: true
  },
  kategorije: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kategorije' // referenca na kolekciju kategorija
  }],
  suci: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // referenca na suce (User)
  }]
});

module.exports = mongoose.model('Natjecanje', natjecanjeSchema, 'natjecanje');
