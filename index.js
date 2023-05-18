const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const TodoManager = require(__dirname + "/database/TodoManager.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(
  session({
    secret: "WebApp-Personal-03",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

app.get("/", (req, res) => {
  req.session.email = "test@gmail.com";
  // console.log(`Session Email: ${req.session.email}`);
  res.render("home");
});

app.post("/account/:type", async (req, res) => {
  if (req.params.type === "create") {
    const account = {
      email: req.body.email,
      password: req.body.password,
      retypePassword: req.body.password,
    };

    TodoManager.ManageTodoAccount(account, req, res);
    return;
  }

  const account = {
    email: req.body.email,
    password: req.body.password,
    retypePassword: req.body.retypePassword,
  };

  TodoManager.ManageTodoAccount(account, req, res);
});

app.get("/todo/:type", (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/");
    return;
  }

  const account = {
    email: req.session.email,
    password: req.session.password,
    type: req.params.type,
  };

  TodoManager.DisplayTodoLists(account, res);
});

app.post("/todo/:type", async (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/");
    return;
  }

  const account = {
    email: req.session.email,
    password: req.session.password,
    type: req.params.type,
  };

  const todo = {
    taskButton: req.body.taskButton,
    taskTitle: req.body.taskTitle,
    taskDescription: req.body.taskDescription,
    taskPriority: req.body.taskPriority,
  };

  TodoManager.ManageTodoLists(account, todo, res);
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
