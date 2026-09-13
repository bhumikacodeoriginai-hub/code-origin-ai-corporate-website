import { ArrowRight, Award, Briefcase, Camera, Rocket, Users, Wallet, CheckCircle2 } from "lucide-react";
import { codePilotPhotos, codePilotTrackImages, codepilotTracks } from "../data";
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
                    src="/images/training-1.jpg"
                    alt="Code Pilot trainer teaching a full classroom of students"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

                  {/* Live training badge */}
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Training Session
                  </span>
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
                    Live Mentorship
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gold-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    8 Tracks
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-blue-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Placement Support
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

        {/* Training in Action — real Code Pilot sessions */}
        <div className="mt-20">
          <Reveal className="text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-200">
              <Camera className="h-3.5 w-3.5" />
              Training in Action
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Real classrooms. Real mentorship. <span className="text-gradient">Real projects.</span>
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-stone-400">
              Every Code Pilot batch learns hands-on — live sessions, workshops and seminars led by our
              senior engineers. This is training actually happening, not stock photos.
            </p>
          </Reveal>
        </div>

        {/* Continuous auto-scrolling strip of real training photos */}
        <Reveal className="mt-10">
          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max animate-marquee items-stretch gap-4 pr-4 group-hover:[animation-play-state:paused] sm:gap-5 sm:pr-5">
              {[...codePilotPhotos, ...codePilotPhotos].map((photo, i) => (
                <figure
                  key={`${photo.src}-${i}`}
                  className="group/card relative h-52 w-72 shrink-0 overflow-hidden rounded-2xl border border-gold-500/20 bg-ink-900 shadow-xl shadow-black/40 transition-colors duration-500 hover:border-gold-500/45 sm:h-64 sm:w-[24rem]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                  <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-medium text-gold-200 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover/card:opacity-100">
                    <Camera className="h-3 w-3" />
                    Code Pilot Training
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

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
                      src={codePilotTrackImages[i] || codePilotTrackImages[0]}
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
