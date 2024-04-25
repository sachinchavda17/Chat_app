import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conected to MongoDB")
    } catch (error) {
        console.log("Error Connecting to mongoDB " + error.message)
    }
}

export default connectToMongoDb;