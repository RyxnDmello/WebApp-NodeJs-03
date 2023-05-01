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

module.exports.ManageTodoLists = async (account, todo, task, response) => {
  const getURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  if (task.taskButton === "progress") {
    if (task.taskTitle.length !== 0) {
      TaskManager.AddProgressTask(account, task);
    }

    response.redirect(getURL);
    return;
  }

  if (todo.deleteProgressTask !== undefined) {
    TaskManager.DeleteProgressTask(account, todo.deleteProgressTask);
    response.redirect(getURL);
    return;
  }

  if (todo.addCompletedTask !== undefined) {
    TaskManager.AddCompletedTask(account, todo.addCompletedTask);
    response.redirect(getURL);
    return;
  }

  if (todo.deleteCompletedTask !== undefined) {
    TaskManager.DeleteCompletedTask(account, todo.deleteCompletedTask);
    response.redirect(getURL);
    return;
  }
};
