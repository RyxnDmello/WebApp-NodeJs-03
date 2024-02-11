require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const memoryStore = require("memorystore")(session);

const app = express();

const { ConnectDatabase } = require("./database/DatabaseManager.js");

const homeRoute = require("./routes/Home.js");
const accountRoute = require("./routes/Account.js");
const todoRoute = require("./routes/Todo.js");
const errorRoute = require("./routes/Error.js");

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(
  session({
    secret: "TaskTonic",
    cookie: {
      secure: false,
      maxAge: 86400000,
    },
    store: new memoryStore({
      checkPeriod: 86400000,
    }),
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

ConnectDatabase();

app.use("/", homeRoute);
app.use("/todo", todoRoute);
app.use("/account", accountRoute);
app.use("/error", errorRoute);

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
