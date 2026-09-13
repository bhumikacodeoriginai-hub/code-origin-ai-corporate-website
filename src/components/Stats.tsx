import { useEffect, useRef, useState } from "react";
import { Award, CheckCircle, Clock, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered", icon: Rocket, color: "text-gold-400" },
  { value: 6, suffix: "", label: "Live Deployments", icon: CheckCircle, color: "text-emerald-400" },
  { value: 100, suffix: "%", label: "On-Time Delivery", icon: Clock, color: "text-gold-400" },
  { value: 5, suffix: ".0★", label: "Client Rating", icon: Award, color: "text-gold-400" },
];

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
          const duration = 1800;
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setDisplay(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
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
    <section className="relative border-y border-gold-500/10 bg-gradient-to-r from-gold-500/[0.03] via-ink-950 to-gold-500/[0.03]">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="text-center">
            <div className="group relative rounded-2xl border border-gold-500/10 bg-white/[0.02] p-6 transition duration-300 hover:border-gold-500/30 hover:bg-gold-500/[0.04]">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-400/20">
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <p className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <span className="text-gradient">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="mt-2 text-sm font-medium text-stone-400">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
