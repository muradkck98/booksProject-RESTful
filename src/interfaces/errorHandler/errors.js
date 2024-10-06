class BaseError extends Error {
    constructor(name, statusCode, description) {
      super(description);
      this.name = name;
      this.statusCode = statusCode;
      Error.captureStackTrace(this);
    }
  }
  
  class ValidationError extends BaseError {
    constructor(description = 'Invalid data provided') {
      super('ValidationError', 400, description);
    }
  }
  
  class NotFoundError extends BaseError {
    constructor(description = 'Resource not found') {
      super('NotFoundError', 404, description);
    }
  }
  
  module.exports = {
    ValidationError,
    NotFoundError,
  };
  