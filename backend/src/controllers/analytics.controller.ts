import { Request, Response } from "express";
import { AnalyticsModel } from "../models/analytics.model";
import { sendRealtimeUpdate } from "../services/socket.service";

export const addAnalytics = async (req: Request, res: Response) => {
  try {
    const data = await AnalyticsModel.create(req.body);

    // Send real-time update
    sendRealtimeUpdate(data);

    res.status(201).json({
      success: true,
      message: "Analytics recorded",
      data,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error saving analytics" });
  }
};

export const getAnalytics = async (req: Request, res: Response) => {
  const data = await AnalyticsModel.find().sort({ timestamp: -1 });
  res.json(data);
};

