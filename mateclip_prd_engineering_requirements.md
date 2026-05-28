# MateClip PRD & Engineering Requirements

**Product:** MateClip  
**Platform:** iOS app + server-side rendering backend  
**MVP goal:** Paste a PGN, generate a vertical chess video, preview it, export/share it, and monetize through credits/subscription.  
**Build style:** Codex-ready, full-stack, one-shot-oriented requirements.  
**Preferred stack:** SwiftUI iOS app, Node.js/TypeScript backend, Remotion renderer, Render hosting, Render Postgres, Render Key Value/Redis, Cloudflare R2 object storage, Clerk auth, RevenueCat monetization, OpenAI for script/caption generation, OpenAI TTS for optional voice.

---

## 1. Product Definition

MateClip turns chess games into short-form social videos.

### Core transformation

```text
PGN or game link → parsed chess timeline → key moments → storyboard → animated vertical video → export/share
```

### MVP user value

The user should be able to paste a game and receive a polished vertical chess recap without editing.

### MVP output

- 9:16 MP4 video
- 720p for free users, 1080p for paid users
- Animated chess board
- Highlighted moves
- Captions
- SFX
- Sound effects
- Watermark for free users
- Optional AI-generated title/caption text

### V1.1 output

- AI voice narration via OpenAI TTS
- Multiple video styles
- Better Stockfish-driven key moment detection
- Chess.com/Lichess import convenience

---

## 2. Non-Negotiable Product Rules

1. Do not build a full video editor.
2. Do not build a chess training platform.
3. Do not build a full engine-analysis dashboard.
4. Do not require Chess.com/Lichess OAuth for MVP.
5. Do not block the first successful free export.
6. Do not use copyrighted music.
7. Do not imitate real streamer voices unless licensed.
8. Generated output must be shareable in under 60 seconds for most jobs.
9. Every generated free video must include a tasteful MateClip watermark.
10. Server must own rendering; iOS should not render MP4s locally in MVP.

---

## 3. MVP Scope

### Required MVP features

#### iOS

- Splash screen
- Onboarding with sample clip and value proposition
- PGN paste screen
- Basic game validation result
- Video settings screen
- Render progress screen
- Video preview screen
- Export/share using native share sheet
- Paywall after free export or when attempting no-watermark/HD export
- Account screen
- Credits/subscription display
- Error states

#### Backend

- User/session identity
- PGN validation endpoint
- Render job creation endpoint
- Render job status endpoint
- Credit entitlement check
- Queue-based render worker
- PGN parser
- Key moment detector
- Storyboard generator
- Remotion video renderer
- R2/S3 upload
- Signed download URLs
- RevenueCat webhook endpoint

#### Video renderer

- One vertical composition
- One chess board theme
- One background style
- Piece move animations
- Square highlights
- Move captions
- Title card
- End card/watermark
- Sound effects
- Sound effects

### Explicitly out of MVP

- Full video editor
- Drag/drop timeline
- Custom caption editing
- Voice cloning
- Generated music for every video
- Deep personalized chess coaching
- Multi-game weekly digest
- Team/collaboration features
- Web app
- Android app
- Direct TikTok API posting

---

## 4. Recommended Stack

### iOS app

- SwiftUI
- AVKit for video preview
- PhotosUI only if later allowing local imports
- ShareLink / UIActivityViewController for export/share
- Clerk iOS SDK for authentication
- RevenueCat iOS SDK for subscriptions/consumables
- URLSession + async/await for API calls
- Sentry or equivalent for crash reporting
- PostHog/Mixpanel/Amplitude optional for analytics

### Backend API

- Node.js 22+ with TypeScript
- Fastify or Express
- Prisma ORM
- PostgreSQL on Render
- BullMQ for queueing
- Render Key Value / Redis-compatible instance for BullMQ
- Zod for request validation
- Clerk JWT verification with JWKS
- RevenueCat webhooks

### Worker / rendering service

- Node.js/TypeScript
- Remotion
- Headless Chromium dependencies
- FFmpeg
- Stockfish UCI binary
- chess.js
- Optional OpenAI SDK
- Optional OpenAI TTS SDK/API calls

### Storage

- Cloudflare R2 preferred because of low-cost object storage and no egress fees.
- AWS S3 acceptable fallback.
- Store generated videos, thumbnails, voice files, and temporary render assets.

### Deployment

- Render Web Service: API
- Render Background Worker: render worker
- Render Postgres: database
- Render Key Value: Redis/BullMQ
- Render Cron Job: cleanup expired assets
- Cloudflare R2: object storage

---

## 5. Auth Strategy

### MVP recommendation

Use two identity modes:

1. **Anonymous device session** for first free generation.
2. **Clerk authenticated user** for saving history, paid credits, and subscriptions.

### Why

The product must minimize onboarding friction. Users should be able to see value before creating an account, but monetization and abuse prevention require identity.

