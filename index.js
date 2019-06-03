require("dotenv").config();
const server = require("./api/server.js");
var http = require("http");
let port;

if (process.env.DB_ENV === "development") {
  port = 5005;
} else if (process.env.DB_ENV === "production") {
  port = process.env.PORT;
}

server.listen(port, () => {
  console.log(`Server listening ${port}`);
});
