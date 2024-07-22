import path from "path"
import dotenv from "dotenv"
import { z } from "zod"

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") })

export const env = {
  NODE_ENV: z.string().parse(process.env.NODE_ENV),
  LOG_LEVEL: z.string().parse(process.env.LOG_LEVEL),
  PORT: z.coerce.number().parse(process.env.PORT),
  DB_HOST: z.string().default("127.0.0.1").parse(process.env.DB_HOST),
  DB_PORT: z.coerce.number().default(5432).parse(process.env.DB_PORT),
  DB_USER: z.string().parse(process.env.DB_USER),
  DB_PASSWORD: z.string().default("admin").parse(process.env.DB_PASSWORD),
  DB_DATABASE: z.string().parse(process.env.DB_DATABASE),
  FRONTEND_HOSTNAME: z.string().parse(process.env.FRONTEND_HOSTNAME),
  GIT_COMMIT: z.string().default("unknown").parse(process.env.GIT_COMMIT),
}

export const isProduction = process.env.NODE_ENV !== "development"
