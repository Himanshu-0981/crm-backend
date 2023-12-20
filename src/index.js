require("dotenv").config();
require("./database");

const cors = require("cors");

const express = require("express");
const ENV_CONFIG = require("./config/env_config");
const userRouter = require("./routers/router.user");

const app = express();
const PORT = ENV_CONFIG.PORT || 8080; // incase env port not working 8080 is default port

// app level middleware
app.use(cors());
app.use(express.json());

// user route
app.use("/api/v1/user", userRouter);

// listening to port
app.listen(PORT, () => console.info(` http://localhost:${PORT}`));
