### Development

```bash
docker build \
  --build-arg VITE_UMAMI_HOST=https://umami.your-on-prem.example \
  --build-arg VITE_UMAMI_WEBSITE_ID=6cb5c4f9-8d5b-4884-964f-8465d390301b \
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
  --build-arg VITE_UMAMI_HOST="$VITE_UMAMI_HOST" \
  --build-arg VITE_UMAMI_WEBSITE_ID="$VITE_UMAMI_WEBSITE_ID" \
  -t registry.brainpod.io/plums-poke/nexus-trust:latest \
  --push \
  .
```