import type { CSSProperties } from "react";
import Image from "next/image";
import {
  AppStoreButton,
  GradientText,
  Marquee,
  PieceGlyph,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  Stage,
} from "./components";
import { Reveal } from "./motion";
import { siteConfig } from "./site";

const workflowSteps = [
  {
    num: "01",
    kicker: "Input",
    title: "Paste PGN",
    body: "Drop in a game from Chess.com, Lichess, or any app that exports PGN.",
    accent: "brass" as const,
  },
  {
    num: "02",
    kicker: "Story",
    title: "Pick the vibe",
    body: "Dramatic, funny, or coach-style pacing turns the game into a short.",
    accent: "brass" as const,
  },
  {
    num: "03",
    kicker: "Render",
    title: "Clip it",
    body: "MateClip builds the board animation, captions, SFX, and vertical edit.",
    accent: "brass" as const,
  },
  {
    num: "04",
    kicker: "Share",
    title: "Post everywhere",
    body: "Export a 9:16 recap for TikTok, Reels, Shorts, X, or Discord.",
    accent: "scarlet" as const,
  },
];

const productMoments = [
  {
    src: siteConfig.assets.screenshots.onboarding,
    title: "Sample-first onboarding",
    body: "The app opens with a cinematic chess clip, so the payoff is obvious before the PGN box appears.",
  },
  {
    src: siteConfig.assets.screenshots.pgnInput,
    title: "Paste without ceremony",
    body: "PGN input stays focused: game in, validation out, no chess database cosplay.",
  },
  {
    src: siteConfig.assets.screenshots.progress,
    title: "Render drama",
    body: "Progress copy follows the actual job: reading the game, finding the swing, building the story.",
  },
  {
    src: siteConfig.assets.screenshots.preview,
    title: "The clip is the product",
    body: "A vertical preview dominates the screen with export, share, and upgrade actions close by.",
  },
];

const proofChips = [
  "Queen sacrifices",
  "Blitz comebacks",
  "900 Elo chaos",
  "Opening traps",
  "Rook blunders",
  "Checkmate reels",
];

const features: [string, string][] = [
  ["Caption style", "Short hooks that casual chess viewers understand fast."],
  [
    "Move focus",
    "Highlights, arrows, eval swings, and impact frames land on the key moment.",
  ],
  [
    "Creator export",
    "Vertical video, share pacing, watermark controls, and HD output.",
  ],
  [
    "Sound design",
    "Moves, captures, checks, and finishes get the dramatic treatment.",
  ],
];

const tiers: {
  plan: string;
  price: string;
  perks: string[];
  highlight?: boolean;
}[] = [
  {
    plan: "Free",
    price: "$0",
    perks: ["Watermarked exports", "720p videos", "Dramatic style"],
  },
  {
    plan: "Pro",
    price: "$7.99/mo",
    perks: ["No watermark", "1080p exports", "AI voice captions"],
    highlight: true,
  },
  {
    plan: "Creator",
    price: "$19.99/mo",
    perks: ["More credits", "Priority renders", "Commercial creator use"],
  },
];

