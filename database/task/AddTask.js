const accountModel = require("../models/AccountModel.js");
const { DateTime } = require("luxon");

const date = DateTime.now().toFormat("MMMM dd, yyyy");

module.exports.DatabaseAddTask = async (email, periodType, listType, task) => {
  await accountModel.findOneAndUpdate(
    { email: email },
    {
      $push: {
        [`lists.${periodType}.${listType}`]: {
          ...task,
          date,
        },
      },
    }
  );
};
