import {
  ArrowRight,
  Award,
  Briefcase,
  Clock,
  Globe2,
  Laptop,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const programs = [
  {
    title: "Full Stack Development",
    duration: "3-6 months",
    mode: "Remote / Weekend",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
    icon: Laptop,
    color: "from-blue-600/30 to-blue-400/30",
  },
  {
    title: "Generative AI & ML",
    duration: "4-6 months",
    mode: "Remote / Weekend",
    skills: ["Python", "LLMs", "LangChain", "RAG & Agents"],
    icon: Sparkles,
    color: "from-purple-600/30 to-purple-400/30",
  },
  {
    title: "Cloud & DevOps",
    duration: "3-4 months",
    mode: "Remote / Weekend",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    icon: Globe2,
    color: "from-cyan-600/30 to-cyan-400/30",
  },
  {
    title: "Data Engineering",
    duration: "3-5 months",
    mode: "Remote / Weekend",
    skills: ["Python", "SQL", "Spark", "Airflow"],
    icon: TrendingUp,
    color: "from-orange-600/30 to-orange-400/30",
  },
];

const benefits = [
  { icon: Clock, text: "Flexible weekend & evening batches" },
  { icon: Laptop, text: "100% remote learning" },
  { icon: Users, text: "Live mentorship, not recorded videos" },
  { icon: Briefcase, text: "Real project portfolio" },
  { icon: Award, text: "Industry-recognized certificate" },
  { icon: Target, text: "Career transition support" },
];

const successStories = [
  { from: "Manual Tester", to: "Automation Engineer", months: 4 },
  { from: "Support Engineer", to: "Full Stack Developer", months: 6 },
  { from: "Non-Tech Role", to: "Cloud Engineer", months: 5 },
];

export default function ForProfessionals() {
  return (
    <section id="professionals" className="relative py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-blue-500/[0.03] to-ink-950" />
      <div className="absolute inset-0 -z-10 bg-hexagon opacity-15" />
      <div className="absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Upskilling & Career Programs"
          title={
            <>
              Upskill, transition, <span className="text-gradient">get job-ready</span>
            </>
          }
          subtitle="A working professional aiming higher, a career-switcher moving into tech, or a 2020–2026 graduate still searching for that first role? We rebuild your skills around what employers actually hire for today — AI, cloud, data and modern full-stack engineering."
        />

        {/* Badge */}
        <Reveal className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200">
            <TrendingUp className="h-4 w-4" />
            Weekend & Evening Batches Available
          </span>
        </Reveal>

        {/* Callout for graduates who haven't been placed yet */}
        <Reveal className="mt-4 flex justify-center">
          <p className="max-w-2xl text-center text-sm leading-relaxed text-stone-400">
            <span className="font-semibold text-blue-300">Graduated between 2020–2026 but still not placed?</span>{" "}
            Hiring has shifted toward AI, cloud and data roles. We help you re-skill to what the market actually needs today and rebuild a job-ready project portfolio.
          </p>
        </Reveal>

        {/* Programs Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-blue-500/15 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white`}>
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 text-stone-400">
                    <Clock className="h-3 w-3" /> {p.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-stone-400">
                    <Globe2 className="h-3 w-3" /> {p.mode}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <span key={s} className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-xs text-stone-300">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={waLink(`Hi! I'm a working professional interested in the ${p.title} program. Can you share more details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Benefits + Success Stories */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Benefits */}
          <Reveal>
            <div className="h-full rounded-2xl border border-blue-500/15 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Why professionals <span className="text-blue-400">choose us</span>
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                      <b.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-stone-300">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Success Stories */}
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-emerald-500/15 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Career <span className="text-emerald-400">transitions</span>
              </h3>
              <p className="mt-2 text-sm text-stone-400">Real stories from professionals who upskilled with us:</p>
              <div className="mt-6 space-y-4">
                {successStories.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-stone-400">{s.from}</span>
                        <ArrowRight className="h-4 w-4 text-emerald-400" />
                        <span className="font-semibold text-emerald-300">{s.to}</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                      {s.months} months
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* How it works */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-blue-500/15 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-center font-display text-xl font-bold text-white">
              How it <span className="text-blue-400">works</span>
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-4">
              {[
                { step: "01", title: "Consultation", desc: "Free call to understand your goals and current skills" },
                { step: "02", title: "Custom Plan", desc: "We create a learning path tailored to your target role" },
                { step: "03", title: "Learn & Build", desc: "Weekend sessions + real projects with mentor guidance" },
                { step: "04", title: "Career Support", desc: "Resume help, mock interviews, and job referrals" },
              ].map((item, i) => (
                <div key={item.step} className="text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/30 to-blue-400/30 font-display text-lg font-bold text-blue-300">
                    {item.step}
                  </span>
                  <h4 className="mt-4 font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-stone-400">{item.desc}</p>
                  {i < 3 && (
                    <ArrowRight className="mx-auto mt-4 hidden h-5 w-5 text-blue-500/40 sm:block lg:rotate-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/25 bg-gradient-to-r from-blue-600/20 via-blue-500/15 to-purple-600/20 p-8 text-center sm:p-12">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
            
            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to make the switch?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-stone-300">
                Book a free 15-minute career consultation. We'll discuss your goals and create a personalized roadmap.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waLink("Hi! I'm a working professional looking to upskill/transition to tech. Can we schedule a career consultation?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Book Free Consultation
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition hover:shadow-blue-500/50"
                >
                  Fill Enquiry Form
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <p className="mt-6 text-xs text-stone-500">
                ✓ No commitment required &nbsp; ✓ Flexible payment options &nbsp; ✓ Start anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
