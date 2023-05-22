const express = require("express");

const app = express();
app.get("/", (_, res) => res.json({ message: "YUP Validation!" }));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT} ...`));
