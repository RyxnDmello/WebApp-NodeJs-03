const { startCase } = require("lodash");

const DisplayLists = (type, lists, response) => {
  if (type === "personal") lists = lists.personal;
  if (type === "daily") lists = lists.daily;
  if (type === "weekly") lists = lists.weekly;
  if (type === "monthly") lists = lists.monthly;
  if (type === "yearly") lists = lists.yearly;

  const todo = {
    progress: lists.progress,
    completed: lists.completed,
    type: startCase(type),
    postURL: `/todo/${type}`,
  };

  response.render("todo", { todo: todo });
  return;
};

const DisplayCollection = (lists, response) => {
  const collection = [
    {
      title: "Personal List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      URL: "/todo/personal",
      totalCompleted: 0,
      percentage: 0,
      total: 0,
    },
    {
      title: "Daily List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      URL: "/todo/daily",
      totalCompleted: 0,
      percentage: 0,
      total: 0,
    },
    {
      title: "Weekly List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      URL: "/todo/weekly",
      totalCompleted: 0,
      percentage: 0,
      total: 0,
    },
    {
      title: "Monthly List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      URL: "/todo/monthly",
      totalCompleted: 0,
      percentage: 0,
      total: 0,
    },
    {
      title: "Yearly List",
      progress: [0, 0, 0],
      completed: [0, 0, 0],
      totalCompleted: 0,
      URL: "/todo/yearly",
      percentage: 0,
      total: 0,
    },
  ];

  lists.personal.progress.forEach((task) => {
    if (task.priority === "high") ++collection[0].progress[0];
    else if (task.priority === "medium") ++collection[0].progress[1];
    else if (task.priority === "low") ++collection[0].progress[2];
    ++collection[0].total;
  });

  lists.daily.progress.forEach((task) => {
    if (task.priority === "high") ++collection[1].progress[0];
    else if (task.priority === "medium") ++collection[1].progress[1];
    else if (task.priority === "low") ++collection[1].progress[2];
    ++collection[1].total;
  });

  lists.weekly.progress.forEach((task) => {
    if (task.priority === "high") ++collection[2].progress[0];
    else if (task.priority === "medium") ++collection[2].progress[1];
    else if (task.priority === "low") ++collection[2].progress[2];
    ++collection[2].total;
  });

  lists.monthly.progress.forEach((task) => {
    if (task.priority === "high") ++collection[3].progress[0];
    else if (task.priority === "medium") ++collection[3].progress[1];
    else if (task.priority === "low") ++collection[3].progress[2];
    ++collection[3].total;
  });

  lists.yearly.progress.forEach((task) => {
    if (task.priority === "high") ++collection[4].progress[0];
    else if (task.priority === "medium") ++collection[4].progress[1];
    else if (task.priority === "low") ++collection[4].progress[2];
    ++collection[4].total;
  });

  lists.personal.completed.forEach((task) => {
    if (task.priority === "high") ++collection[0].completed[0];
    else if (task.priority === "medium") ++collection[0].completed[1];
    else if (task.priority === "low") ++collection[0].completed[2];
    ++collection[0].totalCompleted;
    ++collection[0].total;
  });

  lists.daily.completed.forEach((task) => {
    if (task.priority === "high") ++collection[1].completed[0];
    else if (task.priority === "medium") ++collection[1].completed[1];
    else if (task.priority === "low") ++collection[1].completed[2];
    ++collection[1].totalCompleted;
    ++collection[1].total;
  });

  lists.weekly.completed.forEach((task) => {
    if (task.priority === "high") ++collection[2].completed[0];
    else if (task.priority === "medium") ++collection[2].completed[1];
    else if (task.priority === "low") ++collection[2].completed[2];
    ++collection[2].totalCompleted;
    ++collection[2].total;
  });

  lists.monthly.completed.forEach((task) => {
    if (task.priority === "high") ++collection[3].completed[0];
    else if (task.priority === "medium") ++collection[3].completed[1];
    else if (task.priority === "low") ++collection[3].completed[2];
    ++collection[3].totalCompleted;
    ++collection[3].total;
  });

  lists.yearly.completed.forEach((task) => {
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

  response.render("collection", { collection: collection });
  return;
};

module.exports.DisplayLists = DisplayLists;
module.exports.DisplayCollection = DisplayCollection;
