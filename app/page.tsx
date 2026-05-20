import Image from "next/image";
import {
  AppStoreButton,
  GradientText,
  SiteFooter,
  SiteHeader,
} from "./components";
import { siteConfig } from "./site";

const steps = [
  {
    label: "Paste the PGN",
    title: "Drop in the game record.",
    body: "Copy a PGN from Chess.com, Lichess, or your favorite chess app. MateClip does the boring recreation work.",
  },
  {
    label: "Find the moment",
    title: "The big swing gets the spotlight.",
    body: "Comebacks, queen donations, sacrifices, and checkmates get turned into a clean story arc.",
  },
  {
    label: "Render the recap",
    title: "Captions, board motion, SFX.",
    body: "A vertical 9:16 clip gets built with punchy captions and social-ready pacing.",
  },
  {
    label: "Post the proof",
    title: "Share the clip everywhere.",
    body: "Export with a tasteful MateClip watermark for free, or remove it when Pro is live.",
  },
];

const creatorCards = [
  {
    title: "For creators",
    body: "Turn a daily blitz habit into Shorts, Reels, TikToks, and Discord bait without opening a timeline editor.",
    accent: "from-[#3CFF88] to-[#5EA8FF]",
  },
  {
    title: "For proud casuals",
    body: "Your opponent hung the queen and deserves cinema. MateClip makes the receipt look official.",
    accent: "from-[#FFD166] to-[#FF9F1C]",
  },
  {
    title: "For coaches and clubs",
    body: "Show student games, club highlights, and tournament moments in a format people actually watch.",
    accent: "from-[#8B5CF6] to-[#5EA8FF]",
  },
];

const chaosLines = [
  "I turned a 700 Elo game into a movie.",
  "This blunder deserved dramatic music.",
  "POV: your opponent thinks they are winning.",
  "The queen sacrifice was not optional.",
  "900 Elo chaos, edited like a trailer.",
  "One move changed everything.",
];

const screenshots = [
  {
    src: siteConfig.assets.screenshots.onboarding,
    title: "Onboarding hero",
    body: "A sample clip makes the outcome obvious before the user pastes anything.",
  },
  {
    src: siteConfig.assets.screenshots.pgnInput,
    title: "PGN input",
    body: "A simple paste-first flow keeps MateClip from becoming another chess dashboard.",
  },
  {
    src: siteConfig.assets.screenshots.progress,
    title: "Render progress",
    body: "Status copy turns waiting into a mini story: reading, finding, rendering.",
  },
  {
    src: siteConfig.assets.screenshots.preview,
    title: "Video preview",
    body: "The generated vertical video stays the hero, with export and upgrade actions below.",
  },
];

