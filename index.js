const express = require("express");
const bodyParser = require("body-parser");

const TodoManager = require(__dirname + "/database/TodoManager.js");

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

app.get("/account/:email/:password/todo/:template", (req, res) => {
  const account = {
    email: req.params.email,
    password: req.params.password,
    template: req.params.template,
  };

  TodoManager.Display(account, res);
});

app.post("/account/:email/:password/todo/:template", async (req, res) => {
  const todo = {
    button: req.body.todoButton,
    task: req.body.task,
  };

  const account = {
    email: req.params.email,
    password: req.params.password,
  };

  TodoManager.Manage(account, todo, res);
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
