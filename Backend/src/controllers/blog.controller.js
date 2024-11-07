import { Blog } from "../model/blog.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createBlog = asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    const createdBy = req.user._id;
    const createdAt = new Date();
    const author = req.user.name;

    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "Both title and content are required."
        });
    }

    try {
        const blog = await Blog.create({ title, content, author, createdAt, createdBy });
        res.status(201).json({
            success: true,
            message: "Blog created successfully.",
            blog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the blog.",
            error: error.message
        });
    }
});

export const getMyBlog = asyncHandler(async (req, res, next) => {
    try {
        const blogs = await Blog.find({ createdBy: req.user._id });
        res.status(200).json({
            success: true,
            blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving your blogs.",
            error: error.message
        });
    }
});

export const deleteBlog = asyncHandler(async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found."
            });
        }

        await blog.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully."
        });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while deleting the blog.",
            error: error.message
        });
    }
});

export const updateBlog = asyncHandler(async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found."
            });
        }

        const { title, content } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            {
                new: true,
                runValidators: true,
                useFindAndModify: false,
            }
        );

        res.status(200).json({
            success: true,
            message: "Blog updated successfully.",
            updatedBlog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the blog.",
            error: error.message
        });
    }
});

export const getAllBlogs = asyncHandler(async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving blogs.",
            error: error.message
        });
    }
});
