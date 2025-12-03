// src/config/db.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

// Helper to safely get environment variables
function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}

const MONGO_URI = getEnv("MONGO_URI");

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit if DB connection fails
  }
};