const faqs = [
  {
    question: "Is MateClip a chess coach?",
    answer:
      "No. MateClip is a content tool. It may spot big moments, but the goal is a post-worthy recap, not a full engine lesson.",
  },
  {
    question: "What can I paste at launch?",
    answer:
      "PGN is the safest MVP input. Chess.com and Lichess link import can come later, but copied PGN will be the best first path.",
  },
  {
    question: "Will free clips have a watermark?",
    answer:
      "Yes. Free exports should keep a small MateClip watermark. Pro removes the watermark and unlocks higher-quality exports.",
  },
  {
    question: "Can I use copyrighted music or streamer voices?",
    answer:
      "No. MateClip should use owned or properly licensed audio, and it should not imitate real creators or public figures without permission.",
  },
  {
    question: "Why is the App Store button not live yet?",
    answer:
      "The button is ready, but the link is intentionally empty until the App Store listing exists.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-[#070A0F]">
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(60,255,136,0.14),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(94,168,255,0.16),transparent_28%),linear-gradient(135deg,#070A0F_0%,#121826_55%,#1B1238_100%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3CFF88]/25 bg-[#121826]/80 px-4 py-2 text-sm font-bold text-[#B7C0D1]">
                <span className="h-2 w-2 rounded-full bg-[#3CFF88] shadow-[0_0_18px_rgba(60,255,136,0.8)]" />
                PGN in. TikTok-ready clip out.
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
                Turn chess games into{" "}
                <GradientText>viral videos.</GradientText>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#B7C0D1] sm:text-xl">
                Paste a PGN. MateClip finds the turning point, animates the
                board, adds captions and impact sounds, then exports a vertical
                recap ready for Shorts, Reels, TikTok, X, and Discord.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <AppStoreButton />
                <a
                  href="#screens"
                  className="inline-flex min-h-14 items-center justify-center rounded-[18px] border border-white/12 bg-[#121826] px-6 text-base font-black text-white transition hover:border-[#5EA8FF]/60 hover:bg-[#1A2233]"
                >
                  See the launch screens
                </a>
              </div>
              <div className="mt-9 hidden max-w-2xl grid-cols-3 gap-3 sm:grid">
                {[
                  ["9:16", "vertical export"],
                  ["PGN", "first input"],
                  ["1 tap", "share flow"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-[20px] border border-white/10 bg-[#0D111A]/80 p-4"
                  >
                    <p className="text-2xl font-black text-white">{value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase text-[#6F7A91]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:max-w-[500px]">
              <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-[#3CFF88]/18 blur-3xl" />
              <div className="absolute right-0 bottom-16 h-64 w-64 rounded-full bg-[#5EA8FF]/14 blur-3xl" />
              <div className="relative mx-auto max-w-[330px] rounded-[42px] border border-white/14 bg-[#0D111A] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.5)]">
                <div className="overflow-hidden rounded-[32px] border border-[#FFD166]/25 bg-black">
                  <video
                    className="aspect-[9/16] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={siteConfig.assets.heroPoster}
                    aria-label="Sample MateClip vertical chess recap"
                  >
                    <source src={siteConfig.assets.heroVideo} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                </div>
                <div className="absolute left-1/2 top-4 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                <div className="absolute bottom-7 left-7 right-7 rounded-[18px] border border-white/12 bg-black/60 p-3 backdrop-blur-md">
                  <p className="text-sm font-black text-white">
                    This move changed everything.
                  </p>
                  <p className="mt-1 text-xs text-[#B7C0D1]">
                    Watermark-ready preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-white/10 bg-[#0D111A]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-[#3CFF88]">
                How it works
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Less editing. More checkmate theater.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-white/10 bg-[#121826] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#3CFF88] to-[#5EA8FF] text-lg font-black text-[#070A0F]">
                    {index + 1}
                  </div>
                  <p className="mt-5 text-xs font-black uppercase text-[#6F7A91]">
                    {step.label}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#B7C0D1]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase text-[#FFD166]">
                Built for the post
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Chess-native, but not allergic to fun.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#B7C0D1]">
                Most chess apps tell you how wrong you were. MateClip turns the
                wrongness into content.
              </p>
            </div>
            <div className="grid gap-4">
              {creatorCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[24px] border border-white/10 bg-[#121826] p-6"
                >
                  <div
                    className={`mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r ${card.accent}`}
                  />
                  <h3 className="text-2xl font-black text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#B7C0D1]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chaosLines.map((line) => (
              <div
                key={line}
                className="rounded-[18px] border border-white/10 bg-[#0D111A] px-5 py-4 text-sm font-bold text-white"
              >
                {line}
              </div>
            ))}
          </div>
        </section>

        <section
          id="screens"
          className="border-y border-white/10 bg-[#0D111A]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase text-[#5EA8FF]">
                  Screens and placeholders
                </p>
                <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  Replace these assets when your final media is ready.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#B7C0D1]">
                The filenames are already stable. Drop in your final screenshots
                and videos under the same paths and the site updates instantly.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((shot) => (
                <article
                  key={shot.title}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-[#121826]"
                >
                  <div className="bg-black/40 p-3">
                    <Image
                      src={shot.src}
                      alt={`${shot.title} placeholder screenshot`}
                      width={360}
                      height={900}
                      className="aspect-[9/16] w-full rounded-[18px] object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black text-white">
                      {shot.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#B7C0D1]">
                      {shot.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#8B5CF6]">
                Launch offer shape
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Free first clip. Pro when they want the clean export.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#B7C0D1]">
                The product thesis is simple: let users see the rendered video,
                then charge for no watermark, HD, AI voice, and more credits.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[24px] border border-white/10 bg-[#121826] p-6">
                <p className="text-sm font-black uppercase text-[#3CFF88]">
                  Free
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">
                  First export
                </h3>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#B7C0D1]">
                  <li>Watermarked video</li>
                  <li>720p launch target</li>
                  <li>Dramatic template</li>
                  <li>Perfect for testing the magic</li>
                </ul>
              </article>
              <article className="rounded-[24px] border border-[#FFD166]/40 bg-[linear-gradient(135deg,#121826,#1B1238)] p-6 shadow-[0_0_42px_rgba(255,209,102,0.12)]">
                <p className="text-sm font-black uppercase text-[#FFD166]">
                  Pro
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">
                  Creator polish
                </h3>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#F8FAFC]">
                  <li>No watermark</li>
                  <li>1080p exports</li>
                  <li>AI voice commentary</li>
                  <li>More monthly generation credits</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0D111A]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase text-[#FF4D5E]">FAQ</p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Questions before the first clip.
            </h2>
            <div className="mt-10 grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[22px] border border-white/10 bg-[#121826] p-6"
                >
                  <h3 className="text-xl font-black text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#B7C0D1]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="download"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(60,255,136,0.16),transparent_24%),linear-gradient(135deg,#121826,#070A0F)] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-12">
            <Image
              src={siteConfig.assets.appIcon}
              alt=""
              width={76}
              height={76}
              className="mx-auto rounded-[20px]"
            />
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black text-white sm:text-5xl">
              Your best games deserve better than a screenshot.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#B7C0D1]">
              MateClip is being prepared for iOS launch. The App Store button is
              in place and ready for the live listing URL.
            </p>
            <div className="mt-8">
              <AppStoreButton />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
