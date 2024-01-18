const { DatabaseAddTask } = require("./task/AddTask.js");
const { DatabaseDeleteTask } = require("./task/DeleteTask.js");

module.exports.AddCompletedTask = async (email, type, task) => {
  await DatabaseAddTask(email, type, "completed", task);
  await DatabaseDeleteTask(email, type, "progress", task);
};

module.exports.DeleteCompletedTask = async (email, type, task) => {
  await DatabaseDeleteTask(email, type, "completed", task);
};
