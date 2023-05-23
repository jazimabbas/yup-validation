const validate = require("../libs/validations/validate");

module.exports =
  (schema, abortEarly = false) =>
  async (req, res, next) => {
    const cleanFields = await validate(
      schema,
      { body: req.body, params: req.params, query: req.query },
      abortEarly
    );
    res.locals.cleanFields = cleanFields;

    next();
  };
