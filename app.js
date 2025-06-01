const express = require("express");
const serverless = require("serverless-http"); // Required for wrapping Express in Lambda

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js on Lambda!");
});

module.exports.handler = serverless(app);
