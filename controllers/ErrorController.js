const ErrorData = require("../json/error.json");

const accountExists = (req, res) => {
  res.render("error", {
    error: {
      title: ErrorData.accountExists.title,
      description: ErrorData.accountExists.description,
      image: ErrorData.accountExists.image,
    },
  });
};

const accountAbsent = (req, res) => {
  res.render("error", {
    error: {
      title: ErrorData.accountAbsent.title,
      description: ErrorData.accountAbsent.description,
      image: ErrorData.accountAbsent.image,
    },
  });
};

const accountInvalid = (req, res) => {
  res.render("error", {
    error: {
      title: ErrorData.accountInvalid.title,
      description: ErrorData.accountInvalid.description,
      image: ErrorData.accountInvalid.image,
    },
  });
};

const accountCreationFailure = (req, res) => {
  res.render("error", {
    error: {
      title: ErrorData.accountCreationFailure.title,
      description: ErrorData.accountCreationFailure.description,
      image: ErrorData.accountCreationFailure.image,
    },
  });
};

const loginPasswordIncorrect = (req, res) => {
  res.render("error", {
    error: {
      title: ErrorData.loginPasswordIncorrect.title,
      description: ErrorData.loginPasswordIncorrect.description,
      image: ErrorData.loginPasswordIncorrect.image,
    },
  });
};

const loginPasswordMismatch = (req, res) => {
  res.render("error", {
    error: {
      title: ErrorData.loginPasswordMismatch.title,
      description: ErrorData.loginPasswordMismatch.description,
      image: ErrorData.loginPasswordMismatch.image,
    },
  });
};

module.exports = {
  accountExists,
  accountAbsent,
  accountInvalid,
  accountCreationFailure,
  loginPasswordIncorrect,
  loginPasswordMismatch,
};
