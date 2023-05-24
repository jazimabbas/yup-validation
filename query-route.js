const router = require("express").Router();
const validate = require("./middlewares/validate");
const { collectionSchema } = require("./libs/validations/collection");

router.get("/", validate(collectionSchema), (req, res) => {
  res.json({ query: req.query });
});

module.exports = router;
