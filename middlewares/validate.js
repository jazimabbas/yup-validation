const validate = require("../libs/validate");

module.exports =
  (schema, abortEarly = false) =>
  async (req, _, next) => {
    await validate(schema, { body: req.body, params: req.params, query: req.query }, abortEarly);

    next();
  };
