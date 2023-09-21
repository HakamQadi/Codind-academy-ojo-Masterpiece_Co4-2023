const express = require("express");
const router = express.Router();
const adminController = require("../controller/AdminController");

router.route("/").get(adminController.getAllUsersByRole);
router.route("/add_user").post(adminController.addUser);
router.route("/delete_user/:id").delete(adminController.deleteUser);
router.route("/edit_user/:id").patch(adminController.updateUser);
router.route("/login").post(adminController.login);

module.exports = router;
