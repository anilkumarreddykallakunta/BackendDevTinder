const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

require('dotenv').config();

// -------------------- FIXED CORS --------------------
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// -------------------- PARSERS --------------------
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// -------------------- ROUTES --------------------
const authRouter =  require("./routes/auth");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profile");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// -------------------- DB + SERVER --------------------
connectDB()
  .then(() => {
    console.log("database is connected!!!!");
    app.listen(7777, () => {
      console.log("server running on port 7777...");
    });
  })
  .catch((err) => {
    console.log("database is not connected");
  });
