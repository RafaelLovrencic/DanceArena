const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['organizator', 'voditelj', 'sudac', 'admin'],
    required: true
  },
  ime: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  oauthProvider: {
    type: {
      type: String,
      required: true
    },
    providerId: {
      type: String,
      required: true
    }
  },
  klubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Klub',
    required: false
  }
});

module.exports = mongoose.model('user', userSchema, 'user');