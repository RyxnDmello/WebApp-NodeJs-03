const { DateTime } = require("luxon");

const AccountModel = require("./ModelManager.js");

const currentDate = DateTime.now().toFormat("MMMM dd, yyyy");

const AddProgressTask = async (account, todo) => {
  if (account.type === "personal") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.personal.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
          },
        },
      }
    );
    return;
  }

  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $push: {
          "lists.daily.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
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
            priority: todo.taskPriority,
            date: currentDate,
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
            priority: todo.taskPriority,
            date: currentDate,
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
            priority: todo.taskPriority,
            date: currentDate,
          },
        },
      }
    );
    return;
  }
};

const DeleteProgressTask = async (account, todo) => {
  if (account.type === "personal") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.personal.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
          },
        },
      }
    );
    return;
  }

  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.daily.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
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
            priority: todo.taskPriority,
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
            priority: todo.taskPriority,
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
            priority: todo.taskPriority,
          },
        },
      }
    );
    return;
  }
};

const AddCompletedTask = async (account, todo) => {
  if (account.type === "personal") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.personal.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
          },
        },
        $push: {
          "lists.personal.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
          },
        },
      }
    );
    return;
  }

  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.daily.progress": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
          },
        },
        $push: {
          "lists.daily.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
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
            priority: todo.taskPriority,
          },
        },
        $push: {
          "lists.weekly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
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
            priority: todo.taskPriority,
          },
        },
        $push: {
          "lists.monthly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
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
            priority: todo.taskPriority,
          },
        },
        $push: {
          "lists.yearly.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
            date: currentDate,
          },
        },
      }
    );
    return;
  }
};

const DeleteCompletedTask = async (account, todo) => {
  if (account.type === "personal") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.personal.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
          },
        },
      }
    );
    return;
  }

  if (account.type === "daily") {
    await AccountModel.findOneAndUpdate(
      { email: account.email },
      {
        $pull: {
          "lists.daily.completed": {
            title: todo.taskTitle,
            description: todo.taskDescription,
            priority: todo.taskPriority,
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
            priority: todo.taskPriority,
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
            priority: todo.taskPriority,
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
            priority: todo.taskPriority,
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
