# MateClip Design System & Image-to-Code Prompts

**Product:** MateClip  
**Design goal:** A cinematic, premium, social-first iOS app that makes chess games feel dramatic and post-worthy.  
**Core visual idea:** “Chess board meets movie trailer meets creator tool.”

---

## 1. Design Principles

1. **Cinematic first.** The app should feel like it produces dramatic social videos, not like a chess database.
2. **Fast and obvious.** Every primary screen should answer: “What do I paste, what do I get, what do I tap next?”
3. **Premium dark UI.** Dark backgrounds, high contrast, subtle gradients, glowing highlights.
4. **One main action per screen.** Avoid tool complexity.
5. **Template app, not editor.** Users choose vibe/settings; they do not edit timelines.
6. **The video is the hero.** UI frames the generated clip as the product.
7. **Shareability is visible.** Use TikTok/Reels/Shorts language and vertical previews.
8. **Chess-native but not nerdy.** Use board visuals, eval swings, moves, and checkmate motifs without overwhelming casual users.

---

## 2. Brand Direction

### Brand personality

- Dramatic
- Fast
- Clever
- Slightly playful
- Creator-focused
- Premium but not corporate

### Keywords

- Cinematic
- Blitz
- Viral
- Checkmate
- Clip
- Story
- Tension
- Comeback
- Brilliant
- Chaos

### Recommended name

**MateClip**

Why:

- Short
- Chess-related
- Creator/video-related
- App Store friendly
- Easy to say
- Works as a watermark

### Alternative names

- ChessReplay
- ChessCuts
- BlunderReel
- MateStory
- PGN Studio
- CheckClip
- ChessTok

---

## 3. Color System

Use Apple-native dark mode as the base.

### Core colors

```text
Background Primary: #070A0F
Background Secondary: #0D111A
Surface Primary: #121826
Surface Secondary: #1A2233
Surface Elevated: #202A3F
Border Subtle: #2C3448
Text Primary: #F8FAFC
Text Secondary: #B7C0D1
Text Muted: #6F7A91
```

### Accent colors

```text
Mate Green: #3CFF88
Brilliant Gold: #FFD166
Blunder Red: #FF4D5E
Eval Blue: #5EA8FF
Royal Purple: #8B5CF6
Warning Orange: #FF9F1C
```

### Gradients

```text
Hero Gradient:
#070A0F → #121826 → #1B1238

Dramatic Accent Gradient:
#3CFF88 → #5EA8FF

Blunder Gradient:
#FF4D5E → #FF9F1C

Premium Gradient:
#FFD166 → #8B5CF6
```

### Usage rules

- Green = success, brilliant, generate, positive action
- Red = blunder, danger, error, dramatic alerts
- Gold = premium, brilliant move, Pro
- Blue = analysis/eval, progress, neutral system state
- Purple = AI/voice/premium templates

---

## 4. Typography

Use iOS system fonts for implementation speed and App Store polish.

### Font

- Primary: SF Pro Display / SF Pro Text via system font
- Monospace: SF Mono for PGN/move notation

### Type scale

```text
Display: 40–48 pt, bold, tight tracking
Title 1: 32 pt, bold
Title 2: 24 pt, semibold
Title 3: 20 pt, semibold
Body: 16–17 pt, regular
Body Strong: 16–17 pt, semibold
Caption: 13–14 pt, medium
Tiny: 11–12 pt, medium
Move Notation: 15–16 pt, SF Mono semibold
```

### Copy style

Use short, punchy lines:

- “Paste your game.”
- “Find the turning point.”
- “Make it cinematic.”
- “Share it everywhere.”
- “This move changed everything.”

Avoid long explanations on primary screens.

---

## 5. Spacing and Layout

### iOS spacing tokens

```text
space_2: 2
space_4: 4
space_8: 8
space_12: 12
space_16: 16
space_20: 20
space_24: 24
space_32: 32
space_40: 40
```

### Corner radii

