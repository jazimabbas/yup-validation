const yup = require("yup");
const mongoose = require("mongoose");

const itemSchema = yup.object({
  params: yup.object({
    id: yup.string().test({
      name: "valid-mongodb-id",
      message: "Invalid item ID",
      test: (value) => {
        return mongoose.Types.ObjectId.isValid(value);
      },
    }),
  }),
});

module.exports = { itemSchema };
