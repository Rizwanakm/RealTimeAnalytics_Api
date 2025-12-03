import { AnalyticsModel, IAnalytics } from '../models/analytics.model';

export const logEvent = async (payload: { eventType: string; metadata?: any }): Promise<IAnalytics> => {
  const doc = await AnalyticsModel.create({
    eventType: payload.eventType,
    metadata: payload.metadata || {}
  });
  return doc;
};

export const getRecentEvents = async (limit = 50) => {
  return AnalyticsModel.find().sort({ createdAt: -1 }).limit(limit).lean();
};
