const Order = require("../model/OrderModel");
const express = require("express");
const bcrypt = require("bcrypt");

// const app = express();

exports.addOrder = async (req, res) => {
  res.send("Add");
};

exports.getOrder = async (req, res) => {
  res.send("Get");
};
