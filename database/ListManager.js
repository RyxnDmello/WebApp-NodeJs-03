const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/accountDB"
);

const profileSchema = new mongoose.Schema({
  email: String,
  password: String,
  tasks: Array,
});

const profileModel = mongoose.model("profile", profileSchema);

exports.CreateProfile = () => {
  const client = new profileModel({
    email: "random@gmail.com",
    password: "random123",
    tasks: [],
  });

  client.save();
};

exports.DisplayTasks = (account, response) => {
  profileModel
    .findOne({ email: account.email })
    .then((profile) => {
      response.render("template", {
        tasks: profile.tasks,
        account: account,
      });
    })
    .catch(() => {
      response.render("template", {
        account: account,
        tasks: [],
      });
    });
};

exports.AddTask = async (account, task, response) => {
  await profileModel
    .updateOne({ email: account.email }, { $push: { tasks: task } })
    .catch(() => {
      response.render("/");
    });
};
