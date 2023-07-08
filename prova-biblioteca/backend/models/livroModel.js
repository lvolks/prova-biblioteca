const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    isbn: Number,
    titulo: {
        type: String,
        required: true,
      },
    autor: {
        type: String,
        required: true,
      },
    ano: {
        type: String,
        required: true,
      },
    tema: {
        type: String,
        required: true,
      },
    alugado: {
        type: Boolean,
        required: true,
        default: false
      }
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;