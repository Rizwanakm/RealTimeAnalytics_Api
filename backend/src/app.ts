import express from "express";
import cors from "cors";
import analyticsRoutes from "./routes/analytics.routes";
import { setupSwagger } from "./config/swagger";

export const app = express();

app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use("/api", analyticsRoutes);
