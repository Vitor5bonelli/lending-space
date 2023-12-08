const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  categoria: String,
  descricao: String,
  idDono: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
