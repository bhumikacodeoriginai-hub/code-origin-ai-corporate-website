import { CheckCircle2, Lightbulb, ShieldCheck, Target, Users, Award, Rocket, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Real Code Origin.AI team photo — served from public/images/companypic.jpg

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

const stats = [
  { value: "70+", label: "Projects Delivered" },
  { value: "100%", label: "On-time Delivery" },
  { value: "5.0★", label: "Client Rating" },
  { value: "20+", label: "Team Members" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.02] to-ink-950" />
      <div className="absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -left-40 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-600/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Real Team Photo */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            {/* Main team image - REAL PHOTO */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-gold-500/30 shadow-2xl shadow-gold-500/10 glow-gold">
              <img
                src="/images/companypic.jpg"
                alt="Code Origin.AI team - Our talented developers, designers and engineers at our Chitradurga office"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
              
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-gold-400" />
                  <span className="text-base font-bold text-white">Meet Our Team</span>
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm text-stone-300">
                  <MapPin className="h-4 w-4 text-gold-400" />
                  Code Origin.AI Office, Chitradurga
                </p>
              </div>

              {/* Verified badge */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4" />
                Verified Team
              </div>
            </div>

            {/* Stats floating card - left */}
            <div className="absolute -left-4 bottom-24 rounded-2xl border border-gold-500/20 bg-ink-900/95 p-5 shadow-xl backdrop-blur lg:-left-8">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-gold-400" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    <span className="text-gradient">70+</span>
                  </p>
                  <p className="text-xs font-medium text-stone-400">Projects delivered</p>
                </div>
              </div>
            </div>

            {/* Team size card - right */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-emerald-500/20 bg-ink-900/95 p-5 shadow-xl backdrop-blur lg:-right-8">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-emerald-400" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    <span className="text-emerald-400">20+</span>
                  </p>
                  <p className="text-xs font-medium text-stone-400">Team members</p>
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-gold-500/10" />
          </div>
        </Reveal>

        {/* Text content */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title={
              <>
                Enterprise AI & cloud, with an <span className="text-gradient">engineering-first</span> culture
              </>
            }
            subtitle="Code Origin.AI partners with startups and enterprises to design, build and scale AI and cloud-powered products — from first line of code to live deployment and beyond."
          />

          {/* Trust stats row */}
          <div className="mt-8 flex flex-wrap gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group flex gap-4 rounded-2xl border border-gold-500/10 bg-white/[0.02] p-4 transition duration-300 hover:border-gold-500/30 hover:bg-gold-500/[0.04]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-400/20 text-gold-300 transition group-hover:scale-110">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-400">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Service tags */}
          <Reveal delay={120} className="mt-8 flex flex-wrap items-center gap-2">
            {["AI / ML", "Cloud", "Web", "Mobile", "UI / UX", "DevOps"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2 text-xs font-medium text-stone-200 transition hover:bg-gold-500/10"
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
