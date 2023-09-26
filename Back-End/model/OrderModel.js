const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mySchema = new mongoose.Schema({
  delivery_address: String,
  address_details: String,
  city: String,
  name: String,
  phone: Number,
  additional_desc: String,
  // /////////////////////
  recieving_address: String,
  recipient_addressDetails: String,
  recipient_city: String,
  recipient_name: String,
  recipient_phone: Number,
  recipient_additionalDesc: String,
  selectedDate: String,
  // //////////////////
  shipmentDescription: String,
  shipmentWeight: String,
  shipmentSize: String,
});

const Order = mongoose.model("Order", mySchema);

module.exports = Order;
