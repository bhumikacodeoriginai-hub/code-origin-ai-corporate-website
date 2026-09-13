import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { projects, type ProjectStatus } from "../data";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const filters: ("All" | ProjectStatus)[] = ["All", "Deployed", "In Development"];

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectStatus>("All");

  const visible = projects.filter((p) => active === "All" || p.status === active);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.02] to-ink-950" />
      <div className="absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="absolute -left-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title={
            <>
              Projects we've <span className="text-gradient">shipped</span> & are building
            </>
          }
          subtitle="14+ projects and counting — 8 live in production and 6 more actively in development for clients across industries."
        />

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition",
                active === f
                  ? "border-transparent bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-lg shadow-gold-500/25"
                  : "border-gold-500/20 bg-white/5 text-stone-300 hover:bg-gold-500/10 hover:text-gold-200"
              )}
            >
              {f}
              {f === "Deployed" && <span className="ml-1.5 text-xs opacity-80">8</span>}
              {f === "In Development" && <span className="ml-1.5 text-xs opacity-80">6</span>}
            </button>
          ))}
        </Reveal>

        {/* Grid - Clean text-focused cards without images */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 60}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-gold-500/15 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/10">
                {/* Top row - Emoji + Status */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 text-2xl ring-1 ring-gold-500/20 transition-transform group-hover:scale-110">
                    {p.emoji}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                      p.status === "Deployed"
                        ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
                        : "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30"
                    )}
                  >
                    {p.status === "Deployed" ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    )}
                    {p.status === "Deployed" ? "Live" : "Building"}
                  </span>
                </div>

                {/* Project info */}
                <div className="mt-4 flex-1">
                  <h3 className="flex items-center gap-2 font-display text-base font-bold text-white group-hover:text-gold-200 transition-colors">
                    {p.name}
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold-400 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gold-500">{p.category}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-stone-400 line-clamp-3">{p.description}</p>
                </div>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-gold-500/10 pt-4">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gold-500/10 px-2 py-0.5 text-[10px] font-medium text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="rounded-md bg-gold-500/5 px-2 py-0.5 text-[10px] font-medium text-stone-500">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.06), transparent 40%)' }} />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Summary stats */}
        <Reveal delay={200} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-gold-500/10 bg-gold-500/[0.02] p-6">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="h-4 w-4 text-gold-400" />
              <span className="font-bold text-white">14+</span>
              <span className="text-stone-400">Total Projects</span>
            </div>
            <div className="h-4 w-px bg-gold-500/20" />
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="font-bold text-emerald-400">8</span>
              <span className="text-stone-400">Live in Production</span>
            </div>
            <div className="h-4 w-px bg-gold-500/20" />
            <div className="flex items-center gap-2 text-sm">
              <Loader2 className="h-4 w-4 text-amber-400 animate-spin" />
              <span className="font-bold text-amber-400">6</span>
              <span className="text-stone-400">In Development</span>
            </div>
          </div>
        </Reveal>

        {/* View more CTA */}
        <Reveal delay={250} className="mt-8 text-center">
          <p className="text-stone-400">
            Want to see more details or discuss a similar project?{" "}
            <a href="#contact" className="font-semibold text-gold-400 hover:text-gold-300 transition">
              Let's talk →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
