import { useState } from "react";
import { cn } from "../utils/cn";

/** Official brand lockup committed to the repo (gold + charcoal, on white). */
const LOGO_SRC = "/images/logo-latest.jpg";

type LogoProps = {
  className?: string;
  /** true when placed on a dark surface (navbar/footer) → light fallback marks + white text. */
  light?: boolean;
  /** Kept for API compatibility — the brand image already contains the wordmark. */
  showWordmark?: boolean;
};

/**
 * Code Origin.AI — official brand logo.
 *
 * Renders the real brand artwork (public/images/logo-latest.jpg). Because the
 * artwork has dark charcoal elements on a white background, it sits on a clean
 * white "chip" so it stays crisp and legible on the site's near-black surfaces.
 *
 * If the image ever fails to load, it gracefully falls back to an inline gold
 * dual-"C" monogram + wordmark so the header is never left broken/empty.
 */
export default function Logo({ className, light = true }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div className={cn("flex items-center", className)}>
        <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5">
          <img
            src={LOGO_SRC}
            alt="Code Origin.AI"
            width={971}
            height={494}
            loading="eager"
            decoding="async"
            className="h-9 w-auto sm:h-10"
            onError={() => setImgError(true)}
          />
        </span>
      </div>
    );
  }

  // ── Fallback: inline gold dual-"C" monogram + wordmark ──
  const secondary = light ? "#EAF0F8" : "#1F2937";
  const node = "#E0A93B";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="h-9 w-auto sm:h-10"
        role="img"
        aria-label="Code Origin.AI"
      >
        <defs>
          <linearGradient id="co-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C68B2C" />
            <stop offset="50%" stopColor="#F5D67A" />
            <stop offset="100%" stopColor="#C68B2C" />
          </linearGradient>
        </defs>

        {/* Gold "C" — opens to the right */}
        <path
          d="M 68.35 76.21 A 32 32 0 1 1 68.35 23.79"
          fill="none"
          stroke="url(#co-gold)"
          strokeWidth="13"
          strokeLinecap="round"
        />

        {/* Second "C" (the O) — opens to the left, echoing the circuit mark */}
        <path
          d="M 45.28 29.65 A 24 24 0 1 0 45.28 70.35"
          fill="none"
          stroke={secondary}
          strokeWidth="10.5"
          strokeLinecap="round"
        />

        {/* Circuit nodes on the second mark */}
        <circle cx="82" cy="50" r="3.4" fill={node} />
        <circle cx="74.97" cy="33.03" r="2.6" fill={node} />
        <circle cx="74.97" cy="66.97" r="2.6" fill={node} />
      </svg>

      <span
        className={cn(
          "font-display text-lg font-bold leading-none tracking-tight sm:text-xl",
          light ? "text-white" : "text-ink-900"
        )}
      >
        <span className="text-gradient">Code</span> Origin
        <span className="text-gradient">.</span>AI
      </span>
    </div>
  );
}