```text
radius_sm: 8
radius_md: 14
radius_lg: 20
radius_xl: 28
radius_pill: 999
```

### Shadows

Use subtle shadows. Avoid heavy gray shadows on dark UI.

```text
Card shadow: black 25%, y=8, blur=24
Glow shadow: accent color 25%, blur=30
```

---

## 6. Component System

## 6.1 Primary Button

### Visual

- Full width
- Height: 56
- Radius: 18
- Gradient: Mate Green → Eval Blue
- Text: black or very dark navy, semibold
- Optional icon on right

### States

- Default
- Pressed: scale 0.98
- Loading: spinner + “Generating…”
- Disabled: Surface Elevated + Text Muted

### Examples

- “Create my clip”
- “Generate video”
- “Share free with watermark”
- “Upgrade to Pro”

---

## 6.2 Secondary Button

- Transparent or Surface Primary
- Border: Border Subtle
- Text Primary
- Height: 52
- Radius: 16

Examples:

- “Use sample game”
- “Paste from clipboard”
- “Remove watermark”
- “Restore purchases”

---

## 6.3 PGN Input Card

### Visual

- Surface Primary
- Border Subtle
- Radius 20
- Large text area
- SF Mono for pasted PGN
- Paste icon button
- Character/move count

### States

- Empty: helper text
- Filled: validation indicator
- Error: red border + concise error
- Valid: green status chip

### Placeholder

```text
Paste PGN here…

[Event "Live Chess"]
[White "You"]
[Black "Opponent"]
1. e4 e5 2. Nf3 ...
```

---

## 6.4 Vibe Card

Used on settings screen.

### Options

- Dramatic
- Funny
- Coach
- Minimal

### Visual

- Icon
- Title
- 1-line description
- Selected state with gradient border/glow

Example:

```text
Dramatic
Movie-trailer energy for comebacks and mates.
```

---

## 6.5 Credit Pill

Top-right component.

```text
10 generations
```

Visual:

- Small pill
- Gold icon
- Surface Elevated background
- Tap opens credit/paywall screen

---

## 6.6 Progress Timeline

On render screen.

Steps:

1. Reading PGN
2. Finding moment
3. Writing captions
4. Rendering video
5. Uploading export

Visual:

- Vertical or horizontal stepper
- Current step glows blue/green
- Completed steps green check

---

## 6.7 Video Preview Card

Hero component after generation.

- 9:16 video frame
- Rounded corners 24
- Glow behind video
- Play/pause overlay
- Export button below
- Remove watermark CTA below or overlay chip

---

## 6.8 Paywall Product Card

Each plan card includes:

- Plan name
- Price
- Credits
- Benefits
- Best value badge
- CTA

Use gold/purple accents for Pro.

---

## 7. Screen-by-Screen Design Requirements

## 7.1 Splash Screen

### Layout

- Full-screen dark gradient
- Center logo: chess knight + play triangle or board + video frame
- App name below: MateClip
- Subtle animated glow

### Copy

```text
MateClip
Chess games, turned cinematic.
```

---

## 7.2 Onboarding Hero

### Layout

- Top: vertical sample video preview mockup
- Middle: headline
- Bottom: CTA buttons

### Copy

Headline:

```text
Turn chess games into viral videos.
```

Subheadline:

```text
Paste a PGN. MateClip finds the turning point, animates the board, adds captions, and exports a clip ready to post.
```

CTA:

```text
Create my first clip
```

Secondary:

```text
Watch sample
```

---

## 7.3 Input Screen

### Layout

- Nav title: “Create Clip”
- Source segmented control: PGN / Link / Username
- PGN card
- Helper card: “How to copy PGN”
- CTA bottom fixed

### Copy

```text
Paste your game
```

```text
PGN works best. Copy it from Chess.com, Lichess, or any chess app.
```

CTA:

```text
Analyze game
```

---

## 7.4 Settings Screen

### Layout

- Game summary card
- Vibe cards
- Duration chips
- SFX selector
- Voice toggle
- Credit cost preview
- Generate CTA

