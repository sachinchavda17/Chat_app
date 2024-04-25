import express from "express"
import protectedRoute from "../middleware/protectedRoute.js";
import { getUserForSidebar } from "../controllers/user.js";

const router = express.Router();

router.get("/",protectedRoute,getUserForSidebar )


export default router;
