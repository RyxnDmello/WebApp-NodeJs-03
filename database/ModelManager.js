const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/accountsDB",
  { useNewUrlParser: true }
);

const TaskSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  priority: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
});

const ListsSchema = new mongoose.Schema({
  personal: {
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
    required: true,
  },
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
    required: true,
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
    required: true,
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
    required: true,
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
    required: true,
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
    required: true,
  },
});

const AccountModel = mongoose.model("account", AccountSchema);

module.exports = AccountModel;
