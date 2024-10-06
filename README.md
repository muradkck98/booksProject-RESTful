# Book Management API

## Project Overview

The Book Management API is a Node.js application designed to manage a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books, making it easy to maintain and access book data. This API is built using Express.js, Mongoose, and MongoDB, providing a robust backend for managing book-related data.

## Features


- **Create a Book**: Add a new book with details such as title, author, and description.
- **Retrieve All Books**: Fetch a list of all books in the database.
- **Update a Book**: Modify existing book information using its unique ID.
- **Delete a Book**: Remove a book from the database by its ID.
- **Error Handling**: Standardized error responses for validation and resource handling.

## **API Endpoints**

The following endpoints allow for full CRUD functionality:

- **POST /api/books**: Create a new book.
  - **Request Body**: JSON object containing book details (e.g., title, author, etc.).
  - **Response**: Newly created book data.
  
- **GET /api/books**: Retrieve all books.
  - **Response**: An array of books from the database.
  
- **PUT /api/books/:id**: Update an existing book by its unique ID.
  - **Request Params**: Book ID.
  - **Request Body**: Updated fields for the book.
  - **Response**: Updated book data.
  
- **DELETE /api/books/:id**: Delete a book by its unique ID.
  - **Request Params**: Book ID.
  - **Response**: Success message and ID of the deleted book.

## Technologies Used


- **Node.js**: JavaScript runtime used to build scalable, server-side applications.
- **Express.js**: Minimal and flexible Node.js web framework used to build APIs.
- **MongoDB**: NoSQL database used for storing book-related data.
- **Mongoose**: ODM library that simplifies interactions between Node.js and MongoDB.
- **Docker**: Containerization platform used to package the application for consistent deployment.
- **Jest**: JavaScript testing framework used to write unit tests.

## Getting Started


### **Prerequisites**

To run the application locally or in a containerized environment, you will need:

- [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- [Node.js](https://nodejs.org/) and npm (if not using Docker).

### **Installation and Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/muradkck98/booksProject-RESTful.git
   cd booksProject-RESTful
2. **Set up environment variables**
    ```bash
    $ touch .env

    PORT=3000
    MONGO_URI=mongodb://mongo:27017/booksdb
    TEST_MONGO_URI=mongodb://localhost:27017/book_test_db
3. **Run the application using Docker Compose:**
    ```bash
    docker-compose up app
### Test:

#### Manual API Testing (Postman Collection):
A Postman collection (collection.json) is provided for manual API testing. You can import the collection into Postman and test all the available endpoints. The collection includes sample requests for creating, updating, deleting, and retrieving books.
#### Run Unit Tests:
This project includes unit tests to verify the functionality of the application.
```
    $ npm test
```
## **Project Structure**

The project follows a clean architecture approach with the following directory structure:

- **`controllers/`**: Handles incoming HTTP requests and forwards them to the service layer. It contains the logic for processing API requests and sending responses.
- **`services/`**: Contains the core business logic. This layer interacts with the data layer (i.e., the models) and is responsible for implementing application use cases.
- **`domain/models/`**: Mongoose models that define the structure and relationships of the MongoDB collections. These models represent the data entities in the application.
- **`routes/`**: Defines the API routes/endpoints and maps them to the corresponding controller methods.
- **`interfaces/utils/`**: Custom error handling and utility functions used across the application, including error classes and response helpers.
- **`tests/`**: Contains unit tests to ensure the functionality of the application. These tests target individual modules and verify their correctness.

---

## **Docker Setup**

The application is containerized using Docker, and a `docker-compose.yml` file is provided for easy setup. The following containers are created:

- **MongoDB**: The database is hosted in a MongoDB container.
- **Node.js API**: The application is hosted in a separate container that interacts with the MongoDB container.

### **Commands**:

- **Build and Start Containers**:
   ```bash
   docker-compose up --build
- **Stop Containers:**:
    ```bash
    docker-compose down