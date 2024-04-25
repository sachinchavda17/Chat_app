import express from "express";
import { loginUser, logoutUser, singupUser } from "../controllers/auth.js";

const router = express.Router();


router.post("/signup",singupUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)


export default router;