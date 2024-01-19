const DisplayManager = require("../database/DisplayManager.js");
const ProgressManager = require("../database/ProgressManager.js");
const CompletedManager = require("../database/CompletedManager.js");

const collection = async (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/error/account-absent");
    return;
  }

  const collection = await DisplayManager.GetCollection(req.session.email);

  res.render("collection", { collection });
};

const list = async (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/error/account-absent");
    return;
  }

  const todo = await DisplayManager.GetLists(
    req.session.email,
    req.params.type
  );

  res.render("todo", { todo });
};

const manageProgress = async (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/");
    return;
  }

  if (req.body.action === "add") {
    await ProgressManager.AddProgressTask(
      req.session.email,
      req.params.type,
      req.body
    );

    res.redirect("back");
    return;
  }

  if (req.body.action === "delete") {
    await ProgressManager.DeleteProgressTask(
      req.session.email,
      req.params.type,
      req.body
    );

    res.redirect("back");
    return;
  }

  await CompletedManager.AddCompletedTask(
    req.session.email,
    req.params.type,
    req.body
  );

  await ProgressManager.DeleteProgressTask(
    req.session.email,
    req.params.type,
    req.body
  );

  res.redirect("back");
};

const manageCompleted = async (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/");
    return;
  }

  CompletedManager.DeleteCompletedTask(
    req.session.email,
    req.params.type,
    req.body
  );

  res.redirect("back");
};

const clearTasks = async (req, res) => {
  if (req.session.email === undefined) {
    res.redirect("/");
    return;
  }

  await ProgressManager.ClearTasks(req.session.email, req.params.type);
  res.redirect("back");
};

module.exports = {
  manageProgress,
  manageCompleted,
  clearTasks,
  collection,
  list,
};
