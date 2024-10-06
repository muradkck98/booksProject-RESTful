const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  isbn: { type: String, required: true, unique: true },
  language: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
  publisher: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
