const HomeData = require("../json/home.json");

const home = (req, res) => {
  req.session.email = "ryan@gmail.com";
  req.session.username = "Ryan";

  const home = {
    username: req.session.username === undefined ? "" : req.session.username,
    account: req.session.email === undefined ? false : true,
    header: HomeData.header,
    templates: HomeData.templates,
    custom: HomeData.custom,
    personal: HomeData.personal,
    inspired: HomeData.inspired,
    comments: HomeData.comments,
    footer: HomeData.footer,
    username: "",
  };

  res.render("home", home);
};

module.exports = {
  home,
};
