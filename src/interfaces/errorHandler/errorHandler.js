const { ValidationError, NotFoundError } = require('./errors');

exports.errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError || err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal Server Error' });
};
