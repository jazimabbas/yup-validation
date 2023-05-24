const yup = require("yup");

const authSchema = yup.object({
  body: yup.object({
    name: yup.string().min(8).max(40).required().label("Name"),
    email: yup.string().email().required().label("Email"),
    password: yup
      .string()
      .required()
      .min(8)
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      )
      .label("Password"),
  }),
});

module.exports = { authSchema };
