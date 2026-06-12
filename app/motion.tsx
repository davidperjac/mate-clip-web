"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds before the reveal animation starts. */
  delay?: number;
  /** Element/tag to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
};

/**
 * Reveals its children with a fade-rise once they scroll into view.
 *
 * The hidden -> shown state is identical on the server and the first client
 * render (`shown` starts false), so there is no hydration mismatch. The
 * `.is-revealed` class is added only after mount. The actual animation and the
 * pre-reveal hidden state live in CSS (`[data-reveal]` in globals.css), and the
 * whole thing collapses to "instantly visible" under prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: RevealProps) {
  const Tag = as;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: skip the observer entirely. The CSS
    // `@media (prefers-reduced-motion: reduce)` rule in globals.css already
    // forces [data-reveal] elements visible, so no state update is needed.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${className} ${shown ? "is-revealed" : ""}`.trim()}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}
