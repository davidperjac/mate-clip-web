import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components";
import { siteConfig, supportMailto } from "../site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "MateClip terms, including Apple EULA, subscriptions, credits, user content, and acceptable use.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      description="These MateClip terms supplement Apple's Standard EULA for the iOS app and explain the core rules for using the service."
    >
      <h2>1. Agreement</h2>
      <p>
        By using MateClip, you agree to these terms, the{" "}
        <Link href="/privacy">Privacy Policy</Link>, and any App Store terms
        that apply to your download, subscription, or purchase.
      </p>

      <h2>2. Apple Standard EULA</h2>
      <p>
        MateClip uses Apple&apos;s Standard Licensed Application End User License
        Agreement for the iOS app. You can read Apple&apos;s Standard EULA at{" "}
        <a href={siteConfig.appleEulaUrl}>{siteConfig.appleEulaUrl}</a>.
      </p>
      <p>
        These terms add MateClip-specific rules for generated content,
        subscriptions, credits, support, and acceptable use. If there is a direct
        conflict with Apple&apos;s required App Store terms, Apple&apos;s terms
        control to the extent required.
      </p>

      <h2>3. What MateClip Does</h2>
      <p>
        MateClip turns chess games into vertical videos using PGN parsing, chess
        timeline generation, captions, board animation, sound effects, optional
        AI features, and server-side rendering. MateClip is a creator utility,
        not a chess coach, financial product, gambling product, or professional
        training service.
      </p>

      <h2>4. User Content</h2>
      <p>
        You are responsible for the PGNs, game links, names, captions, prompts,
        files, and other material you submit. You should only submit content you
        have the right to use and share.
      </p>
      <p>
        You grant MateClip the limited rights needed to process your submitted
        content, generate videos, store previews or exports, provide support,
        troubleshoot issues, and improve the service.
      </p>

      <h2>5. Generated Clips</h2>
      <p>
        MateClip is designed to help users create shareable chess videos.
        Generated clips may contain watermarks, captions, chessboard visuals,
        AI-assisted text, sound effects, and app branding. Output quality,
        timing, captions, and chess moment selection may vary.
      </p>
      <p>
        Users are responsible for where and how they post exported clips,
        including compliance with social platform rules, tournament rules,
        copyright law, publicity rights, and community guidelines.
      </p>

      <h2>6. Subscriptions, Credits, and Purchases</h2>
      <p>
        Paid features may include watermark removal, HD exports, AI voice,
        premium templates, priority queues, and generation credits. Paid iOS
        features are purchased through Apple In-App Purchase.
      </p>
      <ul>
        <li>Subscription allowances may reset based on the billing period shown in the app.</li>
        <li>Purchased credits are app features, not money, cash value, or transferable property.</li>
        <li>Failed renders caused by MateClip system errors may be eligible for credit refunds.</li>
        <li>User-requested regenerations, style changes, or new exports may require another credit.</li>
        <li>Refunds for App Store purchases are generally handled by Apple under Apple policies.</li>
      </ul>

      <h2>7. Acceptable Use</h2>
      <p>You agree not to use MateClip to:</p>
      <ul>
        <li>Upload or generate content that violates another person&apos;s rights.</li>
        <li>Use copyrighted music, audio, video, images, or voice material without permission.</li>
        <li>Imitate real streamers, celebrities, public figures, or private people without authorization.</li>
        <li>Harass, deceive, defame, threaten, or target another person.</li>
        <li>Reverse engineer, overload, scrape, or abuse MateClip systems.</li>
        <li>Bypass paywalls, credits, account limits, or watermark requirements.</li>
      </ul>

      <h2>8. AI and Chess Accuracy</h2>
      <p>
        MateClip may use AI to draft captions, titles, storyboards, or narration.
        AI output can be incomplete or wrong. Chess analysis may use heuristics
        or engines, but MateClip does not guarantee perfect move evaluation,
        training advice, or chess accuracy.
      </p>

      <h2>9. Service Availability</h2>
      <p>
        MateClip may change, pause, or discontinue features as the app evolves.
        Rendering depends on servers, queues, storage, third-party providers, and
        network access. MateClip does not guarantee uninterrupted availability.
      </p>

      <h2>10. Disclaimers and Liability</h2>
      <p>
        MateClip is provided on an as is and as available basis to the
        fullest extent allowed by law. MateClip is not responsible for indirect,
        incidental, special, consequential, or punitive damages, or for losses
        related to social posts, creator revenue, account standing, or gameplay
        decisions.
      </p>

      <h2>11. Changes</h2>
      <p>
        MateClip may update these terms as the product, pricing, providers, or
        laws change. The latest version will be posted on this page.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={supportMailto}>{siteConfig.supportEmail}</a>. You can also use
        the <Link href="/support">support page</Link>.
      </p>
    </LegalPage>
  );
}
