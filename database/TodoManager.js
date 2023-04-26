const AccountModel = require("./ModelManager.js");

const DisplayManager = require("./DisplayManager.js");
const TaskManager = require("./TaskManager.js");

module.exports.CreateAccount = (account, response) => {
  const profile = new AccountModel({
    email: account.email,
    password: account.password,
    lists: {
      daily: {
        progress: [],
        completed: [],
      },
      weekly: {
        progress: [],
        completed: [],
      },
      monthly: {
        progress: [],
        completed: [],
      },
      yearly: {
        progress: [],
        completed: [],
      },
    },
  });

  profile.save();

  response.redirect("/");
};

module.exports.DisplayTodo = (account, response) => {
  AccountModel.findOne({ email: account.email }).then((profile) => {
    DisplayManager.DisplayTasks(account, profile, response);
  });
};

module.exports.ManageTodo = async (account, todo, response) => {
  const getURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  if (todo.addTaskButton === "progress") {
    if (todo.addProgressTask.length !== 0) {
      TaskManager.AddProgressTask(account, todo.addProgressTask);
    }

    response.redirect(getURL);
  }

  if (todo.deleteProgressTask !== undefined) {
    TaskManager.DeleteProgressTask(account, todo.deleteProgressTask);
    response.redirect(getURL);
    return;
  }

  if (todo.addCompletedTask !== undefined) {
    console.log("SHIFTING | Progress -> Completed");
    response.redirect(getURL);
    return;
  }

  if (todo.deleteCompletedTask !== undefined) {
    TaskManager.DeleteCompletedTask(account, todo.deleteCompletedTask);
    response.redirect(getURL);
    return;
  }
};
