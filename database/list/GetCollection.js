const accountModel = require("../models/AccountModel.js");
const { startCase } = require("lodash");

module.exports.DatabaseGetCollection = async (email) => {
  const databaseAccount = await accountModel.findOne({ email: email });

  const personal = ListStatistics(databaseAccount, "personal");
  const daily = ListStatistics(databaseAccount, "daily");
  const weekly = ListStatistics(databaseAccount, "weekly");
  const monthly = ListStatistics(databaseAccount, "monthly");
  const yearly = ListStatistics(databaseAccount, "yearly");

  return [personal, daily, weekly, monthly, yearly];
};

const ListStatistics = (databaseAccount, periodType) => {
  const stats = {
    title: `${startCase(periodType)} List`,
    post: `/todo/${periodType}`,
    progress: [0, 0, 0],
    completed: [0, 0, 0],
    totalProgress: 0,
    totalCompleted: 0,
    percentage: 0,
    total: 0,
  };

  databaseAccount.lists[periodType]["progress"].forEach((task) => {
    if (task.priority === "high") ++stats.progress[0];
    if (task.priority === "medium") ++stats.progress[1];
    if (task.priority === "low") ++stats.progress[2];
    ++stats.totalProgress;
  });

  databaseAccount.lists[periodType]["completed"].forEach((task) => {
    if (task.priority === "high") ++stats.completed[0];
    if (task.priority === "medium") ++stats.completed[1];
    if (task.priority === "low") ++stats.completed[2];
    ++stats.totalCompleted;
  });

  stats.total = stats.totalProgress + stats.totalCompleted;

  if (stats.total > 0) {
    stats.percentage = (stats.totalCompleted / stats.total) * 100;
    stats.percentage = stats.percentage.toFixed(2);
    return stats;
  }

  stats.percentage = 0;
  return stats;
};