### Flow

1. App creates a local `device_id` UUID on first launch.
2. User can paste PGN and generate one watermarked clip with anonymous session.
3. Before download/share, the app can either:
   - allow one free watermarked export without sign-in, or
   - ask sign-in to download, depending on abuse risk.
4. If user purchases, Clerk sign-in is required.
5. Clerk user ID becomes the canonical `user_id`.
6. RevenueCat `appUserID` should map to Clerk user ID when signed in.

### Backend auth requirements

- Accept either:
  - Clerk JWT for authenticated requests
  - signed anonymous device token for first free render
- Validate Clerk JWT using Clerk JWKS.
- Never trust user-supplied credit balance from iOS.
- All credit deductions happen server-side.

---

## 6. Monetization Requirements

### Payment stack

Use RevenueCat to simplify StoreKit subscriptions, consumable credit packs, entitlement sync, and receipt validation.

Apple App Review note: for digital features/functionality inside an iOS app, use Apple In-App Purchase / StoreKit. Do not implement Stripe directly in the iOS app for premium exports unless using a legally allowed external purchase entitlement for a specific region and carefully following Apple rules.

### Products

#### Free

- 1 free export lifetime per device/user
- Watermark required
- 720p
- One template
- AI voice disabled or demo-only

#### Pro monthly

- Product ID: `pro_monthly`
- Price target: `$7.99/month`
- 10 subscription generation credits/month
- No watermark
- 1080p exports
- Standard AI voice
- Premium templates
- Priority over free jobs

#### Pro annual

- Product ID: `pro_annual`
- Price target: `$49.99/year`
- 10 subscription generation credits/month or 120 annual generation credits deposited monthly
- Same Pro features

#### Credit packs

- Product ID: `credits_10`, price `$4.99`, adds 10 non-expiring credits

### Credit costs

| Render type | Cost |
|---|---:|
| Free watermarked export | free allowance only |
| No-watermark video | 1 credit |
| No-watermark video with AI voice | 2 credits |
| Failed render due to system error | refund automatically |
| User-requested regeneration with changed settings | charge again |

### Credit ledger

All credit changes must be append-only ledger entries. Do not mutate balances without ledger records.

Ledger entry types:

- `free_grant`
- `subscription_grant`
- `purchase_grant`
- `render_debit`
- `render_refund`
- `manual_adjustment`
- `expiration` only for subscription allowance if terms explicitly allow reset; never for purchased consumable credits

### Paywall placement

- Do not hard-paywall before the user sees the first generated result.
- Best default:
  1. Let user generate one free watermarked clip.
  2. Let user preview and export/share it.
  3. Then show paywall: “Remove watermark, unlock HD, AI voice, and more exports.”
- If costs/abuse are an issue, require sign-in before free render, not payment.

---

## 7. User Flows

## 7.1 First Launch / Onboarding

### Screen 1: Hero

- Autoplay a high-quality pre-rendered sample chess clip.
- Headline: “Turn chess games into viral videos.”
- Subheadline: “Paste a PGN. Get a cinematic recap with captions, sound effects, and highlights.”
- CTA: “Create my first clip”

### Screen 2: Input

- Large text area: “Paste PGN or Chess.com/Lichess game link”
- Secondary button: “Use sample game”
- Helper: “PGN works best for MVP. You can copy it from Chess.com or Lichess after a game.”
- CTA: “Continue”

### Screen 3: Vibe

User picks:

- Dramatic
- Funny
- Coach

MVP only needs Dramatic active. Others can show “Coming soon” or be simple caption-tone variants.

### Screen 4: Settings

- Duration: 30s default
- Board perspective: Auto / White / Black
- SFX: Cinematic default
- Voice: Off in MVP; “AI voice coming soon” or enabled if implemented
- Watermark: Free users on, paid users off

### Screen 5: Generating

Progress messages:

- “Reading the PGN…”
- “Finding the turning point…”
- “Building the cinematic timeline…”
- “Animating the board…”
- “Adding captions and impact sounds…”
- “Exporting MP4…”

### Screen 6: Preview

- Video preview
- CTA: “Share free with watermark”
- Secondary: “Remove watermark” → paywall
- Metadata: title, duration, credit cost

### Screen 7: Post-export paywall

After successful free export:

- “Make unlimited chess clips”
- Show benefits:
  - No watermark
  - HD exports
  - AI voice commentary
  - Premium themes
  - More credits
- CTA: Pro monthly / annual

---

## 7.2 Returning User Flow

Home screen:

- Credits pill at top right
- Primary card: “Paste your next game”
- Recent renders list
- Template selector
- Upgrade CTA if free

User can:

1. Paste PGN/link.
2. Adjust settings.
3. Generate.
4. Preview.
5. Export/share.

---

## 7.3 Paid User Flow

Paid user sees:

- Remaining credits
- No watermark toggle off by default
- 1080p quality
- AI voice option if available
- Premium templates

