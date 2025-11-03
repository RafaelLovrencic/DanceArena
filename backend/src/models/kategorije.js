const mongoose = require('mongoose');

const kategorijaSchema = new mongoose.Schema({
  godiste: {
    type: String,
    enum: ['djeca', 'juniori', 'seniori'],
    required: true
  },
  stil: {
    type: String,
    required: true
  },
  velicina: {
    type: String,
    enum: ['solo', 'duo', 'mala_grupa', 'formacija'],
    required: true
  }
});

module.exports = mongoose.model('Kategorije', kategorijaSchema);
