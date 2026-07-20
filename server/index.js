import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()
app.use(cors({
    origin: [
        "http://localhost:5173", 
        "https://interviewwiq-eight-psi.vercel.app",
        "https://interview-f0ild075e-pratham-sharmas-projects-fc64ea1a.vercel.app" 
    ],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

// --- ADDED THIS TO CATCH THE HIDDEN CRASH ---
app.use((err, req, res, next) => {
    console.error("🚨 CRITICAL BACKEND CRASH:", err.message);
    console.error("👉 STACK TRACE:", err.stack);
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
});

const PORT = process.env.PORT || 6000
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})