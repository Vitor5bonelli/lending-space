const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  telefone: String,
  lendables: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  lends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lending' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;