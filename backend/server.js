// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import connectDB from "./db/connectDB.js";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log(`server is running on port number ${PORT}`);
  connectDB();
});
