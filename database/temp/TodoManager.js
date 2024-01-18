module.exports.DisplayTodoCollection = (account, response) => {
  AccountModel.findOne({ email: account.email })
    .select("lists")
    .then((profile) => {
      DisplayManager.DisplayCollection(profile.lists, response);
    });
};
