# MateClip Placeholder Asset Names

Replace files in place using the exact paths below. Once a final file uses the same name, the landing page will pick it up without code changes.

## Video Assets

| Purpose | Path | Recommended format |
| --- | --- | --- |
| Hero autoplay demo | `public/assets/videos/mateclip-hero-demo.mp4` | MP4, 9:16, muted-safe, ideally under 10 MB |
| Hero demo poster | `public/assets/videos/mateclip-hero-demo-poster.jpeg` | JPEG, 9:16, 720x1280 or larger |

## Screenshot Assets

| Purpose | Path | Recommended format |
| --- | --- | --- |
| Onboarding hero screen | `public/assets/screenshots/onboarding-hero.png` | PNG, 9:16 or phone screenshot crop |
| PGN input screen | `public/assets/screenshots/pgn-input.png` | PNG, 9:16 or phone screenshot crop |
| Render progress screen | `public/assets/screenshots/render-progress.png` | PNG, 9:16 or phone screenshot crop |
| Video preview screen | `public/assets/screenshots/video-preview.png` | PNG, 9:16 or phone screenshot crop |

## Brand Assets

| Purpose | Path | Recommended format |
| --- | --- | --- |
| App icon used on site | `public/assets/brand/mateclip-app-icon.png` | PNG, square, 1024x1024 preferred |
| Open Graph image | `public/assets/brand/mateclip-og.png` | PNG or JPG, 1200x630 preferred |
| Next metadata icon | `app/icon.png` | PNG, square |
| Apple touch icon | `app/apple-icon.png` | PNG, square |

## Config Values To Replace

Edit `app/site.ts`.

- `supportEmail`: currently `support@mateclip.example`
- `appStoreUrl`: currently an empty string
- `legalUpdated`: update whenever privacy, support, or terms content changes

## App Store Connect URLs After Deploy

- Privacy Policy URL: `https://<your-domain>/privacy`
- Support URL: `https://<your-domain>/support`
- Terms or EULA URL: `https://<your-domain>/terms`
