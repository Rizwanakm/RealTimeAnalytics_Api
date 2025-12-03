import { Request, Response } from 'express';
import * as analyticsService from '../services/analytics.service';
import { broadcastEvent } from '../services/socket.service';

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { eventType, metadata } = req.body;
    const saved = await analyticsService.logEvent({ eventType, metadata });
    // broadcast to connected clients
    broadcastEvent('analytics:new_event', saved);
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const recentEvents = async (_req: Request, res: Response) => {
  try {
    const events = await analyticsService.getRecentEvents(100);
    res.json({ success: true, data: events });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};
