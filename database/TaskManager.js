const AccountModel = require("./ModelManager.js");

const AddTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "daily.progress": task } }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "weekly.progress": task } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "monthly.progress": task } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "yearly.progress": task } }
    );
    return;
  }
};

const DeleteProgressTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "daily.progress": task } }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "weekly.progress": task } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "monthly.progress": task } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "yearly.progress": task } }
    );
    return;
  }
};

const DeleteCompletedTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "daily.completed": task } }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "weekly.completed": task } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "monthly.completed": task } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "yearly.completed": task } }
    );
    return;
  }
};

module.exports.AddTask = AddTask;
module.exports.DeleteProgressTask = DeleteProgressTask;
module.exports.DeleteCompletedTask = DeleteCompletedTask;