If credits run out:

- Show purchase credit pack screen
- Allow subscription upgrade if on Free

---

## 8. Input Handling

### MVP input

#### PGN paste

This is the only must-have input for MVP.

Validation:

- Non-empty
- Contains PGN tags or legal move text
- Mainline can be parsed by chess.js
- Minimum 8 plies recommended
- Maximum 120 plies for MVP
- Reject unsupported variants

Error messages:

- “This PGN could not be read. Try copying the full PGN from Chess.com or Lichess.”
- “This looks like a puzzle or partial game. Paste a full game for best results.”
- “MateClip currently supports standard chess games only.”

### V1.1 input

#### Chess.com username/latest games

Use Chess.com Published Data API:

1. User enters username.
2. Backend fetches monthly archives list.
3. Backend fetches latest archive PGN/JSON.
4. App displays latest games.
5. User selects one.

Do not rely on unstable single-game scraping for MVP.

#### Chess.com game link

Implementation options:

- Best reliable option: ask user to paste PGN.
- Convenience option: parse username from archive if possible and search recent archives for matching `url` field.
- Avoid undocumented scraping endpoints.

#### Lichess game link

Use Lichess API endpoint patterns when available. For MVP, PGN paste is safer.

#### Lichess username/latest games

Use Lichess user games export endpoint to fetch recent games and allow selection.

---

## 9. Chess Analysis Requirements

### MVP key moment detection

MVP can use either:

1. Stockfish shallow analysis, preferred, or
2. Heuristic detection if Stockfish integration delays the MVP.

### Stockfish approach

For each move or selected positions:

- Generate FEN before move.
- Run Stockfish at low depth/time:
  - `depth = 10` or
  - `movetime = 100–250ms`
- Capture evaluation centipawns or mate score.
- Normalize evaluation from White perspective.
- Compute eval swing after the move.

Classification:

- `blunder`: side-to-move loses > 250cp or mate appears
- `mistake`: loses 100–250cp
- `turning_point`: absolute eval swing > 200cp
- `comeback`: player was losing by > 300cp and later becomes equal/winning
- `mate`: final move checkmates
- `sacrifice`: material loss by mover and eval improves or remains strong
- `clutch`: winning move near the end
- `chaos`: multiple large eval swings

### Heuristic fallback

Use if Stockfish unavailable:

- Prioritize checkmates
- Prioritize checks
- Prioritize captures of queen/rook
- Prioritize castling/king attacks
- Prioritize final 5 moves
- Detect comeback by result and material swings approximately

### Output of analysis

Generate a `GameAnalysis` JSON object:

```json
{
  "gameId": "uuid",
  "white": "PlayerA",
  "black": "PlayerB",
  "result": "1-0",
  "opening": "Unknown",
  "plies": 62,
  "winnerColor": "white",
  "events": [
    {
      "ply": 37,
      "moveNumber": 19,
      "san": "Nxf7!",
      "uci": "e5f7",
      "fenBefore": "...",
      "fenAfter": "...",
      "type": "sacrifice",
      "evalBeforeCp": 42,
      "evalAfterCp": 180,
      "severity": 0.82,
      "captionHint": "The knight jump starts the attack."
    }
  ],
  "summary": {
    "dominantStory": "comeback",
    "topMomentPly": 37,
    "chaosScore": 0.74,
    "recommendedDurationSec": 30
  }
}
```

---

## 10. Storyboard Generation

### Purpose

Convert chess analysis into video scenes.

### Scene types

- `intro_title`
- `board_move`
- `turning_point`
- `blunder_alert`
- `sacrifice_alert`
- `eval_swing`
- `mate_finish`
- `outro_cta`

### Storyboard JSON

```json
{
  "video": {
    "title": "This move changed everything",
    "style": "dramatic",
    "durationSec": 32,
    "orientation": "vertical",
    "fps": 30,
    "resolution": "1080x1920",
    "watermark": true
  },
  "audio": {
    "musicTrack": "none",
    "sfxPack": "classic_chess_hits",
    "voice": {
      "enabled": false,
      "provider": null,
      "voiceId": null,
      "script": null,
      "audioUrl": null
    }
  },
  "scenes": [
    {
      "id": "scene_001",
      "type": "intro_title",
      "durationSec": 3,
      "title": "He thought the queen was safe…",
      "subtitle": "until move 19."
    },
    {
      "id": "scene_002",
      "type": "board_move",
      "durationSec": 4,
      "fenBefore": "...",
      "moveUci": "e5f7",
      "san": "Nxf7!",
      "caption": "The attack begins.",
      "arrows": [{"from":"e5","to":"f7","kind":"attack"}],
      "highlights": ["e5", "f7"],
      "evalBeforeCp": 42,
      "evalAfterCp": 180,
      "sfx": ["move", "impact"]
    }
  ]
}
```

---

