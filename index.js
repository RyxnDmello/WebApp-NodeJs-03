const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const database = require(__dirname + "/database/ListManager.js");

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

  database.DisplayTasks(account, res);
});

app.post("/account/:email/:password/todo/:template", async (req, res) => {
  const account = {
    email: req.params.email,
    password: req.params.password,
  };

  const task = req.body.newTask;

  database.AddTask(account, task, res);

  res.redirect(
    `/account/${req.params.email}/${req.params.password}/todo/${req.params.template}`
  );
});

app.listen(1000, () => {
  console.log(`PORT: ${PORT} | ACTIVE`);
});
