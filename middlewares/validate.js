const validate = require("../libs/validate");

module.exports =
  (schema, abortEarly = false) =>
  async (req, _, next) => {
    const cleanFields = await validate(
      schema,
      { body: req.body, params: req.params, query: req.query },
      abortEarly
    );

    req.locals = { ...(req.locals ?? {}) };
    req.locals.cleanFields = cleanFields;

    next();
  };
