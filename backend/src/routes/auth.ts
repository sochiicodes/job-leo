import { Router } from "express";
import { getMe, login, logout, register } from "../controllers/authController";
import { protect } from "../middleware/auth";


const authRoutes = Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.get("/register",protect, getMe)
authRoutes.post("/logout", logout)

export default authRoutes