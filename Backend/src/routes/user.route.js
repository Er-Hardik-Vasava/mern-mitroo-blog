import express from "express"
import { getUser, loginUser, logOut, registerUser } from "../controllers/user.controller.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

const router = express.Router()
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/me", isAuthenticated, getUser)
router.get("/logout", isAuthenticated, logOut)


export default router;