import { ArrowRight, Award, Briefcase, Rocket, Users, Wallet } from "lucide-react";
import { codepilotTracks } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const perks = [
  { icon: Rocket, title: "Real project experience", desc: "Contribute to live, production-grade products." },
  { icon: Users, title: "1-on-1 mentorship", desc: "Learn directly from senior engineers." },
  { icon: Award, title: "Certification", desc: "Earn an industry-recognized completion certificate." },
  { icon: Wallet, title: "Performance stipend", desc: "Get rewarded for great work during the program." },
  { icon: Briefcase, title: "Placement support", desc: "Access PPOs and job referrals on completion." },
];

export default function CodePilot() {
  return (
    <section id="codepilot" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold-500/[0.06] via-ink-950 to-ink-950" />
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-gold-600/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-24 -z-10 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Training Program"
              title={
                <>
                  Code Pilot — <span className="text-gradient">launch your tech career</span>
                </>
              }
              subtitle="Code Pilot is our flagship training and internship program. We take talented graduates from a classroom mindset to real-world engineering — building actual products alongside our team."
            />

            <div className="mt-8 space-y-4">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="flex items-start gap-3.5 rounded-xl border border-gold-500/15 bg-white/[0.02] p-4 transition hover:border-gold-500/35">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      <p className="mt-0.5 text-sm text-stone-400">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl border border-gold-500/15">
              <img
                src="https://images.pexels.com/photos/6805152/pexels-photo-6805152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Code Pilot interns learning software development"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold-500/20 bg-ink-900/90 p-5 backdrop-blur">
              <p className="font-display text-2xl font-bold text-white">From graduate → engineer</p>
              <p className="mt-1 text-sm text-stone-300">
                Structured tracks, real projects and mentorship that turn theory into shipped code.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tracks */}
        <div className="mt-16">
          <Reveal className="text-center">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Choose your <span className="text-gradient">track</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-stone-400">
              Six specialized tracks designed to match your interests and career goals.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {codepilotTracks.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70}>
                <div className="group h-full rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
                  <span className="font-display text-3xl font-bold text-gold-500/15 transition group-hover:text-gold-400/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 font-display text-lg font-semibold text-white">{t.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <a
              href="#internship"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/50"
            >
              Start with Code Pilot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
