const mongoose = require('mongoose');

const bodoviSucaSchema = new mongoose.Schema({
  natjecanjeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Natjecanje',
    required: true
  },
  nastupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nastup',
    required: true
  },
  sudacId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  bodovi: {
    type: Number,
    required: true,
    min: 0,
    max: 30
  }
});

module.exports = mongoose.model('Bodovi_Suca', bodoviSucaSchema);
