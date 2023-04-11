const AccountModel = require("./ModelManager.js");

const DisplayManager = require("./DisplayManager.js");
const TaskManager = require("./TaskManager.js");

module.exports.CreateAccount = (account, response) => {
  console.log(account);

  const profile = new AccountModel({
    email: account.email,
    password: account.password,
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
  });

  profile.save();
};

module.exports.DisplayTodo = (account, response) => {
  AccountModel.findOne({ email: account.email }).then((profile) => {
    DisplayManager.DisplayTasks(account, profile, response);
  });
};

module.exports.ManageTodo = async (account, todo, response) => {
  const getURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  if (todo.button !== "add") {
    TaskManager.DeleteTask(account, todo.deleteTask);
    response.redirect(getURL);
    return;
  }

  if (todo.addTask.length !== 0) {
    TaskManager.AddTask(account, todo.addTask);
    response.redirect(getURL);
    return;
  }

  response.redirect(getURL);
  return;
};
