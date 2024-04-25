import express from "express"
import { getMessages, sendMessage } from "../controllers/messages.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/send/:id",protectedRoute, sendMessage)
router.get("/:id",protectedRoute, getMessages)

export default router;