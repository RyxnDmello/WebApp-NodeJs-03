const AccountModel = require("./ModelManager.js");

const AccountManager = require("./AccountManager.js");
const DisplayManager = require("./DisplayManager.js");
const TaskManager = require("./TaskManager.js");

module.exports.ManageTodoAccount = async (account, request, response) => {
  if (account.type === "create") {
    AccountManager.CreateAccount(account, request, response);
    return;
  }

  if (account.type === "login") {
    AccountManager.LoginAccount(account, request, response);
    return;
  }
};

module.exports.DisplayTodoLists = (account, response) => {
  AccountModel.findOne({ email: account.email })
    .select(`lists.${account.type}`)
    .then((profile) => {
      DisplayManager.DisplayLists(account.type, profile.lists, response);
    });
};

module.exports.DisplayTodoCollection = (account, response) => {
  AccountModel.findOne({ email: account.email })
    .select("lists")
    .then((profile) => {
      DisplayManager.DisplayCollection(profile.lists, response);
    });
};

module.exports.ManageTodoLists = async (account, todo, response) => {
  const getURL = `/todo/${account.type}`;

  if (todo.taskButton === "AddProgressTask") {
    TaskManager.AddProgressTask(account, todo);
    response.redirect(getURL);
    return;
  }

  if (todo.taskButton === "DeleteProgressTask") {
    TaskManager.DeleteProgressTask(account, todo);
    response.redirect(getURL);
    return;
  }

  if (todo.taskButton === "AddCompletedTask") {
    TaskManager.AddCompletedTask(account, todo);
    response.redirect(getURL);
    return;
  }

  if (todo.taskButton === "DeleteCompletedTask") {
    TaskManager.DeleteCompletedTask(account, todo);
    response.redirect(getURL);
    return;
  }

  if (todo.taskButton === "DeleteAllTasks") {
    TaskManager.DeleteAllTasks(account);
    response.redirect(getURL);
    return;
  }
};
