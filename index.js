const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const TodoManager = require(__dirname + "/database/TodoManager.js");
const HomeData = require(__dirname + "/json/home.json");
const ErrorData = require(__dirname + "/json/error.json");

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
  const home = {
    header: HomeData.header,
    templates: HomeData.templates,
    custom: HomeData.custom,
    personal: HomeData.personal,
    inspired: HomeData.inspired,
    comments: HomeData.comments,
    footer: HomeData.footer,
    account: false,
    username: "",
  };

  if (req.session.email === undefined) {
    res.render("home", home);
    return;
  }

  home.username = req.session.username;
  home.account = true;
  res.render("home", home);
});

app.get("/todo/collection", (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/error/account-absent");
    return;
  }

  const account = {
    email: req.session.email,
  };

  TodoManager.DisplayTodoCollection(account, res);
});

app.get("/todo/:type", (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/error/account-absent");
    return;
  }

  const account = {
    email: req.session.email,
    password: req.session.password,
    type: req.params.type,
  };

  TodoManager.DisplayTodoLists(account, res);
});

app.get("/error/:type", (req, res) => {
  const type = req.params.type;

  if (type === "account-exists") {
    res.render("error", {
      error: {
        title: ErrorData.accountExists.title,
        description: ErrorData.accountExists.description,
        image: ErrorData.accountExists.image,
      },
    });

    return;
  }

  if (type === "account-absent") {
    res.render("error", {
      error: {
        title: ErrorData.accountAbsent.title,
        description: ErrorData.accountAbsent.description,
        image: ErrorData.accountAbsent.image,
      },
    });

    return;
  }

  if (type === "account-invalid") {
    res.render("error", {
      error: {
        title: ErrorData.accountInvalid.title,
        description: ErrorData.accountInvalid.description,
        image: ErrorData.accountInvalid.image,
      },
    });

    return;
  }

  if (type === "account-creation-failure") {
    res.render("error", {
      error: {
        title: ErrorData.accountCreationFailure.title,
        description: ErrorData.accountCreationFailure.description,
        image: ErrorData.accountCreationFailure.image,
      },
    });

    return;
  }

  if (type === "login-password-incorrect") {
    res.render("error", {
      error: {
        title: ErrorData.loginPasswordIncorrect.title,
        description: ErrorData.loginPasswordIncorrect.description,
        image: ErrorData.loginPasswordIncorrect.image,
      },
    });

    return;
  }

  if (type === "login-password-mismatch") {
    res.render("error", {
      error: {
        title: ErrorData.loginPasswordMismatch.title,
        description: ErrorData.loginPasswordMismatch.description,
        image: ErrorData.loginPasswordMismatch.image,
      },
    });

    return;
  }
});

/*-----------------------------------------*/
/*------------- POST REQUESTS -------------*/
/*-----------------------------------------*/

app.post("/account/:type", async (req, res) => {
  const type = req.params.type;

  if (type === "create") {
    const account = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      type: type,
    };

    TodoManager.ManageTodoAccount(account, req, res);
    return;
  }

  const account = {
    email: req.body.email,
    password: req.body.password,
    retypePassword: req.body.retypePassword,
    type: type,
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

app.listen(process.env.PORT, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
