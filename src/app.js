const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.post("/signup", async (req, res) => {

  const user = new User({
    firstName: "anil",
    lastName: "kumar",
    
    password: "12345uyu7yfw34t5w34t56",
    age: 22,
    email: "anilreddy93458@gmail.com"
  });

 await  user.save();
res.send("User Added successfully");
});

connectDB()
  .then(() => {
    console.log("database is connected");
    app.listen(7777, () => {
      console.log("server is started");
    });
  })
  .catch((err) => {
    console.log("database is not connected");
  });
