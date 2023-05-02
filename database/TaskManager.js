const AccountModel = require("./ModelManager.js");

const AddProgressTask = async (account, todo) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.daily.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
            title: todo.taskTitle,
            description: todo.taskDescription,
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
            title: todo.taskTitle,
            description: todo.taskDescription,
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
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
      }
    );
    return;
  }
};

const DeleteProgressTask = async (account, todo) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.daily.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.weekly.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.monthly.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.yearly.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
      }
    );
    return;
  }
};

const AddCompletedTask = async (account, todo) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.daily.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
        $push: {
          "lists.daily.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.weekly.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
        $push: {
          "lists.weekly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.monthly.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
        $push: {
          "lists.monthly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.yearly.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
        $push: {
          "lists.yearly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
      }
    );
    return;
  }
};

const DeleteCompletedTask = async (account, todo) => {
  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.daily.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.weekly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.monthly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
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
        $pull: {
          "lists.yearly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
          },
        },
      }
    );
    return;
  }
};

module.exports.AddProgressTask = AddProgressTask;
module.exports.DeleteProgressTask = DeleteProgressTask;
module.exports.AddCompletedTask = AddCompletedTask;
module.exports.DeleteCompletedTask = DeleteCompletedTask;
