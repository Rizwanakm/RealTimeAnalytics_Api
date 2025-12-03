import { Express } from "express";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Realtime Analytics API",
    version: "1.0.0"
  },
  paths: {
    "/api/analytics/events": {
      post: {
        summary: "Log analytics event",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  eventType: { type: "string" },
                  metadata: { type: "object" }
                }
              }
            }
          }
        },
        responses: {
          201: { description: "Created" }
        }
      }
    },
    "/api/analytics/events/recent": {
      get: {
        summary: "Get recent events",
        responses: {
          200: { description: "OK" }
        }
      }
    }
  }
};

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
