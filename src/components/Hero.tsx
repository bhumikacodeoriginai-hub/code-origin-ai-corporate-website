import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Cloud, Cpu, Pause, Play, Sparkles, Star } from "lucide-react";
import { bizWhatsApp, showreel } from "../data";
import { WhatsAppIcon } from "./icons";

const trust = [
  { icon: Cloud, label: "Enterprise AI & Cloud Solutions" },
  { icon: Cpu, label: "AWS-Certified Engineering Team" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />
      </div>
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.05]" />
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold-500/20 blur-[130px]" />
      <div className="absolute -left-32 top-1/3 -z-10 h-80 w-80 rounded-full bg-gold-600/20 blur-[110px]" />
      <div className="absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-400/15 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-gold-300" />
            Trusted software partner — Established 2024
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI & Cloud Products
            <br />
            That <span className="text-shimmer">Grow Your Business.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            Code Origin.ai is your end-to-end technology partner. We design, build and scale{" "}
            <span className="font-semibold text-gold-300">custom software, AI and cloud solutions</span>{" "}
            that help businesses launch faster, cut costs and win more customers.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/50"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={bizWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-wa/40 bg-wa/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-wa/20"
            >
              <WhatsAppIcon className="h-5 w-5 text-wa" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-400">
            <span className="inline-flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-1 font-semibold text-white">5.0</span> client rating
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400" /> 10+ projects delivered
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400" /> 100% on-time delivery
            </span>
          </div>
        </div>

        {/* Right — showreel video */}
        <div className="relative">
          <div className="group relative overflow-hidden rounded-2xl border border-gold-500/20 bg-ink-900/85 shadow-2xl shadow-black/60 backdrop-blur-xl glow-gold">
            <div className="flex items-center gap-2 border-b border-gold-500/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-medium text-stone-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
                </span>
                Code Origin.ai — Showreel
              </span>
            </div>

            <div className="relative aspect-video overflow-hidden">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster={showreel.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={showreel.src} type="video/mp4" />
                <source src={showreel.srcAlt} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/10" />

              {/* caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                <div>
                  <p className="font-display text-sm font-semibold text-white sm:text-base">
                    Engineering that ships.
                  </p>
                  <p className="text-xs text-stone-300">Design → Build → Deploy → Scale</p>
                </div>
              </div>

              {/* play / pause control */}
              <button
                type="button"
                onClick={toggleVideo}
                aria-label={playing ? "Pause showreel" : "Play showreel"}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 text-white backdrop-blur transition hover:bg-ink-950/80"
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
              </button>
            </div>
          </div>

          {/* floating chips */}
          <div className="absolute -left-4 top-10 hidden animate-float rounded-xl border border-gold-500/20 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
              <Cpu className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">6 Deployed</p>
              <p className="text-xs text-stone-400">Live in production</p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-3 hidden animate-float-delayed rounded-xl border border-gold-500/20 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">AI-First</p>
              <p className="text-xs text-stone-400">Future-ready builds</p>
            </div>
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-24">
        <div className="flex flex-col items-center justify-center gap-4 border-t border-gold-500/15 pt-8 sm:flex-row sm:gap-10">
          {trust.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-2.5 text-sm font-medium tracking-wide text-stone-300"
            >
              <t.icon className="h-5 w-5 text-gold-400" />
              {t.label}
            </span>
          ))}
          <span className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.25em] text-gold-500">
            ESTABLISHED 2024
          </span>
        </div>
      </div>
    </section>
  );
}
