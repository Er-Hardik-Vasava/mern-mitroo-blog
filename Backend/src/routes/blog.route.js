import express from "express"
import { createBlog, deleteBlog, getAllBlogs, getMyBlog, updateBlog } from "../controllers/blog.controller.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/add", isAuthenticated, createBlog)
router.get("/my", isAuthenticated, getMyBlog)
router.delete("/delete/:id", isAuthenticated, deleteBlog)
router.put("/update/:id",isAuthenticated, updateBlog)
router.get("/all", getAllBlogs)

export default router