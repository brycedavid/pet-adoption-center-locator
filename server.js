const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/app")));
app.use(express.static(path.join(__dirname, "/images")));

app.listen(3000, () => {
  console.log("Port 3000");
});
