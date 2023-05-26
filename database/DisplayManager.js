const { startCase } = require("lodash");

/*--------------------------------------------------*/
/*--------------- LISTS & COLLECTION ---------------*/
/*--------------------------------------------------*/

const DisplayLists = (account, profile, response) => {
  const postURL = `/todo/${account.type}`;

  if (account.type === "personal") {
    const todo = {
      progress: profile.lists.personal.progress,
      completed: profile.lists.personal.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTodo(todo, response);
    return;
  }

  if (account.type === "daily") {
    const todo = {
      progress: profile.lists.daily.progress,
      completed: profile.lists.daily.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTodo(todo, response);
    return;
  }

  if (account.type === "weekly") {
    const todo = {
      progress: profile.lists.weekly.progress,
      completed: profile.lists.weekly.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTodo(todo, response);
    return;
  }

  if (account.type === "monthly") {
    const todo = {
      progress: profile.lists.monthly.progress,
      completed: profile.lists.monthly.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTodo(todo, response);
    return;
  }

  if (account.type === "yearly") {
    const todo = {
      progress: profile.lists.yearly.progress,
      completed: profile.lists.yearly.completed,
      type: startCase(account.type),
      postURL: postURL,
    };

    RenderTodo(todo, response);
    return;
  }
};

const DisplayCollection = (profile, response) => {
  const collection = [
    {
      title: "Personal List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      totalCompleted: 0,
      total: 0,
      percentage: 0,
    },
    {
      title: "Daily List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      totalCompleted: 0,
      total: 0,
      percentage: 0,
    },
    {
      title: "Weekly List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      totalCompleted: 0,
      total: 0,
      percentage: 0,
    },
    {
      title: "Monthly List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      totalCompleted: 0,
      total: 0,
      percentage: 0,
    },
    {
      title: "Yearly List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      totalCompleted: 0,
      total: 0,
      percentage: 0,
    },
  ];

  profile.lists.personal.progress.forEach((task) => {
    if (task.priority === "high") ++collection[0].progress[0];
    else if (task.priority === "medium") ++collection[0].progress[1];
    else if (task.priority === "low") ++collection[0].progress[2];
    ++collection[0].total;
  });

  profile.lists.daily.progress.forEach((task) => {
    if (task.priority === "high") ++collection[1].progress[0];
    else if (task.priority === "medium") ++collection[1].progress[1];
    else if (task.priority === "low") ++collection[1].progress[2];
    ++collection[1].total;
  });

  profile.lists.weekly.progress.forEach((task) => {
    if (task.priority === "high") ++collection[2].progress[0];
    else if (task.priority === "medium") ++collection[2].progress[1];
    else if (task.priority === "low") ++collection[2].progress[2];
    ++collection[2].total;
  });

  profile.lists.monthly.progress.forEach((task) => {
    if (task.priority === "high") ++collection[3].progress[0];
    else if (task.priority === "medium") ++collection[3].progress[1];
    else if (task.priority === "low") ++collection[3].progress[2];
    ++collection[3].total;
  });

  profile.lists.yearly.progress.forEach((task) => {
    if (task.priority === "high") ++collection[4].progress[0];
    else if (task.priority === "medium") ++collection[4].progress[1];
    else if (task.priority === "low") ++collection[4].progress[2];
    ++collection[4].total;
  });

  profile.lists.personal.completed.forEach((task) => {
    if (task.priority === "high") ++collection[0].completed[0];
    else if (task.priority === "medium") ++collection[0].completed[1];
    else if (task.priority === "low") ++collection[0].completed[2];
    ++collection[0].totalCompleted;
    ++collection[0].total;
  });

  profile.lists.daily.completed.forEach((task) => {
    if (task.priority === "high") ++collection[1].completed[0];
    else if (task.priority === "medium") ++collection[1].completed[1];
    else if (task.priority === "low") ++collection[1].completed[2];
    ++collection[1].totalCompleted;
    ++collection[1].total;
  });

  profile.lists.weekly.completed.forEach((task) => {
    if (task.priority === "high") ++collection[2].completed[0];
    else if (task.priority === "medium") ++collection[2].completed[1];
    else if (task.priority === "low") ++collection[2].completed[2];
    ++collection[2].totalCompleted;
    ++collection[2].total;
  });

  profile.lists.monthly.completed.forEach((task) => {
    if (task.priority === "high") ++collection[3].completed[0];
    else if (task.priority === "medium") ++collection[3].completed[1];
    else if (task.priority === "low") ++collection[3].completed[2];
    ++collection[3].totalCompleted;
    ++collection[3].total;
  });

  profile.lists.yearly.completed.forEach((task) => {
    if (task.priority === "high") ++collection[4].completed[0];
    else if (task.priority === "medium") ++collection[4].completed[1];
    else if (task.priority === "low") ++collection[4].completed[2];
    ++collection[4].totalCompleted;
    ++collection[4].total;
  });

  collection.forEach((list) => {
    if (list.total === 0) {
      list.percentage = 0;
    } else {
      list.percentage = Math.round((list.totalCompleted / list.total) * 100);
    }
  });

  RenderCollection(collection, response);
};

/*--------------------------------------------------*/
/*------------------ RENDER PAGES ------------------*/
/*--------------------------------------------------*/

const RenderTodo = (todo, response) => {
  response.render("todo", { todo: todo });
};

const RenderCollection = (collection, response) => {
  response.render("collection", { collection: collection });
};

module.exports.DisplayLists = DisplayLists;
module.exports.DisplayCollection = DisplayCollection;
