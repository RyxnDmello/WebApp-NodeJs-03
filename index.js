const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const TodoManager = require(__dirname + "/database/TodoManager.js");
const DataManager = require(__dirname + "/json/home.json");

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
app.use(express.static("./json"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

/*------------------------------------------*/
/*-------------- GET REQUESTS --------------*/
/*------------------------------------------*/

app.get("/", (req, res) => {
  if (req.session.email === undefined) {
    res.render("home", {
      header: DataManager.header,
      templates: DataManager.templates,
      custom: DataManager.custom,
      personal: DataManager.personal,
      inspired: DataManager.inspired,
      comments: DataManager.comments,
      footer: DataManager.footer,
      account: false,
    });

    return;
  }

  res.render("home", {
    header: DataManager.header,
    templates: DataManager.templates,
    custom: DataManager.custom,
    personal: DataManager.personal,
    inspired: DataManager.inspired,
    comments: DataManager.comments,
    footer: DataManager.footer,
    account: true,
  });
});

app.get("/todo/collection", (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/");
    return;
  }

  const account = {
    email: req.session.email,
  };

  TodoManager.DisplayTodoCollection(account, res);
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

/*-----------------------------------------*/
/*------------- POST REQUESTS -------------*/
/*-----------------------------------------*/

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
