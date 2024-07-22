import { FastifyInstance } from "fastify"

import { foo } from "../controllers/fooController"

export const fooRoutes = async (app: FastifyInstance) => {
  app.get("/foo", { config: { rawBody: true } }, foo)
}
