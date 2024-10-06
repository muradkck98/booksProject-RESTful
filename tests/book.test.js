const mongoose = require('mongoose');
const Book = require('../src/domain/models/bookModel');
require('dotenv').config();


beforeAll(async () => {
  const url = process.env.TEST_MONGO_URI ;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close(); 
});

describe('Book API', () => {
  let createdBookId;

  it('should create a new book', async () => {
    const newBook = {
      title: 'Test Book',
      author: 'John Doe',
      publishedYear: 2023,
      genre: 'Fiction',
      publisher: 'Test Publisher',
      numberOfPages: 250,
      language: 'English',
      isbn: `1234567890-${Date.now()}`,
      price: 29.99
    };

    const response = await Book.create(newBook);
    createdBookId = response._id;
    expect(response.title).toBe(newBook.title);
  });

  it('should get a book by ID', async () => {
    const response = await Book.findById(createdBookId);
    expect(response).toBeTruthy();
    expect(response.title).toBe('Test Book');
  });

  it('should update a book', async () => {
    const updatedBook = {
      title: 'Updated Test Book',
      author: 'John Doe Updated',
      publishedYear: 2024,
      genre: 'Non-Fiction',
      publisher: 'Updated Publisher',
      numberOfPages: 300,
      language: 'English',
      isbn: `0987654321-${Date.now()}`,
      price: 39.99
    };

    const response = await Book.findByIdAndUpdate(createdBookId, updatedBook, { new: true });
    expect(response.title).toBe(updatedBook.title);
  });

  it('should delete a book', async () => {
    const response = await Book.findByIdAndDelete(createdBookId);
    expect(response).toBeTruthy();

    const deletedBook = await Book.findById(createdBookId);
    expect(deletedBook).toBeNull();
  });
});
