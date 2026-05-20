import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreButton, LegalPage } from "../components";
import { siteConfig, supportMailto } from "../site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "MateClip support for App Store users, including PGN help, exports, billing, troubleshooting, and deletion requests.",
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="MateClip Support"
      description="Need help with PGNs, rendering, exports, billing, or deletion requests? Start here."
    >
      <h2>Contact Support</h2>
      <p>
        Email <a href={supportMailto}>{siteConfig.supportEmail}</a> with a short
        description of the issue, your app version, device model, and any render
        job details you can safely share.
      </p>

      <h2>Download</h2>
      <p>
        Download MateClip on iPhone and turn a chess PGN into a shareable
        vertical clip.
      </p>
      <p>
        <AppStoreButton />
      </p>

      <h2>PGN Help</h2>
      <p>
        PGN is the portable game notation used by chess apps and websites.
        Complete PGN paste gives MateClip the cleanest game record for
        rendering.
      </p>
      <ul>
        <li>Use a complete standard chess game, not a partial puzzle line.</li>
        <li>Copy the PGN after the game from Chess.com, Lichess, or another chess app.</li>
        <li>If validation fails, remove unsupported variant metadata and try again.</li>
        <li>For very long games, choose a shorter clip duration for the strongest pacing.</li>
      </ul>

      <h2>Rendering and Export Issues</h2>
      <ul>
        <li>If a render is stuck, leave the app open briefly and then check the clip list again.</li>
        <li>If a render fails because of a system issue, eligible credits should be refunded in the app ledger.</li>
        <li>If export or sharing fails, confirm the app has storage/photos/share permissions where needed.</li>
        <li>If a video looks wrong, include the PGN and selected vibe when contacting support.</li>
      </ul>

      <h2>Billing, Credits, and Subscriptions</h2>
      <p>
        MateClip paid features use Apple In-App Purchase and RevenueCat
        entitlement management. Users can manage or cancel App Store
        subscriptions from their Apple account settings.
      </p>
      <ul>
        <li>Free exports may include a MateClip watermark.</li>
        <li>Pro features may include no watermark, HD exports, AI voice, and more credits.</li>
        <li>Purchased credits are digital app features and are not cash or stored value.</li>
        <li>Refund requests for App Store purchases are generally handled by Apple.</li>
      </ul>

      <h2>Account or Data Deletion</h2>
      <p>
        To request deletion, email{" "}
        <a href={supportMailto}>{siteConfig.supportEmail}</a> from the address
        associated with your account when possible. Include Delete my MateClip
        data in the subject line.
      </p>

      <h2>Useful Links</h2>
      <ul>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <a href={siteConfig.appleEulaUrl}>Apple Standard EULA</a>
        </li>
      </ul>
    </LegalPage>
  );
}
