const router = require("express").Router();
const validate = require("./middlewares/validate");
const { authSchema } = require("./libs/validations/auth");

router.post("/", validate(authSchema), (req, res) => {
  res.json(req.locals);
});

module.exports = router;
