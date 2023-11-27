const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/hey", (req, res) => {
  res.send("hello world");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
