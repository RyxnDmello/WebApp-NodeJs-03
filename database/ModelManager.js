const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/accountsDB",
  { useNewUrlParser: true }
);

const TaskSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  date: {
    require: true,
    type: String,
  },
});

const ListsSchema = new mongoose.Schema({
  daily: {
    _id: false,
    type: {
      progress: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
    },
    require: true,
  },
  weekly: {
    _id: false,
    type: {
      progress: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
    },
    require: true,
  },
  monthly: {
    _id: false,
    type: {
      progress: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
    },
    require: true,
  },
  yearly: {
    _id: false,
    type: {
      progress: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: TaskSchema,
          _id: false,
        },
      ],
    },
    require: true,
  },
});

const AccountSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  lists: {
    _id: false,
    type: ListsSchema,
    require: true,
  },
});

const AccountModel = mongoose.model("account", AccountSchema);

module.exports = AccountModel;
