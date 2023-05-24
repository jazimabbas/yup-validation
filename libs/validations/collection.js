const yup = require("yup");

const collectionSchema = yup.object({
  query: yup.object({
    sort: yup.string().oneOf(["asc", "desc"]).required().label("Sort"),
    limit: yup.number().min(5).max(50).required().label("Limit"),
    pageSize: yup.number().min(1).required().label("Page Size"),
  }),
});

module.exports = { collectionSchema };
