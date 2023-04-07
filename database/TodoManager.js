const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/accountDB"
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
  list: {
    required: true,
    type: Array,
    default: [],
  },
});

const accountModel = mongoose.model("profile", accountSchema);

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

  if (todo.button === "add") {
    AddTask(account, todo.task);
    response.redirect(getURL);
    return;
  }

  DeleteTask(account, todo.button);
  response.redirect(getURL);
};

/*-----------------------------------------------------*/
/*----------------- ADDING & DELETING -----------------*/
/*-----------------------------------------------------*/

const AddTask = async (account, task) => {
  if (task.length == 0) return;

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
