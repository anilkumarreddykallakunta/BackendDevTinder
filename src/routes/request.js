const express = require('express')
const { userAuth } = require("../middlewares/auth")
const requestRouter = express.Router();
const User = require('../models/user');
const { validateSignUpData } = require('../utils/validation');
const { connection } = require('mongoose');
const User = require("../models/user");
const ConnectionRequest = require("../models/connectionRequest");
requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
    //sending a connection request
    try {
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;
        const allowedStatus = ["interested", "ignored"];
        if (!allowedStatus.includes(status)) {
            return res.status(400).json({ message: "Invalid status type" + status })
        };
        const toUser = await User.findById(toUserId);
        if (!toUser) {
            throw new Error(404).json({ message: "User not found" });
        }
        const existingConnectionRequest = await ConnectionRequest.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId, }
            ]

        })
        if (existingConnectionRequest) {
            return res.status(400).json({ message: " connection Request Already Exists" });
        }

       

        const connectionRequest = new connectionRequest({
            fromUserId,
            toUserId,
            status,

        });

        const data = await connectionRequest.save();
        res.json({
            message: req.user.firstName + "is" + status  + toUser.lastName,
            data,
        })
    } catch (error) {
        res.status(400).send("ERROR" + error.message);
    }
    //res.send(user.firstName+ " " + "sent the connection Request");
});




module.exports = requestRouter;