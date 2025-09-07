# Celus Render API

Lightweight Express server intended to be deployed on Render (or similar). Exposes a single endpoint:

- POST /newsletter -> { email }

It forwards subscribers to ActiveCampaign using API v3.

Environment variables
- ACTIVECAMPAIGN_BASE_URL - e.g. https://youraccount.api-us1.com
- ACTIVECAMPAIGN_API_KEY - your API token
- ACTIVECAMPAIGN_LIST_ID - (optional) list id to add contact to

Deploy on Render as a Web Service (Node). The static site should call the service's `/newsletter` endpoint.

Security notes
- Keep API key secret in Render's environment settings.
- Add rate-limiting (Redis/Upstash) for production traffic.
- Consider double opt-in via ActiveCampaign Automations.
