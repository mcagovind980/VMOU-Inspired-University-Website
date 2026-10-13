
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/Auth.js ";
import connectDB from "./config/db.js";

const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "VMOU Backend is running successfully"
  });
});

// 3. Authentication routes
app.use("/api/auth", authRoutes);

// 4. Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    server: "running",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected"
  });
});

// 5. Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "API route not found"
  });
});

// 6. Start server after MongoDB connection
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in .env");
    }

    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exitCode = 1;
  }
}

startServer();
