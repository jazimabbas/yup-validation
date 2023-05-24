const app = require("./app");
const validate = require("./libs/validate");
const { envVarSchema } = require("./libs/validations/env-vars");

async function bootstrap() {
  try {
    await validate(envVarSchema, process.env);

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`App is listening on port ${PORT} ...`));
  } catch (err) {
    console.log("Error while bootstraping app", err);
  }
}

bootstrap();
