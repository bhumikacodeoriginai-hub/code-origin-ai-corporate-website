import { useEffect, useRef, useState } from "react";

/**
 * A thin reading-progress bar pinned to the very top of the viewport.
 * Premium, minimal corporate touch — GPU-composited (transform: scaleX),
 * non-interactive, and layered above the fixed navbar without blocking clicks.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(el.scrollTop / max, 1) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200 shadow-[0_0_8px_rgba(212,175,55,0.5)] will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