const faqs = [
  {
    question: "What does MateClip generate?",
    answer:
      "A vertical chess recap with board animation, captions, highlights, sound effects, watermark controls, and export-ready pacing.",
  },
  {
    question: "What do I paste?",
    answer:
      "Paste a complete standard chess PGN. MateClip reads the moves, result, players, and key game metadata from that record.",
  },
  {
    question: "Is this a chess coach?",
    answer:
      "No. MateClip is built for storytelling and sharing. It can spot dramatic moments, but the output is a social clip, not a full engine lesson.",
  },
  {
    question: "How do credits work?",
    answer:
      "Free exports include the MateClip watermark. Pro credits unlock clean exports, HD output, AI voice, and premium clip styles.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        {/* ============================================================ */}
        {/* 00 · KICKOFF — Hero                                          */}
        {/* ============================================================ */}
        <section className="stage-dark relative overflow-hidden bg-surface">
          <Image
            src={siteConfig.assets.cinematicHero}
            alt=""
            fill
            priority
            loading="eager"
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="board-check pointer-events-none absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,#161310_0%,rgba(22,19,16,0.94)_38%,rgba(22,19,16,0.55)_72%,rgba(22,19,16,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_28%_42%,rgba(201,154,63,0.16),transparent_70%)]" />
          <PieceGlyph
            glyph={"♚"}
            className="absolute -right-10 top-6 text-[22rem] sm:text-[30rem]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
            <div>
              <div
                className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-ink/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted backdrop-blur"
                style={{ "--rise-delay": "0ms" } as CSSProperties}
              >
                <span className="live-dot h-2 w-2 rounded-full bg-brass" />
                PGN to cinematic chess short
              </div>

              <h1
                className="hero-rise mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.02em] text-text sm:text-6xl lg:text-7xl"
                style={{ "--rise-delay": "90ms" } as CSSProperties}
              >
                Turn chess games into <GradientText>viral videos.</GradientText>
              </h1>

              <p
                className="hero-rise mt-7 max-w-xl text-lg leading-8 text-text-muted sm:text-xl"
                style={{ "--rise-delay": "200ms" } as CSSProperties}
              >
                MateClip finds the turning point, animates the board, writes the
                captions, adds impact sounds, and exports a vertical recap ready
                to post.
              </p>

              <div
                className="hero-rise mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
                style={{ "--rise-delay": "300ms" } as CSSProperties}
              >
                <AppStoreButton />
                <a
                  href="#sample"
                  className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border border-border-strong px-6 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-brass"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-brass/60 text-[8px] text-brass transition-colors group-hover:bg-brass group-hover:text-ink">
                    &#9654;
                  </span>
                  Watch sample clip
                </a>
              </div>

              <div
                className="hero-rise mt-12 grid max-w-xl grid-cols-3 gap-6"
                style={{ "--rise-delay": "390ms" } as CSSProperties}
              >
                {[
                  ["9:16", "social video"],
                  ["PGN", "game input"],
                  ["HD", "pro export"],
                ].map(([value, label]) => (
                  <div key={value} className="border-l-2 border-brass/50 pl-4">
                    <p className="font-display text-3xl font-semibold text-text">
                      {value}
                    </p>
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cinematic, letterboxed clip */}
            <div
              id="sample"
              className="hero-rise relative mx-auto w-full max-w-[340px]"
              style={{ "--rise-delay": "250ms" } as CSSProperties}
            >
              <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(closest-side,rgba(201,154,63,0.22),transparent)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-brass/30 bg-black shadow-[0_50px_120px_-40px_rgba(0,0,0,0.85)]">
                <div className="absolute inset-x-0 top-0 z-10 h-[6%] bg-black" />
                <div className="absolute inset-x-0 bottom-0 z-10 h-[6%] bg-black" />
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

                <div className="absolute left-4 top-[8%] z-20 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-scarlet" />
                  Rec
                </div>
                <div className="absolute right-4 top-[8%] z-20 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                  00:14
                </div>

                <div className="absolute inset-x-4 bottom-[9%] z-20 rounded-xl border border-white/12 bg-black/55 p-3 backdrop-blur-md">
                  <p className="font-display text-base font-semibold italic text-white">
                    One move changed everything.
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Dramatic recap &middot; ready to share
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kinetic ticker of dramatic chess moments */}
        <Marquee items={proofChips} />

        {/* ============================================================ */}
        {/* 01 · OPENING — How it works                                 */}
        {/* ============================================================ */}
        <Stage tone="light" id="how-it-works">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-3xl">
              <SectionLabel index="01" label="Opening" />
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.01em] text-text sm:text-5xl">
                The game record becomes the edit.
              </h2>
              <p className="mt-5 text-lg leading-8 text-text-muted">
                MateClip handles the chess-specific parts that make manual
                editing annoying: board recreation, key-move selection,
                captions, pacing, and export format.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((step, i) => (
                <Reveal
                  key={step.title}
                  as="article"
                  delay={i * 90}
                  className="group flex min-h-[15rem] flex-col rounded-2xl border border-border bg-surface-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_30px_60px_-45px_rgba(0,0,0,0.5)]"
                >
                  <span
                    className={[
                      "h-0.5 w-12 rounded-full",
                      step.accent === "scarlet" ? "bg-scarlet" : "bg-brass",
                    ].join(" ")}
                  />
                  <div className="mt-6 flex items-baseline justify-between">
                    <span className="font-display text-4xl font-semibold text-text/35">
                      {step.num}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      {step.kicker}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted">
                    {step.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Stage>

        {/* ============================================================ */}
        {/* 02 · MIDDLEGAME — Built for the post                        */}
        {/* ============================================================ */}
        <section className="stage-dark relative overflow-hidden bg-surface">
          <Image
            src={siteConfig.assets.creatorWorkflow}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="board-grid pointer-events-none absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,#161310_0%,rgba(22,19,16,0.82)_50%,rgba(22,19,16,0.97)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
            <Reveal className="relative">
              <SectionLabel index="02" label="Middlegame" />
              <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-[1.04] tracking-[-0.01em] text-text sm:text-5xl">
                Chess content without the timeline wrestling.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-text-muted">
                The app is tuned for creator moments: a sacrifice, a comeback, a
                blunder, a mate, a ridiculous blitz ending. Paste the game and
                get the clip.
              </p>
              <PieceGlyph
                glyph={"♞"}
                className="mt-10 block text-[10rem] leading-none"
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(([title, body], index) => (
                <Reveal
                  key={title}
                  as="article"
                  delay={index * 80}
                  className="rounded-2xl border border-border bg-surface-raised/75 p-6 backdrop-blur-md transition-colors duration-300 hover:border-border-strong"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={[
                        "h-2.5 w-2.5 rotate-45",
                        index === 3 ? "bg-scarlet" : "bg-brass",
                      ].join(" ")}
                    />
                    <h3 className="font-display text-xl font-semibold text-text">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-text-muted">{body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03 · TACTICS — Inside MateClip                              */}
        {/* ============================================================ */}
        <Stage tone="light" id="inside">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <SectionLabel index="03" label="Tactics" />
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.01em] text-text sm:text-5xl">
                  A tight flow from PGN to post.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-text-muted">
                Every screen keeps the same job in focus: get a chess game in,
                turn the best moment into a story, and send the finished clip
                out.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {productMoments.map((shot, i) => (
                <Reveal
                  key={shot.title}
                  as="article"
                  delay={i * 90}
                  className="group overflow-hidden rounded-2xl border border-border bg-surface-raised transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_40px_70px_-50px_rgba(0,0,0,0.55)]"
                >
                  <div className="overflow-hidden bg-ink p-3">
                    <Image
                      src={shot.src}
                      alt={`${shot.title} screen`}
                      width={360}
                      height={900}
                      className="aspect-[9/16] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="border-t border-border p-5">
                    <h3 className="font-display text-lg font-semibold text-text">
                      {shot.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {shot.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Stage>

        {/* ============================================================ */}
        {/* 04 · ENDGAME — Pricing                                       */}
        {/* ============================================================ */}
        <Stage tone="dark" id="pricing">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="04" label="Endgame" />
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.01em] text-text sm:text-5xl">
                Start with a watermarked clip. Upgrade for the clean cut.
              </h2>
              <p className="mt-5 text-lg leading-8 text-text-muted">
                MateClip pricing follows the export value: watermark removal,
                HD, AI voice, premium styles, and more generation credits.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {tiers.map((tier, i) => (
                <Reveal
                  key={tier.plan}
                  as="article"
                  delay={i * 90}
                  className={[
                    "relative flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1",
                    tier.highlight
                      ? "border-2 border-brass bg-surface-raised shadow-[0_0_70px_-25px_rgba(201,154,63,0.6)]"
                      : "border border-border bg-surface-raised/55",
                  ].join(" ")}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-7 rounded-full bg-brass px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                      Most popular
                    </span>
                  )}
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                    {tier.plan}
                  </p>
                  <p className="mt-3 font-display text-4xl font-semibold text-text">
                    {tier.price}
                  </p>
                  <ul className="mt-8 grid gap-3.5 text-sm text-text-muted">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={
                            tier.highlight ? "text-brass" : "text-text-muted"
                          }
                        >
                          &#10003;
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </Stage>

        {/* ============================================================ */}
        {/* 05 · ANALYSIS — FAQ                                          */}
        {/* ============================================================ */}
        <Stage tone="light">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="05" label="Analysis" />
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.01em] text-text sm:text-5xl">
                Chess clips, minus the editing spiral.
              </h2>
            </Reveal>

            <Reveal className="mt-12 border-t border-border">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-border py-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
                      {faq.question}
                    </h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-strong font-mono text-xl text-brass transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </Reveal>
          </div>
        </Stage>

        {/* ============================================================ */}
        {/* # · CHECKMATE — Download                                     */}
        {/* ============================================================ */}
        <section
          id="download"
          className="stage-dark relative overflow-hidden bg-surface"
        >
          <Image
            src={siteConfig.assets.cinematicHero}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="board-check pointer-events-none absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_8%,rgba(229,64,42,0.18),transparent_60%),linear-gradient(180deg,rgba(22,19,16,0.55),#161310)]" />
          <PieceGlyph
            glyph="#"
            className="absolute inset-x-0 -bottom-24 text-center text-[26rem] font-mono"
          />

          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
            <Reveal>
              <div className="flex justify-center">
                <SectionLabel index="#" label="Checkmate" tone="scarlet" />
              </div>
              <Image
                src={siteConfig.assets.appIcon}
                alt=""
                width={80}
                height={80}
                className="mx-auto mt-8 rounded-[20px] ring-1 ring-border-strong"
              />
              <h2 className="mx-auto mt-8 max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.01em] text-text sm:text-5xl">
                Your best games deserve better than a screenshot.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-text-muted">
                Turn the game record into the recap, then share the moment while
                the checkmate still stings.
              </p>
              <div className="mt-9 flex justify-center">
                <AppStoreButton />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
