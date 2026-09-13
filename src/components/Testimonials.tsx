import { Quote, Star, BadgeCheck } from "lucide-react";
import { industries, testimonials, trustSignals } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.04] to-ink-950" />
      <div className="absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Success"
          title={
            <>
              Businesses trust us to <span className="text-gradient">deliver results</span>
            </>
          }
          subtitle="We measure our success by yours. Here's what founders and product leaders say about partnering with Code Origin.ai."
        />

        {/* Trust signals */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-gold-500/15 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 lg:grid-cols-4">
            {trustSignals.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                  <span className="text-gradient">{s.value}</span>
                </p>
                <p className="mt-1.5 text-xs font-medium text-stone-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90} className="h-full">
              <figure className="group relative flex h-full flex-col rounded-3xl border border-gold-500/15 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10 sm:p-7">
                {/* Quote icon */}
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-gold-500/30" />
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
                
                {/* Quote text */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                  "{t.quote}"
                </blockquote>
                
                {/* Author info with image */}
                <figcaption className="mt-6 flex items-center gap-4 border-t border-gold-500/10 pt-5">
                  {t.image ? (
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-500/20"
                        loading="lazy"
                      />
                      <BadgeCheck className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-ink-950 text-emerald-400" />
                    </div>
                  ) : (
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-600 to-gold-400 font-display text-base font-bold text-ink-950">
                      {t.initials}
                    </span>
                  )}
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    {t.role && (
                      <p className="text-xs text-stone-500">{t.role}</p>
                    )}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Trusted across industries — marquee */}
        <Reveal className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
            Trusted across industries
          </p>
          <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
              {[...industries, ...industries].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-white/[0.03] px-5 py-2.5 text-sm font-medium tracking-wide text-stone-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