### Copy

```text
Pick the vibe
```

```text
MateClip will turn the biggest moments into a 30-second vertical video.
```

---

## 7.5 Render Progress Screen

### Layout

- Animated board loader
- Large progress ring
- Current status message
- Tip text

### Copy examples

```text
Finding the turning point…
```

```text
Your clip is being rendered on our server. Keep this screen open or come back later.
```

---

## 7.6 Preview Screen

### Layout

- Full video preview card
- Title generated by AI/heuristic
- Export/share primary button
- Remove watermark secondary button
- Recent jobs or regenerate option

### Copy

```text
Your chess story is ready.
```

CTA:

```text
Share free with watermark
```

Secondary:

```text
Remove watermark
```

---

## 7.7 Paywall Screen

### Layout

- Blurred/generated clip still in background
- Header: “Make every game cinematic”
- Benefits list
- Product cards
- Restore purchases
- Legal links

### Copy

```text
Unlock Pro
```

```text
Remove the watermark, export in HD, add AI voice, and create more clips every month.
```

Benefits:

- No watermark
- HD exports
- AI voice commentary
- Premium templates
- More monthly credits

CTA:

```text
Start Pro
```

---

## 8. Video Template Design

## 8.1 MVP Template: Dramatic

### Visual style

- Dark background
- Board centered, slightly tilted or with depth shadow
- Eval bar on left or right
- Captions above/below board
- Red flash for blunders
- Gold flash for brilliant/sacrifice
- Green/blue arrows
- Final mate explosion/glow

### Video structure

1. Hook title: 2–3 seconds
2. Opening context: 3–4 seconds
3. First key move: 4 seconds
4. Turning point: 5 seconds
5. Final tactic/mate: 5–8 seconds
6. End card: 2 seconds

### Example captions

- “He thought the queen was safe…”
- “One move changed everything.”
- “The attack starts here.”
- “Black missed the threat.”
- “Checkmate was already coming.”

---

## 8.2 Funny Template Future

- Meme-style captions
- Comic zooms
- Blunder alarms
- More playful sounds
- Example: “Bro just donated the queen.”

---

## 8.3 Coach Template Future

- Cleaner board
- Lower music
- More educational captions
- Example: “The mistake: moving the defender.”

---

## 9. App Icon Direction

### Concept

A chess knight combined with a play button or vertical video frame.

### Icon requirements

- Recognizable at small sizes
- Dark premium background
- Green/blue/gold accent
- No tiny PGN text
- Avoid looking like a generic chess app

---

## 10. Image-to-Code / Design Generation Prompts

Use these prompts with image-to-code/design plugins to generate visual mockups. Keep the output as SwiftUI-friendly mobile UI.

---

### Prompt 1: App Icon

```text
Design a premium iOS app icon for an app called MateClip. The app turns chess games into cinematic short-form videos. Create a dark, modern icon with a stylized chess knight integrated with a play button or vertical video frame. Use a deep navy/black background, glowing green and blue accents, and a small gold highlight. The icon should feel cinematic, creator-focused, and high-quality. Avoid text, avoid clutter, make it readable at small sizes, use subtle 3D depth and soft glow.
```

---

### Prompt 2: Splash Screen

```text
Create a SwiftUI iPhone splash screen for MateClip, a cinematic chess video generator. Dark gradient background from near-black to deep navy with a subtle purple glow. Center a premium logo mark: chess knight inside a vertical video frame with a play triangle. Below it show “MateClip” in bold SF Pro style and the subtitle “Chess games, turned cinematic.” Add a subtle green-blue glow and minimal particle/square motifs inspired by a chessboard. Premium, modern, not childish.
```

---

### Prompt 3: Onboarding Hero Screen

