const { DatabaseGetLists } = require("./task/GetLists.js");

module.exports.GetLists = async (email, type) => {
  return await DatabaseGetLists(email, type);
};
