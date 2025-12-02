import mongoose, { Document, Schema } from "mongoose";

export interface IAnalytics extends Document {
  ip: string;
  page: string;
  browser: string;
  device: string;
  timestamp: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  ip: String,
  page: String,
  browser: String,
  device: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const AnalyticsModel = mongoose.model("Analytics", AnalyticsSchema);
