const Order = require("../model/OrderModel");
const { User } = require("../model/UserModel");
const express = require("express");
const bcrypt = require("bcrypt");

// const app = express();

exports.addOrder = async (req, res) => {
  // console.log("object")
  const userId = req.params.userID;
  const {
    delivery_address,
    address_details,
    city,
    name,
    phone,
    additional_desc,
    // ///////
    recieving_address,
    recipient_addressDetails,
    recipient_city,
    recipient_name,
    recipient_phone,
    recipient_additionalDesc,
    selectedDate,
    shipmentDescription,
    shipmentWeight,
    shipmentSize,
  } = req.body;
  // console.log("recieving_date type : ", typeof selectedDate);
  console.log("shipmentDescription ", shipmentDescription);
  console.log("shipmentWeight ", shipmentWeight);
  console.log("shipmentSize ", shipmentSize);

  const formattedDate = selectedDate.split("T")[0];

  try {
    const order = await Order.create({
      delivery_address,
      address_details,
      city,
      name,
      phone,
      additional_desc,
      // //////////////
      recieving_address,
      recipient_addressDetails,
      recipient_city,
      recipient_name,
      recipient_phone,
      recipient_additionalDesc,
      selectedDate: formattedDate,
      shipmentDescription,
      shipmentWeight,
      shipmentSize,
    });

    console.log(order._id);

    // const user = await User.findById({ _id: userId });
    newOrder = {
      orderId: order._id,
    };
    // console.log("newOrder ", newOrder);

    const newUser = await User.updateOne(
      { _id: userId },
      {
        $push: { orders: newOrder },
      }
    );
    // console.log("newUser ", newUser);

    res.status(200).json({
      message: "New Order Created Successfully",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

exports.getOrder = async (req, res) => {
  const userID = req.params.id;
  const user = await User.findById(userID);
  const userOrderIds = user.orders.map((order) => order.orderId);
  const userOrders = await Order.find({ _id: { $in: userOrderIds } });
  res.status(200).json({
    data: {
      userOrders,
    },
  });
};

exports.getOrderById = async (req, res) => {
  try {
    const OrderID = req.params.id;
    const order = await Order.findById(OrderID);
    console.log("Order : ", order);

    res.status(200).json({
      // message: "New Order Created Successfully",
      data: {
        order,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

exports.allOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    console.log("orders ", orders);

    res.status(200).json({
      // message: "New Order Created Successfully",
      data: {
        orders,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
