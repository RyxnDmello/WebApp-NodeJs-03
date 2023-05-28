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
    res.redirect("/error/absent");
    return;
  }

  const account = {
    email: req.session.email,
  };

  TodoManager.DisplayTodoCollection(account, res);
});

app.get("/todo/:type", (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/error/absent");
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

  if (type === "exists") {
    res.render("error", {
      error: {
        title: "ACCOUNT ALREADY EXISTS",
        description:
          "Login to your account to access your lists and related features.",
        URL: "/#account-section",
      },
    });

    return;
  }

  if (type === "absent") {
    res.render("error", {
      error: {
        title: "CREATE AN ACCOUNT",
        description:
          "An account is required to access the lists and related features.",
        URL: "/#account-section",
      },
    });

    return;
  }

  if (type === "signup") {
    res.render("error", {
      error: {
        title: "FAILED TO SIGNUP",
        description:
          "An unexpected error has occurred, please try again in a little while.",
        URL: "/#account-section",
      },
    });

    return;
  }

  if (type === "login-account") {
    res.render("error", {
      error: {
        title: "FAILED TO LOGIN",
        description: "No account exists with this email.",
        URL: "/#account-section",
      },
    });

    return;
  }

  if (type === "login-password") {
    res.render("error", {
      error: {
        title: "FAILED TO LOGIN",
        description: "The password you entered is incorrect.",
        URL: "/#account-section",
      },
    });

    return;
  }

  if (type === "login-mismatch") {
    res.render("error", {
      error: {
        title: "FAILED TO LOGIN",
        description: "The passwords you entered does not match",
        URL: "/#account-section",
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

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
