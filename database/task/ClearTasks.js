const accountModel = require("../models/AccountModel.js");

module.exports.DatabaseClearTasks = async (email, type) => {
  await accountModel.findOneAndUpdate(
    { email: email },
    {
      $set: {
        [`lists.${type}`]: {
          progress: [],
          completed: [],
        },
      },
    }
  );
};
