import { useEffect, useRef, useState } from "react";
import { stats } from "../data";
import Reveal from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const start = performance.now();
          const duration = 1500;
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-gold-500/10 bg-gold-500/[0.03]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="text-center">
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">
              <span className="text-gradient">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
            </p>
            <p className="mt-2 text-sm font-medium text-stone-400">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