## 11. AI Requirements

AI is optional for MVP but recommended for better captions and future voice scripts.

### Recommended model strategy

- Use a fast, low-cost model for captions and storyboard copy.
- Keep prompts small.
- Do not send every move if not needed; send extracted events and game metadata.
- Require strict JSON output.
- Validate with Zod before rendering.

### AI task 1: Generate video title and captions

#### System prompt

```text
You are a short-form chess video producer. You turn chess game events into punchy captions for TikTok/Reels/Shorts.
You are not a chess engine. Only use the structured event data provided. Do not invent moves, players, ratings, or facts.
Write captions that are dramatic, clear, and understandable to casual chess players.
Return strict JSON only.
```

#### User prompt template

```text
Create a short-form chess video storyboard from this structured game analysis.

Requirements:
- Format: vertical short video.
- Tone: {{style}}. Options: dramatic, funny, coach.
- Target duration: {{durationSec}} seconds.
- Use 5 to 8 scenes.
- Captions must be under 48 characters each.
- Do not include profanity.
- Do not mention engine lines.
- Do not hallucinate moves or outcomes.
- Preserve SAN moves exactly.
- Return JSON matching the provided schema.

Game metadata:
{{gameMetadataJson}}

Detected events:
{{eventsJson}}

Schema:
{
  "title": string,
  "hook": string,
  "scenes": [
    {
      "eventPly": number | null,
      "type": "intro_title" | "board_move" | "turning_point" | "blunder_alert" | "sacrifice_alert" | "mate_finish" | "outro_cta",
      "caption": string,
      "subtitle": string | null,
      "emphasis": "normal" | "dramatic" | "funny" | "clutch",
      "sfx": string[]
    }
  ],
  "socialCaption": string,
  "hashtags": string[]
}
```

### AI task 2: Generate voice narration script

#### System prompt

```text
You are a chess commentator writing short narration for a 30-60 second vertical video.
The narration must match the exact storyboard and avoid inventing chess details.
Use simple language, fast pacing, and dramatic structure.
Do not imitate any real streamer or public figure.
Return strict JSON only.
```

#### User prompt template

```text
Write a narration script for this MateClip video.

Requirements:
- Length: {{durationSec}} seconds.
- Approx words: {{wordLimit}} words.
- Tone: {{style}}.
- Must align with scene order.
- No profanity.
- No real-person voice imitation.
- Do not add chess claims not present in the data.
- Return JSON only.

Storyboard:
{{storyboardJson}}

Return:
{
  "voiceTitle": string,
  "script": string,
  "sceneTimings": [
    {"sceneId": string, "line": string}
  ]
}
```

### AI output validation

- Parse JSON.
- Validate schema.
- Reject if captions too long.
- Reject if SAN moves not in original move list.
- Fallback to deterministic captions if AI fails.

---

## 12. OpenAI TTS Requirements

### MVP

AI voice can be disabled in the first shippable MVP. Build the architecture so it can be added easily.

### V1.1

Use OpenAI TTS Text-to-Speech API.

Requirements:

- Store allowed voice IDs in backend config.
- Do not expose OpenAI TTS API key to iOS.
- Generate narration from validated script only.
- Save MP3 to R2.
- Use MP3 44.1kHz 128kbps or similar output for easy Remotion mixing.
- Keep script length controlled to reduce cost.

### Suggested voices

Use generic branded voice styles, not real celebrity/streamer imitation:

- Hype Caster
- Calm Coach
- Arena Announcer
- Trailer Voice
- Friendly Explainer

### Endpoint call shape

```http
POST https://api.elevenlabs.io/v1/text-to-speech/:voice_id?output_format=mp3_44100_128
Content-Type: application/json
xi-api-key: <server_secret>
```

Request body:

```json
{
  "text": "White was completely winning... until one move changed everything.",
  "model_id": "eleven_flash_v2_5",
  "voice_settings": {
    "stability": 0.45,
    "similarity_boost": 0.75,
    "style": 0.35,
    "use_speaker_boost": true
  }
}
```

### Cost control

- Default to shorter scripts.
- Charge +1 credit for AI voice.
- Cache generated voice audio for a render job.
- Do not regenerate voice for free unless system error.

---

## 13. SFX and Sound Effects

### Rule

Do not use copyrighted music. Do not rely on TikTok sounds inside the generated MP4.

### MVP approach

Bundle or host a small pack of owned/royalty-free assets:

- `none.mp3`
- `epic_comeback_01.mp3`
- `funny_chaos_01.mp3`
- `move_wood_01.wav`
- `capture_hit_01.wav`
- `check_ping_01.wav`
- `blunder_boom_01.wav`
- `mate_impact_01.wav`

### License ledger

Create a `LICENSES_AUDIO.md` file in the repo with:

- Asset name
- Source
- License
- Commercial use allowed yes/no
- Attribution required yes/no
- Proof URL or receipt