```text
Create a premium SwiftUI onboarding screen for an iOS app called MateClip. The screen should show a vertical 9:16 video preview mockup at the top with an animated chess board, glowing move arrow, captions, and a small watermark. Below, large headline: “Turn chess games into viral videos.” Subheadline: “Paste a PGN. Get a cinematic recap with captions, sound effects, and highlights.” Primary gradient button: “Create my first clip.” Secondary button: “Watch sample.” Use dark navy background, glassy cards, green-blue gradient accents, gold premium highlights, and high contrast typography.
```

---

### Prompt 4: PGN Input Screen

```text
Design a SwiftUI iPhone screen for MateClip called “Create Clip.” Dark cinematic UI. Top navigation with title and a small credit pill showing “1 free export.” Add a segmented control with PGN selected and Link/Username disabled or secondary. Main card is a large PGN paste text area using monospace font with placeholder PGN lines. Include a “Paste from clipboard” mini button and a helper card saying “Copy PGN from Chess.com or Lichess after a game.” Bottom fixed gradient CTA button: “Analyze game.” Use rounded cards, subtle borders, dark surfaces, and green validation accents.
```

---

### Prompt 5: Video Settings Screen

```text
Create a SwiftUI settings screen for MateClip after a chess game is validated. Dark premium interface. At top show a game summary card: White vs Black, result, move count. Section title: “Pick the vibe.” Show selectable vibe cards: Dramatic selected, Funny, Coach. Add duration chips: 30s selected, 45s, 60s Pro. Add toggles for SFX and Sound Effects. Add AI Voice row with purple “Pro” badge. Bottom shows credit cost preview and a large gradient button “Generate video.” Use cinematic chess visuals, glowing selected borders, and clean iOS layout.
```

---

### Prompt 6: Render Progress Screen

```text
Design a SwiftUI render progress screen for MateClip. Dark cinematic background. Center an animated chessboard-style loading illustration with a glowing knight path. Large text: “Finding the turning point…” Under it show a progress ring at 62%. Below show a vertical step list: Reading PGN checked, Analyzing game checked, Building story active, Rendering video, Uploading export. Use green checks, blue active glow, rounded glass cards, and calm premium feeling. Include small note: “Most clips finish in under a minute.”
```

---

### Prompt 7: Video Preview Screen

```text
Create a SwiftUI video preview screen for MateClip. The generated vertical chess clip is the hero: a tall rounded 9:16 video card with board animation frame, dramatic caption “One move changed everything,” and small MateClip watermark. Top bar has back button and credits pill. Below video: title “Your chess story is ready.” Primary gradient button “Share free with watermark.” Secondary outline button “Remove watermark.” Add small metadata row: 31s, 720p, Dramatic. Dark navy background, subtle glow behind the video, premium creator-tool aesthetic.
```

---

### Prompt 8: Paywall Screen

```text
Design a premium iOS paywall for MateClip. Background is a blurred still from a chess video with dark overlay. Header: “Make every game cinematic.” Subheadline: “Remove the watermark, export in HD, add AI voice, and create more clips every month.” Show benefits with icons: No watermark, HD exports, AI voice commentary, Premium templates, More credits. Show two pricing cards: Pro Monthly monthly .99 with 10 generations/month, Pro Annual $49.99 Best Value. Primary gold-green gradient CTA “Start Pro.” Include Restore Purchases and Terms/Privacy links. Cinematic, high-converting, not cluttered.
```

---

### Prompt 9: Home Screen

```text
Create a SwiftUI home screen for MateClip for returning users. Dark premium dashboard. Top: greeting “Ready for your next clip?” and credits pill “18 credits.” Main large action card: “Paste a game” with glowing chessboard/video icon and CTA. Secondary card: “Import latest games” marked Coming Soon. Recent clips list with vertical thumbnails, titles, status badges, and share buttons. Bottom tab bar with Create, Clips, Account. Use cinematic dark surfaces, green-blue accents, subtle gold for Pro.
```

---

### Prompt 10: Generated Video Frame Style

