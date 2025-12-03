import { Schema, model, Document } from 'mongoose';

export interface IAnalytics extends Document {
  eventType: string;
  metadata: Record<string, any>;
  createdAt: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  eventType: { type: String, required: true },
  metadata: { type: Schema.Types.Mixed, default: {} },
  createdAt: { type: Date, default: () => new Date() }
});

export const AnalyticsModel = model<IAnalytics>('Analytics', AnalyticsSchema);
