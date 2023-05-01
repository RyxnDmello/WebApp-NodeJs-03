const AccountModel = require("./ModelManager.js");

const AddProgressTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.daily.progress": {
            title: task.taskTitle,
            description: task.taskDescription,
          },
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
          "lists.weekly.progress": {
            title: task.taskTitle,
            description: task.taskDescription,
          },
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
          "lists.monthly.progress": {
            title: task.taskTitle,
            description: task.taskDescription,
          },
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
          "lists.yearly.progress": {
            title: task.taskTitle,
            description: task.taskDescription,
          },
        },
      }
    );
    return;
  }
};

const DeleteProgressTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: { "lists.daily.progress": { description: task } },
      }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.weekly.progress": { description: task } } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.monthly.progress": { description: task } } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.yearly.progress": { description: task } } }
    );
    return;
  }
};

const AddCompletedTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: { "lists.daily.progress": { description: task } },
        $push: { "lists.daily.completed": { description: task } },
      }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: { "lists.weekly.progress": { description: task } },
        $push: { "lists.weekly.completed": { description: task } },
      }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: { "lists.monthly.progress": { description: task } },
        $push: { "lists.monthly.completed": { description: task } },
      }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: { "lists.yearly.progress": { description: task } },
        $push: { "lists.yearly.completed": { description: task } },
      }
    );
    return;
  }
};

const DeleteCompletedTask = async (account, task) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.daily.completed": { description: task } } }
    );
    return;
  }

  if (account.type === "weekly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.weekly.completed": { description: task } } }
    );
    return;
  }

  if (account.type === "monthly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.monthly.completed": { description: task } } }
    );
    return;
  }

  if (account.type === "yearly") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "lists.yearly.completed": { description: task } } }
    );
    return;
  }
};

module.exports.AddProgressTask = AddProgressTask;
module.exports.DeleteProgressTask = DeleteProgressTask;
module.exports.AddCompletedTask = AddCompletedTask;
module.exports.DeleteCompletedTask = DeleteCompletedTask;
