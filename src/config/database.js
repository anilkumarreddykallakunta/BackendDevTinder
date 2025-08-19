//const URI = "mongodb+srv://anilkumarreddy9696:Cj8tsmKWRzET91V5@devtinder.mnumixa.mongodb.net/"

const mongoose = require("mongoose");
const mongooseDB = async () => {
  await mongoose.connect(
    "mongodb+srv://anilkumarreddy9696:Cj8tsmKWRzET91V5@devtinder.mnumixa.mongodb.net/"
  );
};
mongooseDB().then(()=>{
    console.log("database is connected")
})
.catch((err)=>{
    console.log("database is not connected")
})