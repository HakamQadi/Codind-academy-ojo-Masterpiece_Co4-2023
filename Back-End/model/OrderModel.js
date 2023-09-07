const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mySchema = new mongoose.Schema({
  delivery_address: String,
  address_details: String,
  city: String,
  phone: Number,
  additional_desc: String,
  recipient_name: String,
  recieving_address: String,
  recipient_addressDetails: String,
  recieving_date: String,
  recipient_phone: Number,
});

const Order = mongoose.model("Order", mySchema);

module.exports = Order;