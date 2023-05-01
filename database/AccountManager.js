const AccountModel = require("./ModelManager.js");

const CreateAccount = (account, response) => {
  AccountModel.findOne({ email: account.email })
    .then((profile) => {
      if (profile.password !== account.password) {
        response.redirect("/");
        return;
      }

      if (profile.password !== account.retypePassword) {
        response.redirect("/");
        return;
      }

      response.redirect("/");
    })
    .catch(() => {
      DatabaseCreateAccount(account, response);
    });
};

const DatabaseCreateAccount = (account, response) => {
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

module.exports.CreateAccount = CreateAccount;
