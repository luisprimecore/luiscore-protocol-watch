# luiscore-protocol-watch

What this is: **public, machine-readable Protocol Watch artifacts** for LuisCore experimental recursive cognition infrastructure — the JSON Schema for protocol events, a sample JSONL stream, and a Node poll script against the live operational API at [luiscore.com](https://luiscore.com).

## Get an API key

Free LuisCore read API access (status, telemetry, ontology, agents): [https://luiscore.com/developers#signup](https://luiscore.com/developers#signup) — approval typically within 24 hours.

Live API: `GET https://luiscore.com/api/protocol-watch`

Quick start:

```bash
export LUISCORE_ORIGIN=https://luiscore.com
node scripts/poll.js
```

Files:

- `schemas/protocol-watch-event.json` — event row schema
- `examples/event-stream.jsonl` — sample stream (Experimental devnet metrics)
- `scripts/poll.js` — polls the live endpoint and prints JSON

License: MIT

This is experimental infrastructure. APIs may change without notice.
