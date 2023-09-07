const express = require("express");
const router = express.Router();
const usersController = require("../controller/UserController");

router.route("/register").post(usersController.createUser);
router.route("/login").post(usersController.getUser);

module.exports = router;
