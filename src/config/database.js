//const URI = "mongodb+srv://anilkumarreddy9696:Cj8tsmKWRzET91V5@devtinder.mnumixa.mongodb.net/"

const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.DB_CONNECTION_SECRET);
  await mongoose.connect(process.env.DB_CONNECTION_SECRET);
};

module.exports = connectDB;
