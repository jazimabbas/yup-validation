const router = require("express").Router();
const validate = require("./middlewares/validate");
const { itemSchema } = require("./libs/validations/item");

router.get("/:id", validate(itemSchema), (req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
