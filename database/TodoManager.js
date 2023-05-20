const AccountModel = require("./ModelManager.js");

const AccountManager = require("./AccountManager.js");
const DisplayManager = require("./DisplayManager.js");
const TaskManager = require("./TaskManager.js");

module.exports.ManageTodoAccount = async (account, request, response) => {
  AccountManager.ManageAccount(account, request, response);
};

module.exports.DisplayTodoLists = (account, response) => {
  AccountModel.findOne({ email: account.email }).then((profile) => {
    DisplayManager.DisplayLists(account, profile, response);
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
