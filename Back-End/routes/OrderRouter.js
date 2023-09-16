const express = require("express");
const router = express.Router();
const OrdersController = require("../controller/OrderController");

router.route("/add_order/:userID").post(OrdersController.addOrder);
router.route("/:id").get(OrdersController.getOrder);

module.exports = router;
