import { User } from "../model/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res, next) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(409).json({
            success: false,
            message: "An account with this email already exists."
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, username, email, password: hashedPassword });
    
    if (!newUser) {
        return res.status(500).json({
            success: false,
            message: "User creation failed. Please try again."
        });
    }

    res.status(201).json({
        success: true,
        message: "User created successfully!",
        user: newUser
    });
});

export const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required."
        });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    });

    return res.status(200).cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        secure: true,
        sameSite: "None"
    }).json({
        success: true,
        message: "Login successful.",
        user,
        token
    });
});

export const getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }
    
    res.status(200).json({
        success: true,
        user,
    });
});

export const logOut = asyncHandler(async (req, res, next) => {
    res.status(200).cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
        secure: true,
        sameSite: "None"
    }).json({
        success: true,
        message: "Logout successful."
    });
});
