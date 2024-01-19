const { DatabaseGetLists } = require("./list/GetLists.js");
const { DatabaseGetCollection } = require("./list/GetCollection.js");

module.exports.GetLists = async (email, type) => {
  return await DatabaseGetLists(email, type);
};

module.exports.GetCollection = async (email) => {
  return await DatabaseGetCollection(email);
};
