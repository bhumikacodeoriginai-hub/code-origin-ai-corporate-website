import { processSteps } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A clear path from <span className="text-gradient">idea to impact</span>
            </>
          }
          subtitle="Our proven delivery process keeps every project predictable, transparent and on schedule."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80} className="h-full">
              <div className="relative h-full rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 transition duration-300 hover:border-gold-500/40">
                <span className="text-gradient font-display text-4xl font-bold">{s.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-gold-500 to-transparent lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
