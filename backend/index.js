import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path from "path"
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/messages.js';
import userRoutes from "./routes/user.js"
import connectToMongoDb from "./db/ConnectToMongoDb.js";
import { app, server } from "./socket/socket.js";
import mongoose from "mongoose";

const newDirname = path.resolve();

dotenv.config();

const port = process.env.PORT || 5000;

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

try {
     mongoose.connect(process.env.MONGODB_URI)
    console.log("Conected to MongoDB")
} catch (error) {
    console.log("Error Connecting to mongoDB " + error.message)
}

server.listen(port,  () => {
    // connectToMongoDb();
    console.log(`Server is running on port ${port}`)
})