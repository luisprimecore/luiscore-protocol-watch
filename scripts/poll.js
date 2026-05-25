#!/usr/bin/env node
/**
 * Poll LuisCore Protocol Watch — GET /api/protocol-watch on the public devnet.
 * Usage: LUISCORE_ORIGIN=https://luiscore.com node scripts/poll.js
 */
const origin = (process.env.LUISCORE_ORIGIN || 'https://luiscore.com').replace(/\/$/, '');

async function main() {
  const url = `${origin}/api/protocol-watch`;
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  console.log(`GET ${url} → ${res.status}`);
  console.log(typeof body === 'string' ? body : JSON.stringify(body, null, 2));
  if (!res.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
