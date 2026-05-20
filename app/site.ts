export const siteConfig = {
  name: "MateClip",
  tagline: "Chess games, turned cinematic.",
  headline: "Turn chess games into viral videos.",
  description:
    "Paste a PGN and MateClip turns the biggest moments into a vertical chess recap with animations, captions, sound effects, and a tasteful watermark.",
  supportEmail: "support@mateclip.example",
  appStoreUrl: "",
  legalUpdated: "May 20, 2026",
  appleEulaUrl: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  assets: {
    appIcon: "/assets/brand/mateclip-app-icon.png",
    ogImage: "/assets/brand/mateclip-og.png",
    heroVideo: "/assets/videos/mateclip-hero-demo.mp4",
    heroPoster: "/assets/videos/mateclip-hero-demo-poster.jpeg",
    screenshots: {
      onboarding: "/assets/screenshots/onboarding-hero.png",
      pgnInput: "/assets/screenshots/pgn-input.png",
      progress: "/assets/screenshots/render-progress.png",
      preview: "/assets/screenshots/video-preview.png",
    },
  },
} as const;

export const appStoreIsReady = siteConfig.appStoreUrl.length > 0;
export const supportMailto = `mailto:${siteConfig.supportEmail}`;
