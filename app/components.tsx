import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig, supportMailto } from "./site";

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#inside", label: "Inside app" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

/* ------------------------------------------------------------------ */
/* Brand                                                               */
/* ------------------------------------------------------------------ */

export function BrandMark({ subtitle = true }: { subtitle?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="MateClip home"
    >
      <Image
        src={siteConfig.assets.appIcon}
        alt=""
        width={42}
        height={42}
        priority
        className="rounded-[11px] ring-1 ring-border-strong transition-transform duration-300 group-hover:-rotate-3"
      />
      <div className="leading-none">
        <p className="font-display text-lg font-semibold tracking-tight text-text">
          MateClip
        </p>
        {subtitle && (
          <p className="mt-1.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.26em] text-text-muted">
            Chess to clips
          </p>
        )}
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

export function SiteHeader() {
  return (
    <header className="stage-dark sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <BrandMark />
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <AppStoreButton compact />
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* App Store button                                                    */
/* ------------------------------------------------------------------ */

export function AppStoreButton({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <a
      href={siteConfig.appStoreUrl}
      className={[
        "group inline-flex items-center justify-center gap-3 rounded-xl bg-brass text-ink shadow-[0_8px_30px_-10px_rgba(201,154,63,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8aa50] hover:shadow-[0_14px_38px_-10px_rgba(201,154,63,0.75)]",
        compact ? "min-h-10 px-4 py-2" : "min-h-14 px-6 py-3",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={["grid place-items-center", compact ? "h-6 w-6" : "h-8 w-8"].join(
          " ",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={compact ? "h-5 w-5" : "h-7 w-7"}
          fill="currentColor"
        >
          <path d="M16.88 12.66c-.03-3.06 2.5-4.53 2.61-4.6-1.42-2.08-3.64-2.36-4.43-2.39-1.89-.19-3.69 1.11-4.65 1.11-.96 0-2.44-1.08-4.01-1.05-2.06.03-3.96 1.2-5.02 3.04-2.14 3.72-.55 9.23 1.54 12.25 1.02 1.47 2.24 3.13 3.84 3.07 1.54-.06 2.12-.99 3.98-.99 1.86 0 2.38.99 4.01.96 1.65-.03 2.7-1.5 3.71-2.98 1.17-1.71 1.65-3.36 1.68-3.45-.04-.02-3.22-1.24-3.26-4.97ZM13.83 3.69C14.67 2.67 15.24 1.25 15.08 0c-1.21.05-2.67.81-3.54 1.82-.78.9-1.46 2.35-1.28 3.73 1.35.1 2.73-.69 3.57-1.86Z" />
        </svg>
      </span>
      <span className="text-left leading-none">
        <span className="block whitespace-nowrap font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-ink/70">
          Download on the
        </span>
        <span
          className={[
            "mt-1 block font-display font-semibold text-ink",
            compact ? "text-sm" : "text-lg",
          ].join(" ")}
        >
          App Store
        </span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Accent display text (the one highlighted word in a headline)        */
/* ------------------------------------------------------------------ */

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-br from-[#ecc983] via-brass to-[#a9792a] bg-clip-text italic text-transparent">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Stage — light / dark "board rank" section wrapper                   */
/* ------------------------------------------------------------------ */

export function Stage({
  tone,
  id,
  className = "",
  grid = true,
  children,
}: {
  tone: "dark" | "light";
  id?: string;
  className?: string;
  grid?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={[
        tone === "dark" ? "stage-dark" : "stage-light",
        "relative overflow-hidden bg-surface text-text",
        className,
      ].join(" ")}
    >
      {grid && (
        <div
          aria-hidden="true"
          className="board-grid pointer-events-none absolute inset-0"
        />
      )}
      <div className="relative">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section label — algebraic-notation eyebrow (e.g. 01 — OPENING)      */
/* ------------------------------------------------------------------ */

export function SectionLabel({
  index,
  label,
  tone = "brass",
}: {
  index: string;
  label: string;
  tone?: "brass" | "scarlet";
}) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.28em]">
      <span className={tone === "scarlet" ? "text-scarlet" : "text-brass"}>
        {index}
      </span>
      <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
      <span className="text-text-muted">{label}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — kinetic ticker of dramatic chess moments                  */
/* ------------------------------------------------------------------ */

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee stage-dark relative overflow-hidden border-y border-border bg-surface py-5">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <li key={item} className="flex items-center whitespace-nowrap">
                <span className="px-7 font-display text-xl italic text-text sm:text-2xl">
                  {item}
                </span>
                <span aria-hidden="true" className="text-brass/70">
                  &#9822;
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent sm:w-32" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Decorative oversized chess glyph                                    */
/* ------------------------------------------------------------------ */

export function PieceGlyph({
  glyph,
  className = "",
}: {
  glyph: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-display leading-none text-text/[0.05] ${className}`}
    >
      {glyph}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  return (
    <footer className="stage-dark border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-text-muted">
            MateClip turns chess games into short-form videos for creators,
            coaches, clubs, and proud chaos merchants.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-brass">
            Links
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-text-muted">
            <Link href="/privacy" className="transition-colors hover:text-text">
              Privacy Policy
            </Link>
            <Link href="/support" className="transition-colors hover:text-text">
              Support
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text">
              Terms
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-brass">
            Contact
          </h2>
          <a
            href={supportMailto}
            className="mt-4 block text-sm font-medium text-brass transition-colors hover:text-scarlet"
          >
            {siteConfig.supportEmail}
          </a>
          <p className="mt-3 text-sm leading-6 text-text-muted">
            Send PGN, export, billing, or account questions here.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted sm:flex-row sm:px-6 lg:px-8">
          <span>&copy; {siteConfig.legalUpdated.split(", ")[1] ?? ""} MateClip</span>
          <span className="flex items-center gap-2">
            Chess games, turned cinematic
            <span aria-hidden="true" className="text-brass">
              &#9819;
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Legal page shell                                                    */
/* ------------------------------------------------------------------ */

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="stage-dark relative overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className="board-grid pointer-events-none absolute inset-0"
        />
        <section className="relative mx-auto max-w-4xl px-5 pb-20 pt-16 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-brass">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
            {description}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-text-muted/80">
            Last updated: {siteConfig.legalUpdated}
          </p>
          <div className="legal-prose mt-10 rounded-[28px] border border-border bg-surface-raised p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.7)] sm:p-9">
            {children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
