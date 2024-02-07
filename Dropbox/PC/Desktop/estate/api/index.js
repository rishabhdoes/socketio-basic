import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
mongoose
  .connect(
    "mongodb+srv://op:op@cluster0.hhigoat.mongodb.net/estate?authSource=admin&replicaSet=atlas-ar1oxj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
  )
  .then(() => {
    console.log("Connected To MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
