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
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title={
            <>
              Projects we've <span className="text-gradient">shipped</span> & are building
            </>
          }
          subtitle="10 projects and counting — 6 live in production and 4 more actively in development for clients across industries."
        />

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition",
                active === f
                  ? "border-transparent bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-lg shadow-gold-500/25"
                  : "border-gold-500/20 bg-white/5 text-stone-300 hover:bg-gold-500/10 hover:text-gold-200"
              )}
            >
              {f}
              {f === "Deployed" && <span className="ml-1.5 text-xs opacity-80">6</span>}
              {f === "In Development" && <span className="ml-1.5 text-xs opacity-80">4</span>}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-gold-500/[0.04]">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ink-700 to-ink-900 text-2xl ring-1 ring-gold-500/20">
                    {p.emoji}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                      p.status === "Deployed"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-gold-500/15 text-gold-300"
                    )}
                  >
                    {p.status === "Deployed" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    )}
                    {p.status}
                  </span>
                </div>

                <h3 className="mt-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
                  {p.name}
                  <ArrowUpRight className="h-4 w-4 text-gold-400 opacity-0 transition group-hover:opacity-100" />
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-gold-300">{p.category}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-gold-500/15 bg-gold-500/5 px-2.5 py-1 text-xs font-medium text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
