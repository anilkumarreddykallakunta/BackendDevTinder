const express = require('express');
const {userAuth} = require("../middlewares/auth")
const { validateSignUpData } = require('../utils/validation');
const {validateEditProfileData} = require("../utils/validation");
const User = require('../models/user');
const profileRouter = express.Router();

profileRouter.get("/profile/view",userAuth, async (req, res) => {
  try {
    const user = req.user;
    
    res.send(user);
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});
profileRouter.patch("/profile/edit",async(req,res)=>{

    try {
        if(!validateEditProfileData(req,res)){
            throw new Error("Invalid Edit Request");
        }
        const loggedInUser = req.user;
        Object.keys(req.body).forEach((key)=>
            (loggedInUser[key] = req.body[key]));
           await loggedInUser
           .save()
        res.send("User Updated Successfully");
    } catch (error) {
        res.status(400).send("Error"+error.message);
    }



    res.send();
});
module.exports = profileRouter;