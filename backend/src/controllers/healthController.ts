import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

import { env } from "../env"

const startTime = new Date()

export async function getHealth(
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply
) {
  return reply
    .code(200)
    .send({ health: true, startTime, commit: env.GIT_COMMIT })
}
