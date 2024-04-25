import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    message: {
        type: String,
        require: true,
    }
}, { timestamps: true })

const Message = mongoose.model("Message",messageSchema);

export default Message;