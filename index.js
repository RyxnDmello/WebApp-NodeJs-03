const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
