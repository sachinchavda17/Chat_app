import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from  './routes/auth.js';
import messageRoutes from  './routes/messages.js';
import userRoutes from "./routes/user.js"
import connectToMongoDb from "./db/ConnectToMongoDb.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(cookieParser())
// app.use(cors());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



app.listen(port, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${port}`)
})