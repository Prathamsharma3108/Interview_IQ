import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();

// ===============================
// CORS
// ===============================

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://interviewwiq-eight-psi.vercel.app",
            "https://interview-f0ild075e-pratham-sharmas-projects-fc64ea1a.vercel.app"
        ],
        credentials: true
    })
);

// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());
app.use(cookieParser());

// ===============================
// HEALTH / ROOT ROUTES
// ===============================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Interview IQ Backend is running"
    });
});

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Interview IQ API is healthy"
    });
});

// ===============================
// API ROUTES
// ===============================

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

// ===============================
// ERROR HANDLER
// ===============================

app.use((err, req, res, next) => {
    console.error("🚨 CRITICAL BACKEND ERROR:", err.message);
    console.error("👉 STACK TRACE:", err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message
    });
});

// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 6000;

const startServer = async () => {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};

startServer();