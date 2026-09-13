import { Search, Palette, Code2, Rocket, HeartHandshake, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const processSteps = [
  { 
    step: "01", 
    title: "Discover", 
    desc: "We understand your goals, audience and technical requirements through in-depth discussions.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  { 
    step: "02", 
    title: "Design", 
    desc: "Wireframes and UI that turn ideas into clear product experiences users will love.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
  },
  { 
    step: "03", 
    title: "Develop", 
    desc: "Agile sprints with clean, scalable and fully-tested code. Weekly progress updates.",
    icon: Code2,
    color: "from-gold-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  { 
    step: "04", 
    title: "Deploy", 
    desc: "Reliable launches with CI/CD, cloud hosting and comprehensive monitoring.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80"
  },
  { 
    step: "05", 
    title: "Support", 
    desc: "Ongoing maintenance, updates, performance tuning and 24/7 technical support.",
    icon: HeartHandshake,
    color: "from-rose-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80"
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.03] to-ink-950" />
      <div className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A clear path from <span className="text-gradient">idea to impact</span>
            </>
          }
          subtitle="Our proven delivery process keeps every project predictable, transparent and on schedule. No surprises, just results."
        />

        {/* Process Steps */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-gold-500/15 bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} process step`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
                  
                  {/* Step number */}
                  <span className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} font-display text-lg font-bold text-white shadow-lg`}>
                    {s.step}
                  </span>
                  
                  {/* Icon */}
                  <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900/90 backdrop-blur-sm ring-1 ring-white/10">
                    <s.icon className="h-6 w-6 text-gold-400" />
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.desc}</p>
                </div>
                
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-gold-500 to-transparent lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={300} className="mt-16 text-center">
          <p className="text-stone-400 mb-6">
            Ready to start your project? Let's discuss your requirements.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/40"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
