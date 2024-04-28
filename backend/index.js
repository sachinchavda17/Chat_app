import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path from "path"
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/messages.js';
import userRoutes from "./routes/user.js"
// import connectToMongoDb from "./db/ConnectToMongoDb.js";
import { app, server } from "./socket/socket.js";
import mongoose from "mongoose";

const newDirname = path.resolve();

dotenv.config();

const port = process.env.PORT || 5000;

try {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to Mongo!"))
      .catch((err) => console.log(`Error while connecting with mongo ${err}`));
  } catch (err) {
    console.log(`Error while connecting with mongo ${err}`);
  }

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(newDirname, "/frontend/dist")))

app.get("*", (req, res) => path.join(newDirname, "frontend", "dist", "index.html"))

// app.listen(port, () => {
//     connectToMongoDb();
//     console.log(`Server is running on port ${port}`)
// })



server.listen(port,  () => {
    // connectToMongoDb();
    console.log(`Server is running on port ${port}`)
})