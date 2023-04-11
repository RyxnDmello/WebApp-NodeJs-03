const RenderTemplate = (todo, response) => {
  response.render("template", { todo: todo });
};

const DisplayTasks = (account, profile, response) => {
  const postURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  if (account.type === "daily") {
    const todo = {
      progress: profile.daily.progress,
      completed: profile.daily.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "weekly") {
    const todo = {
      progress: profile.weekly.progress,
      completed: profile.weekly.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "monthly") {
    const todo = {
      progress: profile.monthly.progress,
      completed: profile.monthly.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }

  if (account.type === "yearly") {
    const todo = {
      progress: profile.yearly.progress,
      completed: profile.yearly.completed,
      postURL: postURL,
    };

    RenderTemplate(todo, response);
    return;
  }
};

module.exports.DisplayTasks = DisplayTasks;
