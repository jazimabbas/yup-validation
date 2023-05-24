const yup = require("yup");

const envVarSchema = yup.object().shape({
  DB_USER: yup.string().required().label("DB User"),
  DB_HOST: yup.string().required().label("DB Host"),
  DB_PORT: yup.number().required().label("DB Port"),
});

module.exports = { envVarSchema };
