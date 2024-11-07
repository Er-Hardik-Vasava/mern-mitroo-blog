import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ extended: true, limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

import contactRouter from "./routes/contact.route.js"
import userRouter  from "./routes/user.route.js"
import blogRouter from "./routes/blog.route.js"

app.use("/api/v1/contact", contactRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/blog", blogRouter)

export { app }