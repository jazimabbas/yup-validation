class HttpError extends Error {
  statusCode;

  constructor({ message, statusCode }) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

class ValidationError extends HttpError {
  statusCode = 422;
  errors = [];

  constructor({ message, errors }) {
    super(message);
    this.errors = errors ?? [];
  }
}

module.exports = { HttpError, ValidationError };
