import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a Valid Email!"]
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)