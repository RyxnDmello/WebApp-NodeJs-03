const accountModel = require("../models/AccountModel.js");
const { startCase } = require("lodash");

module.exports.DatabaseGetLists = async (email, type) => {
  const databaseAccount = await accountModel.findOne({ email: email });

  return {
    progress: databaseAccount.lists[type]["progress"],
    completed: databaseAccount.lists[type]["completed"],
    type: startCase(type),
    post: `/todo/${type}`,
  };
};