### User settings

MVP:

- SFX mood: Cinematic only
- SFX: On/Off

V1:

- Cinematic
- Funny
- Minimal
- Coach
- No music

---

## 14. Video Rendering Requirements

### Renderer

Use Remotion server-side.

### Composition

- Composition ID: `ChessClip`
- Width: 1080 for paid, 720 for free if rendering separate sizes
- Height: 1920 or 1280 for 720p
- FPS: 30
- Codec: H.264
- Audio codec: AAC
- Pixel format: yuv420p for compatibility
- Output: MP4

### Render pipeline

1. Worker receives `render_job_id`.
2. Load job, user, settings, PGN.
3. Parse PGN.
4. Analyze game.
5. Generate storyboard.
6. Optional AI captions.
7. Optional voice audio generation.
8. Render Remotion MP4 to local temp file.
9. Upload MP4 to R2.
10. Generate thumbnail.
11. Update job status to `ready`.
12. Send push/local notification later if app not open.

### Rendering status states

- `queued`
- `parsing`
- `analyzing`
- `storyboarding`
- `generating_voice`
- `rendering`
- `uploading`
- `ready`
- `failed`
- `refunded`

### Render timeout

- Free: 2 minutes max
- Paid: 5 minutes max
- If timeout, mark failed and refund credit.

### Temp files

- Use `/tmp/mateclip/<job_id>`.
- Always cleanup after upload/failure.
- Do not persist temp files on worker disk.

### Thumbnail

Generate a JPEG thumbnail from frame around 2 seconds or the most dramatic scene.

---

## 15. Remotion Component Requirements

### Components

- `<ChessClip />`
- `<Board />`
- `<Piece />`
- `<MoveArrow />`
- `<EvalBar />`
- `<CaptionCard />`
- `<TitleCard />`
- `<EndCard />`
- `<Watermark />`
- `<ProgressFlash />`
- `<AudioTrack />`

### Board component

For reliability, implement an SVG/React board instead of depending on a browser chess widget.

Requirements:

- Render board from FEN.
- Board orientation can be white/black.
- Pieces should use SVG assets.
- Animate moving piece from source square to target square.
- Support captured piece fade out.
- Highlight source/target squares.
- Draw arrows with SVG overlay.
- Support check/mate square pulse.

### Style

MVP board should look premium:

- Dark cinematic background
- Wood or modern flat board
- Neon highlights
- Large readable captions
- Smooth motion

### Caption rules

- Max 2 lines
- Max 48 characters per caption
- Must be readable on phone
- Avoid covering key board area
- Use strong contrast with subtle shadow

### Watermark

- Free videos: bottom-right small watermark throughout video + end card.
- Paid videos: no persistent watermark, optional invisible metadata not needed.

---

## 16. Backend API Specification

Base URL: `https://api.mateclip.app`

### Auth headers

Authenticated:

```http
Authorization: Bearer <clerk_jwt>
```

Anonymous:

```http
X-Device-Id: <uuid>
X-Anonymous-Token: <signed_token>
```

### POST `/v1/pgn/validate`

Validate PGN before creating render job.

Request:

```json
{
  "pgn": "[Event ...]",
  "source": "paste"
}
```

Response:

```json
{
  "valid": true,
  "summary": {
    "white": "PlayerA",
    "black": "PlayerB",
    "result": "1-0",
    "plies": 62,
    "estimatedDurationSec": 30
  }
}
```

### POST `/v1/render-jobs`

Create a render job.

Request:

```json
{
  "inputType": "pgn",
  "pgn": "[Event ...]",
  "sourceUrl": null,
  "settings": {
    "style": "dramatic",
    "durationSec": 30,
    "orientation": "auto",
    "music": "none",
    "sfxEnabled": true,
    "voiceEnabled": false,
    "quality": "free_720p",
    "watermark": true
  }
}
```

Response:

```json
{
  "jobId": "uuid",
  "status": "queued",
  "creditCost": 0,
  "estimatedWaitSec": 45
}
```

Server behavior:

- Validate input.
- Determine credit cost.
- Check entitlement.
- Deduct credit if required.
- Create job.
- Enqueue job.

### GET `/v1/render-jobs/:jobId`

Response:

```json
{
  "jobId": "uuid",
  "status": "rendering",
  "progress": 0.72,
  "message": "Animating the board...",
  "video": null,
  "error": null
}
```

Ready response:

```json
{
  "jobId": "uuid",
  "status": "ready",
  "progress": 1,
  "message": "Ready to share.",
  "video": {
    "id": "uuid",
    "downloadUrl": "signed_url",
    "thumbnailUrl": "signed_url",
    "durationSec": 31,
    "width": 1080,
    "height": 1920,
    "watermark": true
  },
  "error": null
}
```

### GET `/v1/me/credits`

Response:

