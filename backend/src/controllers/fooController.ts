import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

import { LOGGER } from "../plugins/logger"

//Placeholder to put temporary test code
export async function foo(
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply
) {
  LOGGER.info("headers %o", request.headers)
  LOGGER.info("params %o", request.params)
  LOGGER.info("body %o", request.body)
  return reply.send({ result: "Result from backend is OK" })
}
