const { User } = require("../model/UserModel");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR);
};

exports.getAllUsersByRole = async (req, res) => {
  try {
    const users = await User.find({ role: "user" });
    const drivers = await User.find({ role: "driver" });

    const mergedData = users.concat(drivers);

    res.status(200).json({
      usersCount: users.length,
      driversCount: drivers.length,
      totalUsers: mergedData.length,
      data: mergedData,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.addUser = async (req, res) => {
  //   res.send("asd");

  const { fullname, email, password, orders, role } = req.body;

  try {
    // if (role === "super admin" || role === "user") {
    const userExist = await User.findOne({ email }).catch((err) => {
      console.log("Error: ", err);
    });
    if (userExist) {
      return res
        .status(409)
        .json({ message: "User with email already exists!" }); //409=Conflict
    }

    const hashPass = bcrypt.hashSync(password, 12);

    const newUser = await User.create({
      fullname,
      email,
      password: hashPass,
      //   orders,
      role,
      score: 0,
    });
    const token = signToken(newUser._id);
    res.status(201).json({
      token,
      data: {
        fullname: newUser.fullname,
        email: newUser.email,
        password: newUser.password,
        orders: newUser.orders,
        score: newUser.score,
      },
      message: "User Added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Cannot register the user" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.deleteOne({ _id: id });
    const newUsers = await User.find();

    res.status(200).json({
      message: "User deleted Successfully",
      data: {
        newUsers,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const newUserFullname = req.body.fullname;
  //   res.send(newUserFullname);
  try {
    await User.updateOne(
      { _id: id },
      {
        $set: { fullname: newUserFullname },
      }
    );
    const updatedUser = await User.findById(id);
    res.status(200).json({
      data: {
        updatedUser,
      },
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const isMatch = await userExist.comparePass(password, userExist.password);
      if (isMatch) {
        // if (isMatch && userExist.role === "admin") {
        const token = signToken(userExist._id);
        return res.status(200).json({
          token,
          data: {
            fullname: userExist.fullname,
            userId: userExist._id,
            role: userExist.role,
          },
        });
      } else {
        return res.status(404).json({ message: "Email or password is wrong" }); //404=not found
      }
    } else {
      return res.status(404).json({ message: "Email or password is wrong" }); //404=not found
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.increaseScore = async (req, res) => {
  const id = req.params.id;
  const newScore = req.body.score;
  try {
    await User.updateOne(
      { _id: id },
      {
        $set: { score: newScore },
      }
    );
    const updatedUser = await User.findById(id);
    res.status(200).json({
      data: {
        updatedUser,
      },
      message: "Score Increased Successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};
