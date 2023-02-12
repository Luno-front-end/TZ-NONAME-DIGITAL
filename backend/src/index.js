const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.get("/auth", (req, res) => {
  res.send("auth");
});

app.listen(port, () => {
  console.log(port);
});
