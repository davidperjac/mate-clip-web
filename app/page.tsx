import Image from "next/image";
import {
  AppStoreButton,
  GradientText,
  SiteFooter,
  SiteHeader,
} from "./components";
import { siteConfig } from "./site";

const workflowSteps = [
  {
    kicker: "Input",
    title: "Paste PGN",
    body: "Drop in a game from Chess.com, Lichess, or any app that exports PGN.",
    color: "#3CFF88",
  },
  {
    kicker: "Story",
    title: "Pick the vibe",
    body: "Dramatic, funny, or coach-style pacing turns the game into a short.",
    color: "#FFD166",
  },
  {
    kicker: "Render",
    title: "Clip it",
    body: "MateClip builds the board animation, captions, SFX, and vertical edit.",
    color: "#5EA8FF",
  },
  {
    kicker: "Share",
    title: "Post everywhere",
    body: "Export a 9:16 recap for TikTok, Reels, Shorts, X, or Discord.",
    color: "#FF4D5E",
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
      <main className="overflow-hidden bg-[#070A0F]">
        <section className="relative min-h-[calc(100vh-76px)]">
          <Image
            src={siteConfig.assets.cinematicHero}
            alt=""
            fill
            priority
            loading="eager"
            className="object-cover opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#070A0F_0%,rgba(7,10,15,0.92)_32%,rgba(7,10,15,0.42)_72%,rgba(7,10,15,0.88)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_55%,rgba(60,255,136,0.13),transparent_28%),radial-gradient(circle_at_70%_45%,rgba(255,209,102,0.13),transparent_22%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#3CFF88]/30 bg-black/35 px-4 py-2 text-sm font-black text-[#D9E2EF] backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3CFF88] shadow-[0_0_18px_rgba(60,255,136,0.9)]" />
                PGN to cinematic chess short
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                Turn chess games into{" "}
                <GradientText>viral videos.</GradientText>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D0D7E5] sm:text-xl">
                MateClip finds the turning point, animates the board, writes the
                captions, adds impact sounds, and exports a vertical recap ready
                to post.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <AppStoreButton />
                <a
                  href="#sample"
                  className="inline-flex min-h-14 items-center justify-center rounded-[18px] border border-[#FFD166]/35 bg-[#121826]/85 px-6 text-base font-black text-white shadow-[0_0_28px_rgba(255,209,102,0.1)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#FFD166] hover:bg-[#1A2233]"
                >
                  Watch sample clip
                </a>
              </div>
              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
                {[
                  ["9:16", "social video"],
                  ["PGN", "game input"],
                  ["HD", "pro export"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="border-l border-[#3CFF88]/35 bg-black/20 py-2 pl-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-black text-white">{value}</p>
                    <p className="mt-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#8B95A7]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="sample" className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute inset-0 rounded-[48px] bg-[conic-gradient(from_160deg,rgba(60,255,136,0.16),rgba(94,168,255,0.18),rgba(255,209,102,0.18),rgba(255,77,94,0.12),rgba(60,255,136,0.16))] blur-xl sm:-inset-7" />
              <div className="relative mx-auto max-w-[340px] rounded-[42px] border border-white/16 bg-[#070A0F] p-3 shadow-[0_32px_100px_rgba(0,0,0,0.58)]">
                <div className="overflow-hidden rounded-[32px] border border-[#FFD166]/30 bg-black">
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
                <div className="absolute bottom-7 left-7 right-7 rounded-[18px] border border-white/12 bg-black/65 p-3 backdrop-blur-md">
                  <p className="text-sm font-black text-white">
                    One move changed everything.
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#B7C0D1]">
                    Dramatic recap, ready to share
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
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3CFF88]">
                  How it works
                </p>
                <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  The game record becomes the edit.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#B7C0D1]">
                  MateClip handles the chess-specific parts that make manual
                  editing annoying: board recreation, key-move selection,
                  captions, pacing, and export format.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {workflowSteps.map((step) => (
                  <article
                    key={step.title}
                    className="relative min-h-56 bg-[#121826] p-6"
                  >
                    <div
                      className="mb-6 h-1.5 w-20 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8B95A7]">
                      {step.kicker}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#B7C0D1]">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <Image
            src={siteConfig.assets.creatorWorkflow}
            alt=""
            fill
            className="object-cover opacity-48"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#070A0F_0%,rgba(7,10,15,0.8)_48%,rgba(7,10,15,0.96)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FFD166]">
                Built for the post
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Chess content without the timeline wrestling.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#D0D7E5]">
                The app is tuned for creator moments: a sacrifice, a comeback,
                a blunder, a mate, a ridiculous blitz ending. Paste the game and
                get the clip.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {proofChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/14 bg-black/35 px-4 py-2 text-sm font-black text-white backdrop-blur-md"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Caption style", "Short hooks that casual chess viewers understand fast."],
                ["Move focus", "Highlights, arrows, eval swings, and impact frames land on the key moment."],
                ["Creator export", "Vertical video, share pacing, watermark controls, and HD output."],
                ["Sound design", "Moves, captures, checks, and finishes get the dramatic treatment."],
              ].map(([title, body], index) => (
                <article
                  key={title}
                  className="border border-white/12 bg-[#121826]/78 p-6 backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={[
                        "h-3 w-3 rounded-full shadow-[0_0_18px_currentColor]",
                        index === 0
                          ? "text-[#3CFF88] bg-[#3CFF88]"
                          : index === 1
                            ? "text-[#FFD166] bg-[#FFD166]"
                            : index === 2
                              ? "text-[#5EA8FF] bg-[#5EA8FF]"
                              : "text-[#FF4D5E] bg-[#FF4D5E]",
                      ].join(" ")}
                    />
                    <h3 className="text-xl font-black text-white">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#B7C0D1]">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="inside"
          className="border-y border-white/10 bg-[#0D111A]"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#5EA8FF]">
                  Inside MateClip
                </p>
                <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  A tight flow from PGN to post.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#B7C0D1]">
                Every screen keeps the same job in focus: get a chess game in,
                turn the best moment into a story, and send the finished clip
                out.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {productMoments.map((shot) => (
                <article
                  key={shot.title}
                  className="group overflow-hidden border border-white/10 bg-[#121826]"
                >
                  <div className="bg-black/45 p-3">
                    <Image
                      src={shot.src}
                      alt={`${shot.title} screen`}
                      width={360}
                      height={900}
                      className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="border-t border-white/10 p-5">
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8B5CF6]">
                Pricing
              </p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Start with a watermarked clip. Upgrade for the clean cut.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#B7C0D1]">
                MateClip pricing follows the export value: watermark removal,
                HD, AI voice, premium styles, and more generation credits.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Free", "$0", "Watermarked exports", "720p videos", "Dramatic style"],
                ["Pro", "$7.99/mo", "No watermark", "1080p exports", "AI voice captions"],
                ["Creator", "$19.99/mo", "More credits", "Priority renders", "Commercial creator use"],
              ].map(([plan, price, a, b, c], index) => (
                <article
                  key={plan}
                  className={[
                    "min-h-72 border p-6",
                    index === 1
                      ? "border-[#FFD166]/45 bg-[linear-gradient(135deg,#151B2A,#1B1238)] shadow-[0_0_44px_rgba(255,209,102,0.12)]"
                      : "border-white/10 bg-[#121826]",
                  ].join(" ")}
                >
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8B95A7]">
                    {plan}
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">{price}</h3>
                  <ul className="mt-8 grid gap-4 text-sm font-semibold leading-6 text-[#D0D7E5]">
                    <li>{a}</li>
                    <li>{b}</li>
                    <li>{c}</li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0D111A]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF4D5E]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Chess clips, minus the editing spiral.
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {faqs.map((faq) => (
                <article key={faq.question} className="bg-[#121826] p-6">
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
          <div className="relative overflow-hidden border border-white/10 bg-[#121826] p-8 text-center shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-12">
            <Image
              src={siteConfig.assets.cinematicHero}
              alt=""
              fill
              className="object-cover opacity-24"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(60,255,136,0.16),transparent_28%),linear-gradient(180deg,rgba(7,10,15,0.45),#070A0F)]" />
            <div className="relative">
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
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#D0D7E5]">
                Turn the game record into the recap, then share the moment while
                the checkmate still stings.
              </p>
              <div className="mt-8">
                <AppStoreButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
