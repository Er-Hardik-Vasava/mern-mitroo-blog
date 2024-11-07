import { Contact } from "../model/contact.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const sendContact = asyncHandler(async (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    try {
        const createdContact = await Contact.create({ name, email, message });
        return res.status(201).json({
            success: true,
            message: "Your message has been sent successfully."
        });
    } catch (error) {
        console.error("Contact submission error:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while sending your message. Please try again later."
        });
    }
});
