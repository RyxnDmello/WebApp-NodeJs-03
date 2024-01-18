const AccountManager = require("../database/AccountManger.js");

const create = async (req, res) => {
  const isCreated = await AccountManager.CreateAccount(req.body, req);

  if (isCreated) {
    res.redirect("/");
    return;
  }

  res.redirect(`/error/${isCreated}`);
};

const login = async (req, res) => {
  const isLogin = await AccountManager.LoginAccount(req.body, req);

  if (isLogin) {
    res.redirect("/");
    return;
  }

  res.redirect(`/error/${isLogin}`);
};

module.exports = {
  create,
  login,
};
