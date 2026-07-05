# Ishara (إشارة)

A full-stack app for recording and translating Arabic Sign Language — with real dialect support (Saudi, Egyptian, Lebanese, Iraqi, Gulf), since signs aren't the same across the Arab world.

The camera captures hand movement via MediaPipe, which is either **recorded** as a reference sample or **translated** by matching it against stored samples using sequence comparison.

## How it works

1. MediaPipe tracks 21 3D hand landmarks per hand, client-side, in real time.
2. Landmarks are normalized (relative to wrist position and hand size) so distance from the camera or hand placement doesn't affect matching.
3. Frames are filtered client-side: near-duplicate frames are skipped to cut payload size, but a heartbeat guarantees a frame is still saved periodically — important for static signs (like fingerspelling) where the hand doesn't move.
4. The backend compares the incoming sequence against stored reference sequences for the selected dialect using **Dynamic Time Warping (DTW)**, with Sakoe-Chiba banding for speed and path-length normalization for fair scoring across sequences of different lengths.
5. The best match is returned with a confidence score.

## Features

- 📹 Real-time in-browser hand tracking with skeleton overlay, no server-side video processing
- 🗂️ Dialect-aware storage — the same word can have distinct variants per dialect
- 🔤 Auto Arabic-to-Latin transliteration for consistent internal word IDs
- 🔍 DTW-based sign-to-text matching, normalized for fair comparison regardless of sequence length
- 🧹 Client-side frame deduplication + heartbeat sampling, for lower bandwidth without losing static signs
- ⚡ Sakoe-Chiba banding on DTW to keep matching fast as the reference library grows
- 🚀 Single-server deployment — the backend serves the built frontend directly in production

## Tech Stack

**Frontend:** React, TypeScript, Vite, TanStack Query, React Router, Tailwind CSS, MediaPipe Tasks Vision

**Backend:** Express 5, TypeScript, Drizzle ORM, PostgreSQL, Zod, Helmet

**Infra:** Docker Compose (PostgreSQL)

## Project Structure

```
ishara/
├── client/                  # React frontend
│   └── src/components/video/
│       ├── Video.tsx        # Camera + MediaPipe hand tracking
│       ├── SignRecorder.tsx # Record new reference signs
│       └── Translate.tsx    # Live sign-to-text translation
├── server/                  # Express API
│   └── src/
│       ├── controllers/     # Recording + translation logic
│       ├── services/        # Landmark normalization + DTW matching
│       ├── routes/
│       ├── validation/      # Zod schemas
│       └── db/              # Drizzle schema + client
├── docker-compose.yml        # Local PostgreSQL
└── package.json              # Root build/start orchestration
```

## Getting Started

### Prerequisites

- Node.js 20+
- Docker (for local PostgreSQL)

### Setup

```bash
git clone <repository-url>
cd ishara
npm run build          # installs + builds client and server
docker compose up -d   # starts PostgreSQL
```

**`server/.env`**

```env
DATABASE_URL=postgres://ishara:ishara@localhost:5432/ishara
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

**`client/.env`**

```env
VITE_API_URL=http://localhost:3000
```

Run migrations:

```bash
cd server && npm run migrate && cd ..
```

### Development (two processes)

```bash
npm run dev:server   # API on http://localhost:3000
npm run dev:client   # Vite dev server on http://localhost:5173
```

### Production (single process)

```bash
npm run build
npm start
```

In production the Express server serves the built frontend directly, so only one process and port are needed.

## API Reference

**`POST /api/admin/signs/record`** — save a new reference sign

```json
{ "word": "marhaba", "arabicText": "مرحباً", "dialect": "سعودي", "landmarksJson": [...] }
```

⚠️ No authentication yet — don't expose publicly as-is.

**`POST /api/translate/sign-to-text`** — translate a captured gesture

```json
{ "dialect": "سعودي", "landmarksJson": [...] }
```

→ `{ "word": "marhaba", "arabicText": "مرحباً", "confidence": 87 }`

**`POST /api/translate/clear-cache`** — clear cached reference vectors (useful after bulk inserts)
**`GET /api/health`** — health check

## Known Limitations

- No authentication on admin routes
- Matching accuracy improves with more reference samples per dialect — currently a DTW baseline, not a trained model
- Fixed-duration capture in the translation UI, no automatic motion-based segmentation
- No rate limiting on the translation endpoint
- No automated tests

## License

ISC
