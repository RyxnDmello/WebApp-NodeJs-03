const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://WebApp-Personal-03:RyanDmelloWebApp03@client-account-informat.kquhslf.mongodb.net/accountDB",
  { useNewUrlParser: true }
);

const AccountSchema = new mongoose.Schema({
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

const AccountModel = mongoose.model("profile", AccountSchema);

module.exports = AccountModel;
