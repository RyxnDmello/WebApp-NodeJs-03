const { startCase } = require("lodash");

const DisplayLists = (account, profile, response) => {
  const postURL = `/todo/${account.type}`;

  if (account.type === "personal") {
    const todo = {
      progress: profile.lists.personal.progress,
      completed: profile.lists.personal.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "daily") {
    const todo = {
      progress: profile.lists.daily.progress,
      completed: profile.lists.daily.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "weekly") {
    const todo = {
      progress: profile.lists.weekly.progress,
      completed: profile.lists.weekly.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "monthly") {
    const todo = {
      progress: profile.lists.monthly.progress,
      completed: profile.lists.monthly.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "yearly") {
    const todo = {
      progress: profile.lists.yearly.progress,
      completed: profile.lists.yearly.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }
};

const RenderTemplate = (todo, response) => {
  response.render("lists", { todo: todo });
};

module.exports.DisplayLists = DisplayLists;
