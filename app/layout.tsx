import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./site";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#070A0F] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}
