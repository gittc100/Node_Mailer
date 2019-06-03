const express = require("express");
const configureMiddleware = require("./middleware/middleware.js");
require('dotenv').config();

const mailerRouter = require("./routes/mailerRouter.js");

const server = express();
configureMiddleware(server);

server.use("/send", mailerRouter);

server.get("/", (req, res) => {
  res.status(200).json("Sanity Check ITS WORKING");
  console.log("Sanity Check ITS WORKING!!!");
});

module.exports = server;
