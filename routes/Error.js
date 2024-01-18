const express = require("express");
const router = express.Router();

const ErrorController = require("../controllers/ErrorController.js");

router.get("/account-exists", ErrorController.accountExists);
router.get("/account-absent", ErrorController.accountAbsent);
router.get("/account-invalid", ErrorController.accountInvalid);
router.get("/account-creation-failure", ErrorController.accountCreationFailure);
router.get("/login-password-incorrect", ErrorController.loginPasswordIncorrect);
router.get("/login-password-mismatch", ErrorController.loginPasswordMismatch);

module.exports = router;
