const mongoose = require('mongoose');

const lendingSchema = new mongoose.Schema({
  idDono: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  idMutuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dataDevolucao: {
    type: Date,
    required: true
  },
  emAtraso: {
    type: Boolean,
    default: false
  }
});

const Lending = mongoose.model('Lending', lendingSchema);

module.exports = Lending;
