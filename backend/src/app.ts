import express from "express";
import cors from "cors";
import analyticsRoutes from "./routes/analytics.routes";
import { setupSwagger } from "./swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analytics", analyticsRoutes);
setupSwagger(app);

export default app;
