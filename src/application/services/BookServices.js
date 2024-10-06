const Book = require('../domain/models/Book');
const { NotFoundError, ValidationError } = require('../../interfaces/utils/errors');

class BookService {
  async createBook(data) {
    const book = new Book(data);
    await book.save();
    return book;
  }

  async getAllBooks() {
    return await Book.find();
  }

  async updateBook(id, data) {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!book) {
      throw new NotFoundError('Book not found');
    }
    return book;
  }

  async deleteBook(id) {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      throw new NotFoundError('Book not found');
    }
    return book;
  }
}

module.exports = new BookService();
