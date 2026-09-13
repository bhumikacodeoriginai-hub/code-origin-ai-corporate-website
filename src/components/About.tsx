import { CheckCircle2, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: Target,
    title: "Enterprise-grade delivery",
    desc: "We build real systems — AI and cloud products that solve genuine business problems.",
  },
  {
    icon: Lightbulb,
    title: "AI-first engineering",
    desc: "Every solution we ship is designed to be smarter, faster and future-ready.",
  },
  {
    icon: Users,
    title: "Code Pilot talent pipeline",
    desc: "We train and hire talented graduates through our structured internship program.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, agile process",
    desc: "Clear communication and agile sprints keep you in control at every stage.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/15">
            <img
              src="https://images.pexels.com/photos/8297442/pexels-photo-8297442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Code Origin.ai engineering team collaborating"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl lg:block">
            <img
              src="https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Developers reviewing code together"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 bottom-6 rounded-2xl border border-gold-500/20 bg-ink-900/95 px-5 py-4 shadow-xl backdrop-blur">
            <p className="font-display text-3xl font-bold text-white">
              <span className="text-gradient">10+</span>
            </p>
            <p className="text-xs font-medium text-stone-400">Projects delivered</p>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title={
              <>
                Enterprise AI & cloud, with an <span className="text-gradient">engineering-first</span> culture
              </>
            }
            subtitle="Code Origin.ai partners with startups and enterprises to design, build and scale AI and cloud-powered products — from first line of code to live deployment and beyond."
          />

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-400">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-9 flex flex-wrap items-center gap-3">
            {["AI / ML", "Cloud", "Web", "Mobile", "UI / UX"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 px-3.5 py-1.5 text-xs font-medium text-stone-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-gold-400" />
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
