import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { appStoreIsReady, siteConfig, supportMailto } from "./site";

const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#screens", label: "Screens" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="MateClip home">
      <Image
        src={siteConfig.assets.appIcon}
        alt=""
        width={44}
        height={44}
        priority
        className="rounded-[12px] shadow-[0_0_32px_rgba(60,255,136,0.2)]"
      />
      <div className="leading-none">
        <p className="text-base font-black text-white">MateClip</p>
        <p className="mt-1 text-xs font-semibold text-[#B7C0D1]">
          Chess to clips
        </p>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A0F]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#B7C0D1] transition hover:text-white"
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
      aria-disabled={!appStoreIsReady}
      data-empty-app-store-link={!appStoreIsReady}
      className={[
        "group inline-flex items-center justify-center rounded-[18px] border border-[#3CFF88]/35 bg-white px-5 text-[#070A0F] shadow-[0_0_30px_rgba(60,255,136,0.18)] transition hover:-translate-y-0.5 hover:border-[#5EA8FF] hover:shadow-[0_0_38px_rgba(94,168,255,0.2)]",
        compact ? "min-h-11 gap-2 py-2" : "min-h-14 gap-3 py-3",
        !appStoreIsReady ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "grid place-items-center rounded-[12px] bg-[#070A0F] text-white",
          compact ? "h-7 w-7 text-sm" : "h-9 w-9 text-base",
        ].join(" ")}
      >
        MC
      </span>
      <span className="text-left leading-none">
        <span className="block text-[10px] font-bold uppercase text-[#2C3448]">
          Download on the
        </span>
        <span
          className={[
            "block font-black text-[#070A0F]",
            compact ? "text-sm" : "text-lg",
          ].join(" ")}
        >
          App Store
        </span>
      </span>
    </a>
  );
}

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#3CFF88] via-[#5EA8FF] to-[#FFD166] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070A0F]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-md text-sm leading-6 text-[#B7C0D1]">
            MateClip turns chess games into short-form videos for creators,
            coaches, clubs, and proud chaos merchants.
          </p>
          <p className="mt-4 text-xs text-[#6F7A91]">
            Replace {siteConfig.supportEmail} and the empty App Store URL before
            submitting to App Store Connect.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black text-white">Launch links</h2>
          <div className="mt-4 grid gap-3 text-sm text-[#B7C0D1]">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-white">
              Support
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black text-white">Contact</h2>
          <a
            href={supportMailto}
            className="mt-4 block text-sm font-semibold text-[#3CFF88] hover:text-[#5EA8FF]"
          >
            {siteConfig.supportEmail}
          </a>
          <p className="mt-3 text-sm leading-6 text-[#B7C0D1]">
            App Store link is intentionally blank until the listing is live.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
      <main className="bg-[#070A0F]">
        <section className="mx-auto max-w-4xl px-5 pb-16 pt-16 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-[#3CFF88]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#B7C0D1]">
            {description}
          </p>
          <p className="mt-4 text-sm text-[#6F7A91]">
            Last updated: {siteConfig.legalUpdated}
          </p>
          <div className="legal-prose mt-10 rounded-[24px] border border-white/10 bg-[#0D111A] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8">
            {children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
