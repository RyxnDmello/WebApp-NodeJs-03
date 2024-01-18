const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  priority: {
    type: Schema.Types.String,
    required: true,
  },
  date: {
    type: Schema.Types.String,
    required: true,
  },
});

const listsSchema = new Schema({
  personal: {
    type: {
      progress: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
    },
    required: true,
    _id: false,
  },
  daily: {
    type: {
      progress: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
    },
    required: true,
    _id: false,
  },
  weekly: {
    type: {
      progress: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
    },
    required: true,
    _id: false,
  },
  monthly: {
    type: {
      progress: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
    },
    required: true,
    _id: false,
  },
  yearly: {
    type: {
      progress: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
      completed: [
        {
          type: taskSchema,
          _id: false,
        },
      ],
    },
    required: true,
    _id: false,
  },
});

const accountSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  lists: {
    type: listsSchema,
    required: true,
    _id: false,
  },
});

const accountModel = model("account", accountSchema);

module.exports = accountModel;
