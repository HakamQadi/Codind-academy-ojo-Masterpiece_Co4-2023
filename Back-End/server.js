const express = require("express");
const dotnev = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors')
dotnev.config({ path: "./conf.env" });

const userRouter = require("./routes/UserRouter");
const orderRouter = require("./routes/OrderRouter");
const adminRouter = require('./routes/AdminRoutes')

const app = express();
app.use(cors())
app.use(express.json())



mongoose
  .connect(process.env.CONN_STR, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log("DB connected");
  });

app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use('/admin', adminRouter)


app.listen(8080, () => {
  console.log("http://localhost:8080");
});
