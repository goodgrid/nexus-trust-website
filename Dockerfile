# syntax=docker/dockerfile:1

FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITE_UMAMI_HOST=https://cloud.umami.is
ARG VITE_UMAMI_WEBSITE_ID
ENV VITE_UMAMI_HOST=$VITE_UMAMI_HOST
ENV VITE_UMAMI_WEBSITE_ID=$VITE_UMAMI_WEBSITE_ID

RUN npm run build

FROM node:24-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# Only the runtime dependencies (express + express-rate-limit); no build tooling.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY server ./server
COPY --from=builder /app/dist ./dist

# Brevo + recipient config are provided at runtime (docker run -e / compose),
# never baked into the image. Sender must be a verified sender in Brevo:
#   BREVO_API_KEY, CONTACT_TO, CONTACT_FROM, CONTACT_FROM_NAME

USER node
EXPOSE 8080

CMD ["node", "server/index.js"]
