//const URI = "mongodb+srv://anilkumarreddy9696:Cj8tsmKWRzET91V5@devtinder.mnumixa.mongodb.net/"

const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://anilkumarreddy9696:Cj8tsmKWRzET91V5@devtinder.mnumixa.mongodb.net/devTinder"
  );
};
module.exports = connectDB;



