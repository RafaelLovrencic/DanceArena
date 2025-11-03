const mongoose = require('mongoose');

const klubSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: true
  },
  lokacija: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // referenca na vlasnika kluba (User)
    required: true
  }
});

module.exports = mongoose.model('Klub', klubSchema);