```text
Design a single vertical 9:16 frame for a generated MateClip chess video. Dark cinematic background with subtle motion lines and blurred chessboard texture. Center a premium chess board with pieces, one glowing arrow from e5 to f7, source and target squares highlighted. Left side has a small eval bar. Top caption in bold white text: “This move changed everything.” Add a red/orange dramatic flash near the blunder side and a gold sparkle on the attacking move. Small watermark “MateClip” bottom-right. The frame should look like a TikTok-ready chess highlight, cinematic and high contrast.
```

---

## 11. SwiftUI Style Token Suggestions

```swift
enum MCColor {
    static let backgroundPrimary = Color(hex: "070A0F")
    static let backgroundSecondary = Color(hex: "0D111A")
    static let surfacePrimary = Color(hex: "121826")
    static let surfaceSecondary = Color(hex: "1A2233")
    static let surfaceElevated = Color(hex: "202A3F")
    static let borderSubtle = Color(hex: "2C3448")
    static let textPrimary = Color(hex: "F8FAFC")
    static let textSecondary = Color(hex: "B7C0D1")
    static let textMuted = Color(hex: "6F7A91")
    static let mateGreen = Color(hex: "3CFF88")
    static let brilliantGold = Color(hex: "FFD166")
    static let blunderRed = Color(hex: "FF4D5E")
    static let evalBlue = Color(hex: "5EA8FF")
    static let royalPurple = Color(hex: "8B5CF6")
}

enum MCRadius {
    static let sm: CGFloat = 8
    static let md: CGFloat = 14
    static let lg: CGFloat = 20
    static let xl: CGFloat = 28
}

enum MCSpacing {
    static let xs: CGFloat = 4
    static let sm: CGFloat = 8
    static let md: CGFloat = 16
    static let lg: CGFloat = 24
    static let xl: CGFloat = 32
}
```

---

## 12. Remotion Visual Style Tokens

```ts
export const theme = {
  colors: {
    bg: '#070A0F',
    surface: '#121826',
    white: '#F8FAFC',
    muted: '#B7C0D1',
    green: '#3CFF88',
    gold: '#FFD166',
    red: '#FF4D5E',
    blue: '#5EA8FF',
    purple: '#8B5CF6',
  },
  board: {
    light: '#D8E2DC',
    dark: '#395B64',
    highlight: '#3CFF88',
    danger: '#FF4D5E',
    gold: '#FFD166',
  },
  typography: {
    title: 84,
    caption: 58,
    move: 42,
    small: 28,
  },
};
```

---

## 13. UX Copy Bank

### Hero hooks

- “Turn chess games into viral videos.”
- “Your best games deserve better than a screenshot.”
- “Paste PGN. Get a cinematic recap.”
- “Make every checkmate post-worthy.”

### Loading messages

- “Reading the PGN…”
- “Finding the turning point…”
- “Checking for chaos…”
- “Writing the story…”
- “Animating the board…”
- “Adding impact sounds…”
- “Rendering your clip…”

### Error copy

- “This PGN could not be read.”
- “Try copying the full PGN from your game page.”
- “This game is too long for the current template.”
- “The render failed. Your credit was refunded.”
- “You need more credits to export this clip.”

### Paywall copy

- “Remove the watermark.”
- “Export in HD.”
- “Add AI voice commentary.”
- “Create more clips every month.”
- “Built for chess creators.”

### Empty state

- “No clips yet.”
- “Paste your first game and MateClip will turn it into a cinematic short.”

---

## 14. Accessibility Requirements

- Text must maintain strong contrast against dark backgrounds.
- Buttons must be at least 44pt height.
- Video should not autoplay with sound by default on onboarding.
- Provide mute/unmute control.
- Avoid flashing effects that are too intense.
- Captions in generated video should be large and readable.
- VoiceOver labels for buttons and controls.
- Dynamic Type support for app UI where possible.

---

## 15. Final Design Recommendation

Build the MVP with one visual direction only:

> **Dark cinematic chess trailer.**

Do not spend v1 effort on many themes. One excellent template will validate the product faster than five average templates.

The design should make users feel:

> “This made my chess game look way cooler than it actually was.”

That feeling is the product.
