import { Award, Briefcase, GitBranch, Headphones, ShieldCheck, Timer } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Certified Engineers",
    desc: "AWS-certified, senior engineers who've shipped production systems at scale.",
  },
  {
    icon: Timer,
    title: "On-time, On-budget",
    desc: "Transparent estimates and agile sprints that respect your timeline and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    desc: "Security-first architecture built to grow from your first user to millions.",
  },
  {
    icon: GitBranch,
    title: "Agile & Transparent",
    desc: "Clear communication with regular demos, so you're never left guessing.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated maintenance and monitoring after launch, whenever you need us.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    desc: "Code Pilot interns get real job referrals and PPOs on program completion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.04] to-ink-950" />
      <div className="absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              The corporate standard, <span className="text-gradient">delivered end-to-end</span>
            </>
          }
          subtitle="From enterprise clients to fresh graduates, we hold every engagement to the same high bar of quality, security and transparency."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-gold-500/15 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-gold-500/[0.04]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300 transition group-hover:from-gold-600 group-hover:to-gold-400 group-hover:text-ink-950">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
