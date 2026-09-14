import { Eye, Target, Sparkles } from "lucide-react";
import { directors, vision, mission } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.03] to-ink-950" />
      <div className="absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -left-40 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Company"
          title={
            <>
              The vision, mission & <span className="text-gradient">leadership</span> behind Code Origin.AI
            </>
          }
          subtitle="A founder-led technology company built on a clear purpose — solving real business problems with intelligent engineering, and developing the talent that powers it."
        />

        {/* ── Vision & Mission ─────────────────────────────── */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/[0.06] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-gold-500/40">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-600 to-gold-400 text-ink-950 shadow-lg shadow-gold-500/20">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-white">Our Vision</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-300">{vision}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.06] to-transparent p-8 transition duration-500 hover:-translate-y-1 hover:border-emerald-500/40">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-400 text-ink-950 shadow-lg shadow-emerald-500/20">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-white">Our Mission</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-300">{mission}</p>
            </div>
          </Reveal>
        </div>

        {/* ── Board of Directors ───────────────────────────── */}
        <Reveal className="mt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            <Sparkles className="h-3.5 w-3.5" />
            Board of Directors
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
            Meet our <span className="text-gradient">founders</span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-stone-400">
            The founding team leading Code Origin.AI across strategy, technology and growth.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directors.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 90}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold-500/20 bg-gradient-to-b from-white/[0.05] to-white/[0.01] transition duration-500 hover:-translate-y-2 hover:border-gold-500/45 hover:shadow-2xl hover:shadow-gold-500/10">
                {/* Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name} — ${d.role}, Code Origin.AI`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300 ring-1 ring-gold-500/30 backdrop-blur-sm">
                    Co-Founder
                  </span>
                </div>

                {/* Details */}
                <figcaption className="flex flex-1 flex-col p-6">
                  <h4 className="font-display text-lg font-bold text-white">{d.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-gold-400">{d.role}</p>
                  <p className="mt-3 border-t border-gold-500/10 pt-3 text-sm leading-relaxed text-stone-400">
                    {d.focus}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
