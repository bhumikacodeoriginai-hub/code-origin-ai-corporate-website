import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ExternalLink, Loader2 } from "lucide-react";
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
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold-500/15 bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10">
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} project screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent opacity-60" />
                  
                  {/* Status badge */}
                  <span
                    className={cn(
                      "absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm",
                      p.status === "Deployed"
                        ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/30"
                    )}
                  >
                    {p.status === "Deployed" ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    )}
                    {p.status === "Deployed" ? "Live" : "Building"}
                  </span>

                  {/* Emoji badge */}
                  <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/90 text-2xl shadow-xl ring-1 ring-white/10 backdrop-blur-sm">
                    {p.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                        {p.name}
                        <ArrowUpRight className="h-4 w-4 text-gold-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-400">{p.category}</p>
                    </div>
                  </div>
                  
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">{p.description}</p>

                  {/* Tech tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-gold-500/15 bg-gold-500/5 px-2.5 py-1 text-xs font-medium text-stone-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
