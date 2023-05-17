const DisplayLists = (account, profile, response) => {
  const postURL = `/todo/${account.type}`;

  if (account.type === "personal") {
    const todo = {
      progress: profile.lists.personal.progress,
      completed: profile.lists.personal.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "daily") {
    const todo = {
      progress: profile.lists.daily.progress,
      completed: profile.lists.daily.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "weekly") {
    const todo = {
      progress: profile.lists.weekly.progress,
      completed: profile.lists.weekly.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "monthly") {
    const todo = {
      progress: profile.lists.monthly.progress,
      completed: profile.lists.monthly.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "yearly") {
    const todo = {
      progress: profile.lists.yearly.progress,
      completed: profile.lists.yearly.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }
};

const RenderTemplate = (todo, response) => {
  response.render("template", { todo: todo });
};

module.exports.DisplayLists = DisplayLists;
