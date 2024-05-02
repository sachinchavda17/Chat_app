import express from "express"
import protectedRoute from "../middleware/protectedRoute.js";
import { getUserForSearch, getUserForSidebar } from "../controllers/user.js";

const router = express.Router();

router.get("/", protectedRoute, getUserForSidebar)
// router.get("/search/:searchTerm", protectedRoute, getUserForSearch)


export default router;
