const express = require("express");
const app = express();


//use routeeerrr
const router = require('./router');

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});