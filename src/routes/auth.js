const express = require('express');
const { validateSignUpData } = require('../utils/validation');
const User = require('../models/user');

const authRouter = express.Router();
const bcrypt = require('bcrypt')
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });



    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await user.validatePassword(password);
    if (isPasswordValid) {

      const token = await user.getJWT();

      res.cookie("token", token,{expires:new Date(Date.now() + 1 *3600000)});
      res.send("User Login successfully");
    }
    else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("ERROR: " + error);
  }
});
authRouter.post("/signup", async (req, res) => {

  try {
    validateSignUpData(req);


    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash
    });


    await user.save();
    res.send("user Added successfully ");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});
authRouter.post("/logout",async (req,res)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now())
    })
    res.send("Logout") ;
});
module.exports =authRouter;