const User = require("../model/UserModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR);
};



exports.createUser = async (req, res) => {
  const { fullname, email, password, orders } = req.body;

  try {
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
      orders,
      role: "User",
    });
    const token = signToken(newUser._id);
    res.status(201).json({
      token,
      data: {
        fullname: newUser.fullname,
        email: newUser.email,
        password: newUser.password,
        orders: newUser.orders,
      },
      message: "Thanks for registration",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Cannot register the user" });
  }
};

exports.getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const isMatch = await userExist.comparePass(password, userExist.password);
      if (isMatch) {
        const token = signToken(userExist._id);
        return res.status(201).json({
          token,
          data: {
            fullname: userExist.fullname,
            userId: userExist._id,
          },
        });
      } else {
        return res.status(404).json({ message: "Password is wrong" }); //404=not found
      }
    } else {
      return res.status(404).json({ message: "Email or password is wrong" }); //404=not found
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
