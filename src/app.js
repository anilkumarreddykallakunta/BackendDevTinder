
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');
const { validateSignUpData } = require('./utils/validation');
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser());
const validator = require('validator');
const jwt = require('jsonwebtoken');
const {userAuth} = require("./middlewares/auth")
const authRouter =  require("./routes/auth");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profile");
const cors= require('cors');
const userRouter = require("./routes/user");
app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",userRouter);
app.use(cors());

connectDB()
  .then(() => {
    console.log("database is connected established!!!!");
    app.listen(7777, () => {
      console.log("server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.log("database is not connected");
  });

