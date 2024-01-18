const accountModel = require("../models/AccountModel.js");
const bcrypt = require("bcrypt");

module.exports.DatabaseCreateAccount = async (credentials, request) => {
  const databaseAccount = await accountModel.findOne({
    email: credentials.email,
  });

  if (databaseAccount !== null) return "account-exists";

  const encryptedPassword = await bcrypt.hash(credentials.password, 10);

  const account = new accountModel({
    username: credentials.username,
    email: credentials.email,
    password: encryptedPassword,
    lists: {
      personal: {
        progress: [],
        completed: [],
      },
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

  const createdAccount = await account.save();

  if (createdAccount === null) return "account-creation-failure";

  request.session.username = createdAccount.username;
  request.session.email = createdAccount.email;
  return true;
};
