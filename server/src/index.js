import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.Mongodb)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message));

// console.log(process.env.Mongodb)

app.listen(3000, () => {
  console.log("Server connected baby!");
})
