const accountModel = require("../models/AccountModel.js");

module.exports.DatabaseDeleteTask = async (
  email,
  periodType,
  listType,
  task
) => {
  await accountModel.findOneAndUpdate(
    { email: email },
    {
      $pull: {
        [`lists.${periodType}.${listType}`]: {
          title: task.title,
          description: task.description,
          priority: task.priority,
          date: task.date,
        },
      },
    }
  );
};
