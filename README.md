### Development

```bash
docker build \
  --build-arg VITE_UMAMI_HOST=https://e9cc44d3cb.route.brainpod.io \
  --build-arg VITE_UMAMI_WEBSITE_ID=b4b5e428-7885-4106-92c6-02f073f8781d \
  -t nexustrust-website:local .
```

`VITE_UMAMI_HOST` defaults to `https://cloud.umami.is`. Set it (no trailing slash) to point at your on-premise Umami instance.

```bash
docker run -p 8080:8080 nexustrust-website:local
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

> Umami host and website id are public client-side values (they end up in
> the `<script>` tag), so they are checked in here to keep deploys
> deterministic. `.env` is only used for local `npm run dev` / `npm run build`
> — it is excluded from the Docker build via `.dockerignore`, so it has no
> effect on the deployed image.