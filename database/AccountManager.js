const bcrypt = require("bcrypt");

const AccountModel = require("./ModelManager.js");

const CreateAccount = async (account, request, response) => {
  const profile = await AccountModel.findOne({ email: account.email });

  if (profile) {
    response.redirect("/error/exists");
    return;
  }

  if (profile === null) {
    DatabaseCreateAccount(account, request, response);
  }
};

const LoginAccount = async (account, request, response) => {
  const profile = await AccountModel.findOne({ email: account.email });

  if (profile) {
    if (account.password !== account.retypePassword) {
      response.redirect("/error/login-mismatch");
      return;
    }

    bcrypt.compare(account.password, profile.password).then((isValid) => {
      if (!isValid) {
        response.redirect("/error/login-password");
        return;
      }

      request.session.email = account.email;
      response.redirect("/");
    });

    return;
  }

  if (profile === null) {
    response.redirect("/error/login-account");
  }
};

const DatabaseCreateAccount = (account, request, response) => {
  bcrypt.hash(account.password, 10).then(function (hash) {
    const ClientAccount = new AccountModel({
      username: account.username,
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

    ClientAccount.save()
      .then(() => {
        request.session.email = account.email;
        response.redirect("/");
      })
      .catch(() => {
        response.render("/error/signup");
      });
  });
};

module.exports.CreateAccount = CreateAccount;
module.exports.LoginAccount = LoginAccount;
