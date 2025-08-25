const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.post("/signup", async (req, res) => {

  const user = new User({
    firstName: "sandeep",
    lastName: "reddy",
    
    password: "847368457",
    age: 22,
    email: "sandeep8@gmail.com"
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
