import User from "../models/User.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterdUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filterdUsers)

    } catch (error) {
        console.log("Error in user controller : ", error.message)
        res.status(500).json({ error: "Internal server error " });
    }
}


export const getUserForSearch = async (req, res) => {
    try {
        const { searchTerm } = req.params;
        console.log(searchTerm);
        const regexPattern = new RegExp(searchTerm, "i");

        const users = await User.find({ fullName: { $regex: regexPattern } }).select("-password");

        return res.status(200).json(users );

    } catch (error) {
        console.log("Error in search controller: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};
