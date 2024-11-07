import mongoose from "mongoose";
import validator from "validator"

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a Valid Email!"]
    },
    message:{
        type: String,
        required: true
    }
},{timestamps:true})

export const Contact = mongoose.model("Contact", contactSchema)