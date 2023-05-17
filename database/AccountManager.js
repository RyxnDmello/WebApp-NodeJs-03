const bcrypt = require("bcrypt");

const AccountModel = require("./ModelManager.js");

const CreateAccount = (account, request, response) => {
  AccountModel.findOne({ email: account.email })
    .then((profile) => {
      if (account.password !== account.retypePassword) {
        console.log("PASSWORD MISMATCH");
        response.redirect("/");
        return;
      }

      bcrypt.compare(account.password, profile.password).then((isValid) => {
        if (!isValid) {
          console.log("PASSWORD INCORRECT");
          response.redirect("/");
          return;
        }

        console.log("LOGGED IN");

        request.session.email = profile.email;

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

  console.log("ACCOUNT CREATED");

  response.redirect("/");
};

module.exports.CreateAccount = CreateAccount;
