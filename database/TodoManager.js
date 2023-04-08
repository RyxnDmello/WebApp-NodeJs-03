const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/accountDB"
);

/*---------------------------------------------------*/
/*----------------- SCHEMA & MODELS -----------------*/
/*---------------------------------------------------*/

const accountSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  list: {
    required: true,
    type: Array,
    default: [],
  },
});

const accountModel = mongoose.model("profile", accountSchema);

/*------------------------------------------------------*/
/*----------------- ACCOUNT MANAGEMENT -----------------*/
/*------------------------------------------------------*/

module.exports.CreateProfile = () => {
  const profile = new profileModel({
    email: "random@gmail.com",
    password: "random123",
    list: [],
  });

  profile.save();
};

/*--------------------------------------------------------*/
/*----------------- DISPLAY & MANAGEMENT -----------------*/
/*--------------------------------------------------------*/

module.exports.Display = (account, response) => {
  const postURL = `/account/${account.email}/${account.password}/todo/template`;

  accountModel.findOne({ email: account.email }).then((profile) => {
    response.render("template", {
      todo: {
        postURL: postURL,
        list: profile.list,
      },
    });
  });
};

module.exports.Manage = async (account, todo, response) => {
  const getURL = `/account/${account.email}/${account.password}/todo/template`;

  if (todo.button !== "add") {
    DeleteTask(account, todo.deleteTask);
    response.redirect(getURL);
    return;
  }

  if (todo.addTask.length !== 0) {
    AddTask(account, todo.addTask);
    response.redirect(getURL);
    return;
  }

  response.redirect(getURL);
  return;
};

/*-----------------------------------------------------*/
/*----------------- ADDING & DELETING -----------------*/
/*-----------------------------------------------------*/

const AddTask = async (account, task) => {
  await accountModel.findOneAndUpdate(
    { email: account.email },
    { $push: { list: task } }
  );
};

const DeleteTask = async (account, task) => {
  await accountModel.findOneAndUpdate(
    { email: account.email },
    { $pull: { list: task } }
  );
};
