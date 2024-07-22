import { FastifyInstance } from "fastify"

import { getHealth } from "../controllers/healthController"

export const healthRoutes = async (app: FastifyInstance) => {
  app.get("/health", getHealth)
}
