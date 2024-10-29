FROM caddy:2.8.4 AS caddy
FROM oven/bun:1.1.32 AS bun

FROM node:20-slim
RUN npm install -g pnpm
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY --from=caddy /usr/bin/caddy /usr/bin/caddy

# You'll want to remove this entire line once you are done. But it's really handy for troubleshooting connectivity
RUN apt-get update -qq && apt-get install curl -y

WORKDIR /app
COPY . .

EXPOSE 80
