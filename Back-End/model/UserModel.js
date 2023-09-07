const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mySchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  orders: Array,
  role: String,
});

mySchema.methods.comparePass = async function (pass, passDB) {
  return await bcrypt.compare(pass, passDB);
};


const User = mongoose.model("User", mySchema);

module.exports = User;
