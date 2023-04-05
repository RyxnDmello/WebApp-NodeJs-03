const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/todo/:template", (req, res) => {
  res.render("template", {
    title: "Template",
  });
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
