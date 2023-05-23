const express = require("express");
require("express-async-errors");
const unhandleExceptions = require("./middlewares/unhandle-exceptions");

const app = express();
app.use(express.json());
app.get("/", (_, res) => res.json({ message: "YUP Validation!" }));
app.use(unhandleExceptions);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT} ...`));
