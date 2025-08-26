const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');


app.use(express.json());


app.post("/signup", async (req, res) => {

  const user = new User(req.body);

 try {
  await  user.save();
res.send("sended successfully and saved ");
 } catch (error) {
  res.status(400).send("data doesn't passed to the data base");
 }
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