```json
{
  "userId": "clerk_user_id",
  "plan": "pro",
  "subscriptionCredits": 18,
  "purchasedCredits": 10,
  "freeExportsRemaining": 0,
  "entitlements": {
    "noWatermark": true,
    "hdExport": true,
    "aiVoice": true,
    "priorityQueue": false
  }
}
```

### POST `/v1/revenuecat/webhook`

Handle RevenueCat events.

Requirements:

- Verify webhook authorization.
- Idempotent processing by event ID.
- Update subscriptions/entitlements.
- Add credit ledger entries for purchases/subscription grants.

### POST `/v1/import/chesscom/latest-games` V1.1

Request:

```json
{"username":"hikaru", "limit":20}
```

Response:

```json
{
  "games": [
    {
      "id": "source_hash",
      "source": "chesscom",
      "url": "https://www.chess.com/game/live/...",
      "white": "...",
      "black": "...",
      "result": "1-0",
      "endTime": "2026-05-01T12:00:00Z",
      "pgnPreview": "..."
    }
  ]
}
```

### POST `/v1/import/lichess/latest-games` V1.1

Same shape as Chess.com import.

---

## 17. Database Schema

Use Prisma. Names are suggestions.

### `users`

```sql
id UUID PRIMARY KEY
clerk_user_id TEXT UNIQUE
email TEXT
display_name TEXT
created_at TIMESTAMPTZ DEFAULT now()
updated_at TIMESTAMPTZ DEFAULT now()
```

### `anonymous_devices`

```sql
id UUID PRIMARY KEY
device_id TEXT UNIQUE
free_exports_used INT DEFAULT 0
first_seen_at TIMESTAMPTZ DEFAULT now()
last_seen_at TIMESTAMPTZ DEFAULT now()
ip_hash TEXT
```

### `subscriptions`

```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
revenuecat_app_user_id TEXT
product_id TEXT
plan TEXT
status TEXT
current_period_start TIMESTAMPTZ
current_period_end TIMESTAMPTZ
created_at TIMESTAMPTZ DEFAULT now()
updated_at TIMESTAMPTZ DEFAULT now()
```

### `credit_ledger`

```sql
id UUID PRIMARY KEY
user_id UUID REFERENCES users(id)
amount INT NOT NULL
balance_type TEXT NOT NULL -- subscription | purchased | free
entry_type TEXT NOT NULL
source TEXT
source_id TEXT
render_job_id UUID NULL
metadata JSONB DEFAULT '{}'
created_at TIMESTAMPTZ DEFAULT now()
```

### `games`

```sql
id UUID PRIMARY KEY
user_id UUID NULL REFERENCES users(id)
anonymous_device_id UUID NULL REFERENCES anonymous_devices(id)
source TEXT NOT NULL -- paste | chesscom | lichess
source_url TEXT
pgn TEXT NOT NULL
white TEXT
black TEXT
result TEXT
plies INT
opening TEXT
pgn_hash TEXT UNIQUE
created_at TIMESTAMPTZ DEFAULT now()
```

### `render_jobs`

```sql
id UUID PRIMARY KEY
user_id UUID NULL REFERENCES users(id)
anonymous_device_id UUID NULL REFERENCES anonymous_devices(id)
game_id UUID REFERENCES games(id)
status TEXT NOT NULL
progress NUMERIC DEFAULT 0
message TEXT
settings JSONB NOT NULL
credit_cost INT DEFAULT 0
credit_ledger_id UUID NULL
priority INT DEFAULT 0
error_code TEXT
error_message TEXT
started_at TIMESTAMPTZ
finished_at TIMESTAMPTZ
created_at TIMESTAMPTZ DEFAULT now()
updated_at TIMESTAMPTZ DEFAULT now()
```

### `render_outputs`

```sql
id UUID PRIMARY KEY
render_job_id UUID REFERENCES render_jobs(id)
video_r2_key TEXT NOT NULL
thumbnail_r2_key TEXT
voice_audio_r2_key TEXT
width INT
height INT
duration_sec NUMERIC
file_size_bytes BIGINT
watermark BOOLEAN
created_at TIMESTAMPTZ DEFAULT now()
expires_at TIMESTAMPTZ
```

### `purchase_events`

```sql
id UUID PRIMARY KEY
provider TEXT NOT NULL -- revenuecat
provider_event_id TEXT UNIQUE NOT NULL
event_type TEXT NOT NULL
user_id UUID NULL REFERENCES users(id)
payload JSONB NOT NULL
processed_at TIMESTAMPTZ DEFAULT now()
```

### `audio_assets`

```sql
id UUID PRIMARY KEY
key TEXT UNIQUE
kind TEXT -- music | sfx
name TEXT
r2_key TEXT
license TEXT
attribution_required BOOLEAN DEFAULT false
metadata JSONB DEFAULT '{}'
created_at TIMESTAMPTZ DEFAULT now()
```

---

## 18. Queue Requirements

