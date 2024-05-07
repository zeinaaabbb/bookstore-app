import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("Server connected baby!");
})
