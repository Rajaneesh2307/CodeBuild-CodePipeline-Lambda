const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js on Lambda!");
});

module.exports.handler = serverless(app);
