const express = require("express");
const router = express.Router();
const OrdersController = require("../controller/OrderController");

router.route("/").get(OrdersController.allOrders);
router.route("/:id").get(OrdersController.getOrder);
router.route("/details/:id").get(OrdersController.getOrderById);
router.route("/add_order/:userID").post(OrdersController.addOrder);

module.exports = router;
