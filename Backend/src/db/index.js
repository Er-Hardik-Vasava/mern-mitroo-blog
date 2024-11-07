import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

export const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB Connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection Failed", error)
        process.exit(1)
    }
}