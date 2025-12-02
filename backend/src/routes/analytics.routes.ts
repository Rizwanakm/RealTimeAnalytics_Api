import { Router } from "express";
import { addAnalytics, getAnalytics } from "../controllers/analytics.controller";

const router = Router();

/**
 * @swagger
 * /api/analytics:
 *   post:
 *     summary: Add a new analytics record
 *     tags: [Analytics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ip:
 *                 type: string
 *               page:
 *                 type: string
 *               browser:
 *                 type: string
 *               device:
 *                 type: string
 *     responses:
 *       201:
 *         description: Analytics stored successfully
 */

/**
 * @swagger
 * /api/analytics:
 *   get:
 *     summary: Get all analytics records
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: List of analytics
 */

router.post("/analytics", addAnalytics);
router.get("/analytics", getAnalytics);

export default router;
