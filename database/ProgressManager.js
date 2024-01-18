const { DatabaseAddTask } = require("./task/AddTask.js");
const { DatabaseDeleteTask } = require("./task/DeleteTask.js");
const { DatabaseClearTasks } = require("./task/ClearTasks.js");

module.exports.AddProgressTask = async (email, type, task) => {
  await DatabaseAddTask(email, type, "progress", task);
};

module.exports.DeleteProgressTask = async (email, type, task) => {
  await DatabaseDeleteTask(email, type, "progress", task);
};

module.exports.ClearTasks = async (email, type) => {
  await DatabaseClearTasks(email, type);
};
