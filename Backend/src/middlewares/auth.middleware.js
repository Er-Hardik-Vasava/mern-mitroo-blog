import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "User is not authenticated"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        next();

    } catch (error) {
        console.error(error);
        return res.status(403).json({
            success: false,
            message: "Invalid or expired token!"
        });
    }
};
