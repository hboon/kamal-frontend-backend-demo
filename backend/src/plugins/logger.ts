import pino from "pino"

import { env } from "../env"

export const createLogger = () => {
  return pino({
    level: env.LOG_LEVEL,
  })
}

export const LOGGER = createLogger()
