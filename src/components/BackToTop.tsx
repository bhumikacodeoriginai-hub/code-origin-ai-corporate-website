import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../utils/cn";

/**
 * Floating "Back to top" control.
 *
 * Appears once the visitor has scrolled past the first screen and smoothly
 * returns them to the top. Positioned on the right, stacked above the floating
 * WhatsApp button (z-40 keeps it below the z-50 chat/AIRA widgets so their
 * expanded panels always sit on top). Fully keyboard-accessible and honours
 * prefers-reduced-motion.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 500);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "group fixed right-5 bottom-24 z-40 flex h-11 w-11 items-center justify-center rounded-full",
        "border border-gold-500/30 bg-ink-900/90 text-gold-300 shadow-lg shadow-black/40 backdrop-blur-md",
        "transition-all duration-300 btn-press",
        "hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-100 hover:shadow-gold-500/25",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
        "sm:right-7 sm:bottom-28",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
