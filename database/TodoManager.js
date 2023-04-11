const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/testDB"
);

const accountSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  daily: {
    required: true,
    type: Object,
  },
  weekly: {
    required: true,
    type: Object,
  },
  monthly: {
    required: true,
    type: Object,
  },
  yearly: {
    required: true,
    type: Object,
  },
});

const accountModel = mongoose.model("profile", accountSchema);

/*------------------------------------------------------*/
/*----------------- ACCOUNT MANAGEMENT -----------------*/
/*------------------------------------------------------*/

module.exports.CreateAccount = (account, response) => {
  const profile = new profileModel({
    email: account.email,
    password: account.password,
    daily: {
      progress: [],
      completed: [],
    },
    weekly: {
      progress: [],
      completed: [],
    },
    monthly: {
      progress: [],
      completed: [],
    },
    yearly: {
      progress: [],
      completed: [],
    },
  });

  profile.save();
};

/*--------------------------------------------------------*/
/*----------------- DISPLAY & MANAGEMENT -----------------*/
/*--------------------------------------------------------*/

module.exports.TemplateDisplay = (account, response) => {
  const postURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  accountModel.findOne({ email: account.email }).then((profile) => {
    response.render("template", {
      todo: {
        progress: profile.daily.progress,
        completed: profile.daily.completed,
        postURL: postURL,
      },
    });
  });
};

module.exports.TemplateManager = async (account, todo, response) => {
  const getURL = `/account/${account.email}/${account.password}/todo/template/${account.type}`;

  if (todo.button !== "add") {
    DeleteTask(account, todo.type, todo.deleteTask);
    response.redirect(getURL);
    return;
  }

  if (todo.addTask.length !== 0) {
    AddTask(account, todo.type, todo.addTask);
    response.redirect(getURL);
    return;
  }

  response.redirect(getURL);
  return;
};

const AddTask = async (account, type, task) => {
  if (type === "daily") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "daily.progress": task } }
    );
    return;
  }

  if (type === "weekly") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "weekly.progress": task } }
    );
    return;
  }

  if (type === "monthly") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "monthly.progress": task } }
    );
    return;
  }

  if (type === "yearly") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $push: { "yearly.progress": task } }
    );
    return;
  }
};

const DeleteTask = async (account, type, task) => {
  if (type === "daily") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "daily.progress": task } }
    );
    return;
  }

  if (type === "weekly") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "weekly.progress": task } }
    );
    return;
  }

  if (type === "monthly") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "monthly.progress": task } }
    );
    return;
  }

  if (type === "yearly") {
    await accountModel.findOneAndUpdate(
      { email: account.email },
      { $pull: { "yearly.progress": task } }
    );
    return;
  }
};
