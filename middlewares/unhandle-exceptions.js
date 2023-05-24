const Errors = require("../libs/custom-errors");

module.exports = (err, _, res, next) => {
  let statusCode = 500;
  let message = "Server Error";
  let errors = [];

  if (err instanceof Errors.HttpError) {
    statusCode = err.statusCode;
    message = err.message;

    if (err instanceof Errors.ValidationError) {
      errors = err.errors;
    }
  }

  console.log("error: ", err);

  res.status(statusCode).json({ message, errors });

  next();
};