Use BullMQ.

### Queues

- `render_jobs`
- `voice_generation` optional if separated
- `cleanup_jobs`

### Job payload

```json
{
  "renderJobId": "uuid",
  "priority": 5
}
```

### Retry policy

- Max attempts: 2
- Backoff: exponential, 10 seconds then 30 seconds
- If final failure:
  - mark job failed
  - refund credits if debited
  - store error

### Concurrency

MVP:

- 1–2 concurrent render jobs per worker
- Scale workers horizontally later

### Priority

- Creator > Pro > Free
- Use BullMQ priority or separate queues.

---

## 19. Cost Estimate Requirements

Backend should log cost proxies per job:

- Render duration seconds
- Stockfish analysis duration seconds
- AI tokens used
- OpenAI TTS characters used
- Output file size
- Storage key
- Credit cost charged

Create a `render_costs` table later or log JSON in `render_jobs.metadata`.

### Initial monthly cost estimate at low scale

| Item | Expected MVP cost |
|---|---:|
| Render API service | $7–$25/mo |
| Render worker | $25–$85/mo |
| Render Postgres | $6–$19/mo initially |
| Render Key Value | $10–$32/mo initially |
| Cloudflare R2 | usually <$5/mo initially |
| OpenAI scripts | <$20/mo at early scale |
| OpenAI TTS | $6–$99/mo depending on volume |
| RevenueCat | may start free depending on current pricing, then scales with revenue |
| Remotion license | verify; budget $0–$100/mo initially |
| Total rough MVP | $50–$300/mo before serious scale |

### Per-video variable estimate

| Type | Estimated cost |
|---|---:|
| No voice, 30s, 720p | $0.02–$0.08 |
| Voice, 30s, 720p/1080p | $0.07–$0.20 |
| Voice, 60s, 1080p | $0.15–$0.35 |

These estimates assume programmatic rendering, not AI video generation.

---

## 20. iOS Screen Requirements

### 20.1 Splash

- App logo
- Dark gradient background
- Optional short board animation

### 20.2 Onboarding Hero

Components:

- Autoplay sample video
- Headline
- Subheadline
- CTA
- “No editing required” badge

### 20.3 Input Screen

Components:

- PGN text area
- Paste button
- Use sample button
- Source selector tabs: PGN / Link / Username, but only PGN active in MVP
- Continue button
- Validation error display

### 20.4 Settings Screen

Components:

- Vibe cards
- Duration chips
- Perspective selector
- SFX selector
- Voice toggle disabled or enabled
- Quality indicator
- Credit cost preview

### 20.5 Progress Screen

Components:

- Animated progress ring
- Status message
- Mini board/loading animation
- “This usually takes 30–60 seconds” copy
- Do not allow duplicate job creation

### 20.6 Preview Screen

Components:

- AVPlayer video preview
- Export/share button
- Remove watermark button
- Regenerate button if paid/credit available
- Download status
- Video details

### 20.7 Paywall

Components:

- Preview image/video still behind blurred overlay
- Benefits list
- Product cards
- Monthly/annual toggle
- Restore purchases
- Terms/privacy links

### 20.8 Account

Components:

- User profile
- Plan
- Credits remaining
- Purchase credits
- Render history
- Sign out
- Delete account

---

## 21. iOS Implementation Notes

### Swift models

```swift
struct RenderSettings: Codable {
    var style: String
    var durationSec: Int
    var orientation: String
    var music: String
    var sfxEnabled: Bool
    var voiceEnabled: Bool
    var quality: String
    var watermark: Bool
}

struct RenderJob: Codable, Identifiable {
    var id: String { jobId }
    let jobId: String
    let status: String
    let progress: Double
    let message: String
    let video: RenderedVideo?
    let error: RenderError?
}

struct RenderedVideo: Codable {
    let id: String
    let downloadUrl: URL
    let thumbnailUrl: URL?
    let durationSec: Double
    let width: Int
    let height: Int
    let watermark: Bool
}
```

### Polling

- Poll job status every 2 seconds while app is foregrounded.
- Stop after ready/failed.
- If app backgrounded, resume polling on foreground.

### Share

- Download file to temporary local URL.
- Use `UIActivityViewController` for sharing.
- Clean local temp file after share if needed.

### Video preview

- Use `AVPlayer`.
- Loop video preview.
- Mute toggle optional.

---

## 22. Deployment Requirements

### Render services

#### API Web Service

- Runtime: Node.js
- Build: `npm install && npm run build`
- Start: `npm run start:api`
- Env vars:
  - `DATABASE_URL`
  - `REDIS_URL`
  - `CLERK_JWKS_URL`
  - `CLERK_ISSUER`
  - `REVENUECAT_WEBHOOK_SECRET`
  - `R2_ACCOUNT_ID`
  - `R2_ACCESS_KEY_ID`
  - `R2_SECRET_ACCESS_KEY`
  - `R2_BUCKET`
  - `OPENAI_API_KEY`
  - `ELEVENLABS_API_KEY`

