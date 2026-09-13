import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
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

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-3xl border border-gold-500/15 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10 sm:p-7">
                {/* Header with emoji and status */}
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 text-3xl ring-1 ring-gold-500/20">
                    {p.emoji}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
                      p.status === "Deployed"
                        ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/25"
                        : "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25"
                    )}
                  >
                    {p.status === "Deployed" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    )}
                    {p.status === "Deployed" ? "Live" : "Building"}
                  </span>
                </div>

                {/* Project info */}
                <div className="mt-5 flex-1">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                    {p.name}
                    <ArrowUpRight className="h-4 w-4 text-gold-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-400">{p.category}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{p.description}</p>
                </div>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2 border-t border-gold-500/10 pt-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-gold-500/15 bg-gold-500/5 px-2.5 py-1 text-xs font-medium text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* View more CTA */}
        <Reveal delay={200} className="mt-12 text-center">
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
