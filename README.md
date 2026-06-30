### Development

The site is a Vite + React frontend served, in production, by a small Express
server that also exposes the contact-form endpoint (`POST /api/contact`, which
sends mail via Brevo).

Run both processes locally (Vite proxies `/api` to the Express server):

```bash
cp .env.example .env   # then fill in BREVO_API_KEY etc.
npm install
npm run dev            # frontend on http://localhost:5173
npm run dev:server     # API on http://localhost:3000 (loads .env, --watch)
```

The contact form needs `BREVO_API_KEY` set and `CONTACT_FROM` to be a verified
sender in your Brevo account. Without the key, the endpoint returns a 500 and
the form shows its error state.

### Docker

```bash
docker build \
  --build-arg VITE_UMAMI_HOST=https://e9cc44d3cb.route.brainpod.io \
  --build-arg VITE_UMAMI_WEBSITE_ID=b4b5e428-7885-4106-92c6-02f073f8781d \
  -t nexustrust-website:local .
```

`VITE_UMAMI_HOST` defaults to `https://cloud.umami.is`. Set it (no trailing
slash) to point at your on-premise Umami instance.

Brevo / contact config is provided at **runtime**, not as build args (the API
key must never be baked into an image):

```bash
docker run -p 8080:8080 \
  -e BREVO_API_KEY=xkeysib-... \
  -e CONTACT_TO=hi@nexustrust.eu \
  -e CONTACT_FROM=no-reply@nexustrust.eu \
  -e CONTACT_FROM_NAME="Nexus Trust website" \
  nexustrust-website:local
```

### Deployment

```bash
docker login registry.brainpod.io/[POD_NAME] -u api -p [API_KEY]
```

```bash
docker buildx build \
  --platform linux/amd64 \
  --build-arg VITE_UMAMI_HOST=https://e9cc44d3cb.route.brainpod.io \
  --build-arg VITE_UMAMI_WEBSITE_ID=b4b5e428-7885-4106-92c6-02f073f8781d \
  -t registry.brainpod.io/plums-poke/nexus-trust:latest \
  --push \
  .
```

Set `BREVO_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` and `CONTACT_FROM_NAME` as
environment variables / secrets on the deployment target.

> Umami host and website id are public client-side values (they end up in
> the `<script>` tag), so they are checked in here to keep deploys
> deterministic. `.env` is only used locally (`npm run dev` / `dev:server` /
> `build`) — it is excluded from the Docker build via `.dockerignore`, so it
> has no effect on the deployed image.
