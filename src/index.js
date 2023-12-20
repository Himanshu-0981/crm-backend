require("dotenv").config();
require("./database");

const cors = require("cors");

const express = require("express");
const ENV_CONFIG = require("./config/env_config");
const userRouter = require("./routers/router.user");
const mangeMasterRouter = require("./routers/manageMaster");
const manageLeads = require("./routers/manageLeads");

const app = express();
const BASE_URI = "/api/v1/";
const PORT = ENV_CONFIG.PORT || 8080; // incase env port not working 8080 is default port

// app level middleware
app.use(cors());
app.use(express.json());

// user route
app.use(`${BASE_URI}user`, userRouter);

// ## Manage Master Route
app.use(`${BASE_URI}manage-master`, mangeMasterRouter);

// ## Manage Leads Route
app.use(`${BASE_URI}manage-leads`, manageLeads);

// listening to port
app.listen(PORT, () => console.info(` http://localhost:${PORT}`));
