const bookService = require('../application/services/BookService');
const { ValidationError, NotFoundError } = require('../interfaces/utils/errors');

exports.createBook = async (req, res, next) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new ValidationError('Invalid book data provided'));
    }
    next(error);
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body);
    res.status(200).json(book);
  } catch (error) {
    if (error.name === 'CastError') {
      return next(new ValidationError('Invalid book ID'));
    }
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
