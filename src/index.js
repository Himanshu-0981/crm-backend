require("dotenv").config();

const express = require("express");
const { env_config } = require("./config/env_config");

const app = express();
const PORT = env_config.PORT || 3000;

app.get("/", (req, res) => res.send({ message: "hi" }));

// listening to port
app.listen(PORT, () =>
  console.info(`server is running http://localhost:${PORT}`)
);
