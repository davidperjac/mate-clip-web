import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components";
import { siteConfig, supportMailto } from "../site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MateClip privacy policy for App Store launch, including game data, generated clips, accounts, purchases, analytics, and deletion requests.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This policy explains what MateClip may collect, why it is used, and how users can request support or deletion."
    >
      <h2>1. Overview</h2>
      <p>
        MateClip turns chess games into short-form videos. To provide that
        service, the app may process chess game records, render settings,
        generated video files, account information, purchase entitlement data,
        device/session identifiers, support messages, and basic app diagnostics.
      </p>
      <p>
        This policy is written for the MateClip iOS app and this website. The
        placeholder contact email is{" "}
        <a href={supportMailto}>{siteConfig.supportEmail}</a>. Replace it before
        submitting the app to App Store Connect.
      </p>

      <h2>2. Information MateClip May Collect</h2>
      <h3>Game and generated content</h3>
      <ul>
        <li>PGN text, chess game links, player names included in the PGN, moves, results, and other game metadata users submit.</li>
        <li>Render settings such as vibe, duration, watermark, voice, captions, and quality options.</li>
        <li>Generated clips, thumbnails, captions, voice scripts, and export metadata.</li>
      </ul>

      <h3>Account and purchase information</h3>
      <ul>
        <li>Account identifiers, email address, authentication status, and anonymous device/session IDs where supported.</li>
        <li>Subscription, entitlement, receipt, and credit-balance information needed to unlock paid features.</li>
        <li>Credit ledger events such as grants, render debits, refunds, and manual support adjustments.</li>
      </ul>

      <h3>App diagnostics and support</h3>
      <ul>
        <li>Crash logs, performance events, render failures, device type, app version, and server request metadata.</li>
        <li>Messages, attachments, and contact details provided when users request support.</li>
      </ul>

      <h2>3. How Information Is Used</h2>
      <ul>
        <li>Validate PGNs and create chess timelines, captions, previews, and video exports.</li>
        <li>Store generated clips so users can preview, download, or share them.</li>
        <li>Manage subscriptions, credits, watermark removal, HD exports, and other paid features.</li>
        <li>Prevent abuse, investigate failures, improve render reliability, and respond to support requests.</li>
        <li>Understand aggregate product usage such as activation, export rate, and crash frequency.</li>
      </ul>

      <h2>4. Third-Party Processors</h2>
      <p>
        MateClip may use service providers for authentication, payments,
        entitlement management, hosting, databases, object storage, analytics,
        crash reporting, AI captions, text-to-speech, and video rendering. These
        providers are expected to protect user data under their own agreements
        and privacy commitments.
      </p>
      <p>
        Planned or possible providers include Apple, RevenueCat, Clerk, Render,
        Cloudflare R2, OpenAI or another AI provider, and analytics/crash
        reporting services. The actual App Store privacy answers should match
        the SDKs and services integrated in the app at submission time.
      </p>

      <h2>5. User Content and Sharing</h2>
      <p>
        Users choose which chess games to submit and which generated clips to
        share. If a PGN contains names, usernames, ratings, tournament details,
        or other metadata, that information may appear in a generated clip or in
        MateClip systems used to render the clip.
      </p>

      <h2>6. Retention and Deletion</h2>
      <p>
        MateClip keeps information only as long as needed for the app, legal,
        security, support, and business purposes. Generated files may be removed
        after a retention period or when storage cleanup is needed. Users may
        request deletion by contacting{" "}
        <a href={supportMailto}>{siteConfig.supportEmail}</a>.
      </p>
      <p>
        Some records may be retained where required for payment records, fraud
        prevention, dispute handling, accounting, or legal compliance.
      </p>

      <h2>7. Children</h2>
      <p>
        MateClip is not intended for children under 13. If you believe a child
        has provided personal information, contact{" "}
        <a href={supportMailto}>{siteConfig.supportEmail}</a> so the information
        can be reviewed and deleted where appropriate.
      </p>

      <h2>8. Privacy Choices</h2>
      <ul>
        <li>Users can choose not to submit a PGN or game link.</li>
        <li>Users can delete exported clips from their own devices and social accounts.</li>
        <li>Users can request account or content deletion through support.</li>
        <li>Users can manage subscriptions through Apple account settings.</li>
      </ul>

      <h2>9. Changes</h2>
      <p>
        MateClip may update this policy as the product, providers, and legal
        requirements change. The latest version will be posted on this page.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy questions or deletion requests, email{" "}
        <a href={supportMailto}>{siteConfig.supportEmail}</a>. You can also visit
        the <Link href="/support">support page</Link>.
      </p>
    </LegalPage>
  );
}
