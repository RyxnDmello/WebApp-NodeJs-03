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

let tasks = [];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/todo/:template", (req, res) => {
  res.render("template", {
    title: "Template",
    tasks: tasks,
  });
});

app.post("/posted", (req, res) => {
  if (req.body.removeButton >= "0") {
    tasks.pop(req.body.removeButton);
    res.redirect("/todo/daily");
    return;
  }

  if (req.body.delete === "delete") {
    res.redirect("/todo/daily");
    tasks.pop();
  }

  tasks.push(req.body.newTask);
  res.redirect("/todo/daily");
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
