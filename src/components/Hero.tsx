import { ArrowRight, CheckCircle2, Cloud, Cpu, Sparkles, Terminal } from "lucide-react";
import { waLink } from "../data";

const codeLines = [
  { text: "// Code Origin.ai — Enterprise AI & Cloud", cls: "text-stone-500" },
  { text: "const company = {", cls: "text-stone-200" },
  { text: "  name: 'Code Origin.ai',", cls: "text-stone-300" },
  { text: "  projects: 10,", cls: "text-stone-300" },
  { text: "  deployed: 6,", cls: "text-stone-300" },
  { text: "  training: 'Code Pilot',", cls: "text-stone-300" },
  { text: "};", cls: "text-stone-200" },
  { text: "", cls: "" },
  { text: "async function ship(product) {", cls: "text-stone-200" },
  { text: "  await design(product);", cls: "text-gold-300" },
  { text: "  await build(product);", cls: "text-gold-300" },
  { text: "  return deploy(product); // 🚀", cls: "text-gold-400" },
  { text: "}", cls: "text-stone-200" },
];

const trust = [
  { icon: Cloud, label: "Enterprise AI & Cloud Solutions" },
  { icon: Cpu, label: "AWS Advanced Partner" },
];

export default function Hero() {
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
          <a
            href="#internship"
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-200 backdrop-blur transition hover:bg-gold-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-gold-300" />
            Code Pilot Internship 2026 — Applications Open
          </a>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Real Systems.
            <br />
            <span className="text-shimmer">Start Your Career.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            We provide <span className="font-semibold text-gold-300">AI and Cloud solutions</span> for
            businesses — and help students learn by working on real projects through our Code Pilot
            training & internship program.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/50"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hi Code Origin.ai! I'd like to apply for the Code Pilot internship.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Apply on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-400">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400" /> 6 live deployments
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400" /> 10 projects delivered
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400" /> 5+ internship streams
            </span>
          </div>
        </div>

        {/* Right — code window */}
        <div className="relative">
          <div className="relative rounded-2xl border border-gold-500/20 bg-ink-900/85 shadow-2xl shadow-black/60 backdrop-blur-xl glow-gold">
            <div className="flex items-center gap-2 border-b border-gold-500/10 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-medium text-stone-400">
                <Terminal className="h-3.5 w-3.5" /> codeorigin.ts
              </span>
            </div>
            <div className="space-y-1.5 px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
              {codeLines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 w-5 shrink-0 select-none text-right text-stone-600">
                    {i + 1}
                  </span>
                  <span className={line.cls}>{line.text || "\u00A0"}</span>
                </div>
              ))}
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
              <p className="text-sm font-bold text-white">Code Pilot</p>
              <p className="text-xs text-stone-400">Train & intern with us</p>
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
