const express = require("express");
const configureMiddleware = require("./middleware/middleware.js");
require("dotenv").config();

const mailerRouter = require("./routes/mailerRouter.js");

const server = express();
configureMiddleware(server);

server.use("/send", mailerRouter);

setInterval(function() {
  server.get("/", (req, res) => {
    res.status(200).json("Keep her going!");
  });
}, 5000); // every 5 minutes (300000)

module.exports = server;
