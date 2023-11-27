const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware, to prase the content of the post request
app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./router");
app.use("/", router);

app.use("/submit", (req, res, next) => {
  if (req.body.name === "allahy3een") {
    res.status(400).send('Error: Name cannot be "allahy3een"');
  } else {
    next();
  }
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form data received, thank you!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
