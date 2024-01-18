const express = require("express");
const router = express.Router();

const TodoController = require("../controllers/TodoController.js");

router.get("/collection", TodoController.collection);
router.get("/:type", TodoController.list);

router.post("/:type/progress", TodoController.manageProgress);
router.post("/:type/completed", TodoController.manageCompleted);
router.post("/:type/clear", TodoController.clearTasks);

module.exports = router;
