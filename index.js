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

app.post("/account/register", (req, res) => {
  const account = {
    email: req.body.email,
    password: req.body.password,
    retypePassword: req.body.retype,
  };

  TodoManager.CreateAccount(account, res);
});

app.get("/account/:email/:password/todo/template/:type", (req, res) => {
  const account = {
    email: req.params.email,
    password: req.params.password,
    type: req.params.type,
  };

  TodoManager.DisplayTodo(account, res);
});

app.post("/account/:email/:password/todo/template/:type", async (req, res) => {
  const todo = {
    addButton: req.body.addButton,
    addTask: req.body.addTask,
    deleteProgressTask: req.body.deleteProgressTask,
    deleteCompletedTask: req.body.deleteCompletedTask,
  };

  const account = {
    email: req.params.email,
    password: req.params.password,
    type: req.params.type,
  };

  TodoManager.ManageTodo(account, todo, res);
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
