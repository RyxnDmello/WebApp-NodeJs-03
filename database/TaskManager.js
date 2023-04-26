const AccountModel = require("./ModelManager.js");

const AddProgressTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.daily.progress": { title: "TITLE", description: task },
        },
      }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.weekly.progress": { title: "YAY2", description: task },
        },
      }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.monthly.progress": { title: "YAY2", description: task },
        },
      }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.yearly.progress": { title: "YAY2", description: task },
        },
      }
    );
    return;
  }
};

const DeleteProgressTask = async (account, data) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: { "lists.daily.progress": { description: data } },
      }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.weekly.progress": { description: data } } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.monthly.progress": { description: data } } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.yearly.progress": { description: data } } }
    );
    return;
  }
};

const DeleteCompletedTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.daily.completed": { description: data } } }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.weekly.completed": { description: data } } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.monthly.completed": { description: data } } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.yearly.completed": { description: data } } }
    );
    return;
  }
};

module.exports.AddProgressTask = AddProgressTask;
module.exports.DeleteProgressTask = DeleteProgressTask;
module.exports.DeleteCompletedTask = DeleteCompletedTask;
