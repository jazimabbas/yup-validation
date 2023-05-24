const express = require("express");
require("express-async-errors");
const authRoutes = require("./auth-route");
const unhandleExceptions = require("./middlewares/unhandle-exceptions");

const app = express();
app.use(express.json());
app.get("/", (_, res) => res.json({ message: "YUP Validation!" }));
app.use("/auth", authRoutes);
app.use(unhandleExceptions);

module.exports = app;
