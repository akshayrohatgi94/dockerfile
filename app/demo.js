const express = require("express");
const chalk = require("chalk");

const app = express();

app.get("/api", (req, res) => {
  res.json({ test: "test3", hello: "test2" });
});

app.get("/some/all", (req, res) => {
  res.json({ all: "all" });
});

app.listen(8080, () => {
  console.log("Listening on port", chalk.green(8080));
});
