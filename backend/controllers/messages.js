import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);


        // SOCKET.IO functionallity will be added here


        res.status(200).json(newMessage)

    } catch (error) {
        console.log("Error in send message controller : " + error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}


export async function getMessages(req, res) {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("error in getMessge controller : ", error)
        return res.status(401).json({ message: "You must be logged in to see messages" })
    }
}