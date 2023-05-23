const Errors = require("../custom-errors");

module.exports = async function (schema, fields, abortEarly = false) {
  try {
    return await schema.validate(fields, { abortEarly });
  } catch (ex) {
    throw new Errors.ValidationError({
      message: "Please enter valid information",
      errors: ex.errors,
    });
  }
};
