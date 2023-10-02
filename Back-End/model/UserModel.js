const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mySchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  orders: [
    {
      orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    },
  ],
  role: String,
  score: Number,
});

mySchema.methods.comparePass = async function (pass, passDB) {
  return await bcrypt.compare(pass, passDB);
};

const User = mongoose.model("User", mySchema);


const protect = async (req, res, next) => {
  try {
      // check the token
      const testToken = req.headers.authorization
      let token
      if (testToken && testToken.startsWith('bearer')) {
          token = testToken.split(' ')[1]

      }
      if (!token) {
          res.status(401).json({ error: 'You are not logged in!' })
      }

      // validate the token
      await util.promisify(jwt.verify)(token, process.env.SECRET_STR)
      // exttract id from the token
      //  const {_id}=jwt.verify(token, process.env.SECRET_STR)


      // console.log(decoded)

      // check if user exist
      // const user = await User.findById(decoded.id)
      // const user = await User.findById(decoded.id).select("_id")   find the user and retrive just the id
      // if (!user) {
      //     res.status(404).json({ error: "user does not exist anymore!" })
      // }

      // allow user to access

      // req.user = user


      next()
  } catch (error) {
      // console.log(error)
      res.status(400).json({ error: "Invalid Token" })

  }



  // try {
  //     // check the token
  //     const testToken = req.headers.authorization;
  //     let token;
  //     if (testToken && testToken.startsWith('Bearer')) {
  //       token = testToken.split(' ')[1];
  //     }
  //     if (!token) {
  //       return res.status(401).json({ error: 'You are not logged in!' });
  //     }

  //     // validate the token
  //     const decoded = await util.promisify(jwt.verify)(token, process.env.SECRET_STR);

  //     // check if user exists and attach it to the req.user object
  //     const user = await User.findById(decoded.id);
  //     if (!user) {
  //       return res.status(404).json({ error: 'User does not exist anymore!' });
  //     }

  //     // allow user to access and attach the user object to req.user
  //     req.user = user;

  //     // Continue to the next middleware or route handler
  //     next();
  //   } catch (error) {
  //     res.status(400).json({ error: 'Invalid Token' });
  //   }
}

module.exports = {User,protect};
