const bcrypt = require("bcrypt");

const AccountModel = require("./ModelManager.js");

const ManageAccount = async (account, request, response) => {
  await AccountModel.findOne({ email: account.email })
    .then((profile) => {
      if (account.password !== account.retypePassword) {
        response.redirect("/");
        return;
      }

      bcrypt.compare(account.password, profile.password).then((isValid) => {
        if (!isValid) {
          response.redirect("/");
          return;
        }

        request.session.email = account.email;
        response.redirect("/");
      });
    })
    .catch(() => {
      DatabaseCreateAccount(account, request, response);
    });
};

const DatabaseCreateAccount = (account, request, response) => {
  bcrypt.hash(account.password, 10).then(function (hash) {
    const ClientAccount = new AccountModel({
      email: account.email,
      password: hash,
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

    request.session.email = account.email;
    ClientAccount.save();
  });

  response.redirect("/");
};

module.exports.ManageAccount = ManageAccount;
