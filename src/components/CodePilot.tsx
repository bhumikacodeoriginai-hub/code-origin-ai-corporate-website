import { ArrowRight, Award, Briefcase, Rocket, Users, Wallet, CheckCircle2, Play } from "lucide-react";
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

const trackImages = [
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
];

export default function CodePilot() {
  return (
    <section id="codepilot" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold-500/[0.06] via-ink-950 to-ink-950" />
      <div className="absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-gold-600/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-24 -z-10 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
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

            {/* Perks */}
            <div className="mt-8 space-y-4">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-gold-500/15 bg-white/[0.02] p-4 transition duration-300 hover:border-gold-500/35 hover:bg-gold-500/[0.04]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-400/20 text-gold-300 transition group-hover:scale-110">
                      <p.icon className="h-6 w-6" />
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

          {/* Right - Image showcase */}
          <Reveal className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="overflow-hidden rounded-3xl border border-gold-500/15 shadow-2xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                    alt="Code Pilot interns learning software development in modern workspace"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/20 backdrop-blur-sm ring-2 ring-gold-400/50 transition hover:bg-gold-500/30 cursor-pointer">
                      <Play className="h-8 w-8 text-gold-400 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Info overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-gold-500/20 bg-ink-900/95 p-5 backdrop-blur">
                <p className="font-display text-2xl font-bold text-white">From graduate → engineer</p>
                <p className="mt-1 text-sm text-stone-300">
                  Structured tracks, real projects and mentorship that turn theory into shipped code.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    500+ Alumni
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gold-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    8 Tracks
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-blue-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    90% Placement
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-8 hidden rounded-2xl border border-gold-500/20 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur lg:block">
                <p className="text-xs font-medium text-stone-400">Applications Open</p>
                <p className="font-display text-lg font-bold text-gradient">2026 Batch</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tracks */}
        <div className="mt-20">
          <Reveal className="text-center">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Choose your <span className="text-gradient">track</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-stone-400">
              Eight specialized tracks designed to match your interests and career goals.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {codepilotTracks.map((t, i) => (
              <Reveal key={t.title} delay={(i % 4) * 70}>
                <div className="group h-full overflow-hidden rounded-2xl border border-gold-500/15 bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10">
                  {/* Track image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={trackImages[i] || trackImages[0]}
                      alt={`${t.title} track`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                    
                    {/* Track number */}
                    <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500/20 font-display text-sm font-bold text-gold-400 backdrop-blur-sm ring-1 ring-gold-500/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h4 className="font-display text-lg font-semibold text-white">{t.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone-400">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <a
              href="#apply-internship"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/50"
            >
              Apply for Code Pilot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
