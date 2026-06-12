import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./site";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mateclip.app"),
  applicationName: siteConfig.name,
  title: {
    default: "MateClip - Turn chess games into viral videos",
    template: "%s | MateClip",
  },
  description: siteConfig.description,
  keywords: [
    "MateClip",
    "chess video",
    "PGN to video",
    "chess clips",
    "chess recap",
    "chess TikTok",
    "chess shorts",
  ],
  openGraph: {
    title: "MateClip - Turn chess games into viral videos",
    description: siteConfig.description,
    type: "website",
    url: "https://mateclip.app",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1536,
        height: 1024,
        alt: "MateClip cinematic chess video app screens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MateClip - Turn chess games into viral videos",
    description: siteConfig.description,
    images: [siteConfig.assets.ogImage],
  },
  icons: {
    icon: siteConfig.assets.appIcon,
    apple: siteConfig.assets.appIcon,
  },
};

export const viewport: Viewport = {
  themeColor: "#161310",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="stage-dark min-h-full bg-surface font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}
