const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/hey", (req, res) => {
  res.send("hello world");
});

router.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

router.get("/print", (req, res) => {
  res.send(req.query.name);
});

module.exports = router;
