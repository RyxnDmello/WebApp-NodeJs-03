const AccountModel = require("./ModelManager.js");

const AccountManager = require("./AccountManager.js");
const DisplayManager = require("./DisplayManager.js");
const TaskManager = require("./TaskManager.js");

module.exports.CreateTodoAccount = (account, response) => {
  AccountManager.CreateAccount(account, response);
};

module.exports.DisplayTodoLists = (account, response) => {
  AccountModel.findOne({ email: account.email }).then((profile) => {
    DisplayManager.DisplayLists(account, profile, response);
  });
};

module.exports.ManageTodoLists = async (account, todo, response) => {
  const getURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  console.log(todo.taskButton);
  console.log(todo.taskTitle);
  console.log(todo.taskDescription);

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
};
