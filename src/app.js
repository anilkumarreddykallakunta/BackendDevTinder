const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.post("/signup", async (req, res) => {

  const user = new User({
    firstName: "raju",
    lastName: "seigtuhwegiuh",
    
    password: "12345uyu7yfygfuytf6856",
    age: 23,
    email: "anilq3gujhq3iguhd@gmail.com"
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