#### Worker Service

- Runtime: Docker recommended
- Must include:
  - Node.js
  - Chromium dependencies
  - FFmpeg
  - Stockfish
- Start: `npm run start:worker`

#### Cron Cleanup

- Daily cleanup:
  - Delete expired anonymous job videos after 7 days.
  - Delete temp failed outputs.
  - Keep paid user outputs for 30–90 days depending policy.

---

## 23. Error Handling

### User-facing errors

- PGN invalid
- Game too long
- Unsupported chess variant
- Render failed
- Voice generation failed
- Not enough credits
- Network lost
- Video unavailable/expired

### Backend behavior

- All failed paid jobs refund credits automatically if no usable video output was produced.
- If voice fails but video succeeds, fallback to caption-only video and refund the voice surcharge if charged separately.
- Store detailed internal error but show simple user message.

---

## 24. Analytics Events

Track:

- `app_opened`
- `onboarding_started`
- `sample_video_played`
- `pgn_pasted`
- `pgn_validated_success`
- `pgn_validated_failed`
- `settings_selected`
- `render_job_created`
- `render_job_ready`
- `render_job_failed`
- `video_preview_played`
- `video_exported`
- `video_shared`
- `paywall_viewed`
- `subscription_started`
- `credits_purchased`
- `watermark_removed`

Important derived metrics:

- Paste → render conversion
- Render success rate
- First export rate
- Paywall conversion after first export
- Average renders per paying user
- Variable cost per render

---

## 25. Security and Abuse Prevention

### Abuse risks

- Anonymous users creating unlimited free renders
- Users uploading huge PGNs
- Queue flooding
- Malicious PGN payloads
- Sharing signed URLs forever

### Controls

- Rate limit by IP/device/user.
- One free render per anonymous device + IP heuristic.
- Max PGN length.
- Strict PGN parsing.
- No shell execution with user input.
- Signed URLs expire.
- Validate all JSON schemas.
- Keep API keys server-side only.
- Use job timeouts.

---

## 26. Legal / Compliance Requirements

- App must not claim affiliation with Chess.com or Lichess.
- Use Chess.com/Lichess names only as import/source labels.
- Respect public API terms and rate limits.
- Use Apple IAP for digital goods/features inside iOS.
- Include Privacy Policy and Terms.
- Disclose AI-generated narration/captions if appropriate.
- Provide report/contact route for inappropriate generated content.
- Do not use copyrighted music.
- Do not imitate real creators’ voices without rights.
- Include audio license ledger.
- Allow account deletion.

---

## 27. App Store Submission Requirements

- Apple Developer account
- Bundle ID, signing, provisioning profiles
- App Store Connect app record
- Privacy policy URL
- Terms URL
- Subscription terms clearly shown
- Restore purchases button
- Demo account if login required for review
- TestFlight testing
- Accurate screenshots showing real app behavior
- App privacy labels for:
  - Contact info if collecting email
  - User content if PGNs/video history stored
  - Purchases
  - Analytics identifiers if using analytics

---

## 28. MVP Acceptance Criteria

The MVP is acceptable when:

1. A user can paste a valid PGN.
2. The backend parses the game and creates a render job.
3. The worker renders a vertical MP4.
4. The video includes board animation, captions, audio, and watermark.
5. The app previews the video.
6. The user can export/share the video.
7. The free export is tracked.
8. The paywall can be shown.
9. Paid entitlements can be read from RevenueCat.
10. Credits are deducted/refunded correctly.
11. Render failures do not permanently consume credits.
12. App is stable enough for TestFlight.

---

## 29. Future Roadmap

### V1.1

- OpenAI TTS voice narration
- OpenAI-generated narration scripts
- Chess.com username import
- Lichess link import
- 3 templates
- HD paid exports

### V1.2

- Weekly best-game auto-digest
- Creator bulk tools
- Better Stockfish analysis
- Opening/trap template
- “Funny blunder” template

### V2

- Streamer mode
- Web dashboard
- Batch render from multiple games
- Team/club accounts
- Coach exports for students
- Direct scheduling/posting integrations

---

## 30. One-Shot Codex Build Instruction

When using Codex, give it this directive:

```text
Build MateClip as a production-minded MVP. Prioritize a working end-to-end PGN-to-video pipeline over breadth.
Implement SwiftUI iOS app screens, Node/TypeScript backend, Postgres/Prisma schema, BullMQ worker, Remotion composition, PGN parsing with chess.js, basic key-moment detection, R2 upload, RevenueCat-ready entitlement stubs, and Clerk-ready auth stubs.
Do not build a full video editor. Do not implement OAuth imports first. Do not overbuild themes. The first shippable milestone is: paste PGN → create render job → render MP4 → preview in iOS → export/share → paywall after free export.
```
