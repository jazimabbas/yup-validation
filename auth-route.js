const router = require("express").Router();
const validate = require("./middlewares/validate");
const { authSchema } = require("./libs/validations/auth");

router.post("/", validate(authSchema), (req, res) => {
  res.json(req.body);
});

module.exports = router;
