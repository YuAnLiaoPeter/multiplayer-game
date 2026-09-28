# Emoji Cinema 🎬

A live emoji movie guessing game for 2–8 people playing from their own devices. Create a room, share its five-character code, and take turns giving emoji clues.

**[Play the game](https://emoji-cinema.cinneoe.chatgpt.site)**

## How to play

1. The clue giver chooses a movie category and a private title from five options.
2. They send emoji-only clues. The first clue starts a 75-second round.
3. Other players enter a movie title. Correct guesses earn 100, 80, 60, then 40 points in order.
4. The clue giver earns 120 points if a minority guess correctly, 80 if most but not all guess, 60 if everyone guesses, or 0 if nobody guesses.
5. Everyone gives clues twice. The highest total score wins; ties are shared.

Players can leave and return from the same device using their room code and nickname. If a player disappears, the room transfers host duties or skips a blocked clue turn after the presence timeout.

## Tech stack

React, Vinext, Cloudflare Workers, and Cloudflare D1. Clients poll room state, while D1 version checks keep simultaneous writes consistent. The movie bank is curated in [`app/api/game/route.ts`](app/api/game/route.ts); no AI API key is used during gameplay.

## Local setup

Requires Node.js 22.13+ and pnpm 11.25.0.

```bash
pnpm install
pnpm build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_fast_adam_warlock.sql
pnpm start
```

Open the local URL shown by Wrangler. Apply the migration once per new local D1 database. The `.openai/hosting.json` file declares the Sites deployment binding; it contains no credentials. Local room data, dependencies, and generated builds are excluded from Git.
