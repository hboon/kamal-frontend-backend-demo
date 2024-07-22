import fastify from "fastify"
import fastifyCors from "@fastify/cors"
import fastifyRawBody from "fastify-raw-body"

import { env } from "./env"
import { LOGGER } from "./plugins/logger"
import { fooRoutes } from "./routes/fooRoutes"
import { healthRoutes } from "./routes/healthRoutes"

const app = fastify({ logger: LOGGER })

app.register(fastifyRawBody, {
  global: false,
  runFirst: true,
})

app.register(fastifyCors, {
  origin: env.FRONTEND_HOSTNAME,
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
})

app.register(fooRoutes, { prefix: "/" })
app.register(healthRoutes, { prefix: "/" })

const start = async () => {
  try {
    await app.listen({ host: "0.0.0.0", port: env.PORT })
    app.log.info("Server listening on http://localhost:%d", env.PORT)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
