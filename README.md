# Book Management API

## Project Overview

The Book Management API is a Node.js application designed to manage a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books, making it easy to maintain and access book data. This API is built using Express.js, Mongoose, and MongoDB, providing a robust backend for managing book-related data.

## Features

- Create a new book
- Retrieve all books
- Update an existing book by ID
- Delete a book by ID

## API Endpoints

- POST /api/books
Create a new book.
- GET /api/books
Retrieve all books.
- PUT /api/books/:id
Update an existing book by ID.
- DELETE /api/books/:id
Delete a book by ID.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web framework for Node.js, used for building APIs.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying data manipulation.
- **MongoDB**: NoSQL database used for storing book data.
- **Docker**: Containerization platform for deploying the application.

## Getting Started
### Test:
#### Run Unit Tests:
```
    $ npm test
```
#### Collection:
You can add the 'collection.json' file as Postmen collection to test manually and try Apis

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine.

### Running the Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muradkck98/booksProject-RESTful.git
   cd booksProject-RESTful

2. **Create .env**
    ```bash
    $ touch .env

    PORT=3000
    MONGO_URI=mongodb://mongo:27017/booksdb
    TEST_MONGO_URI=mongodb://localhost:27017/book_test_db


3. **Run the application using Docker Compose:**
    ```bash
    docker-compose up app

