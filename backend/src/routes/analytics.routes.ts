import { Router } from 'express';
import { createEvent, recentEvents } from '../controllers/analytics.controller';

const router = Router();

router.post('/events', createEvent);       // log event
router.get('/events/recent', recentEvents);

export default router;

