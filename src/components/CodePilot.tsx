import { useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Camera,
  CheckCircle2,
  Cloud,
  Layers,
  LayoutDashboard,
  Megaphone,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { codePilotPhotos, codepilotTracks } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const perks = [
  { icon: Rocket, title: "Real project experience", desc: "Contribute to live, production-grade products." },
  { icon: Users, title: "1-on-1 mentorship", desc: "Learn directly from senior engineers." },
  { icon: Award, title: "Certification", desc: "Earn an industry-recognized completion certificate." },
  { icon: Wallet, title: "Performance stipend", desc: "Get rewarded for great work during the program." },
  { icon: Briefcase, title: "Placement support", desc: "Access PPOs and job referrals on completion." },
];

/* Per-track visual identity + the real technology logos each track works with.
   Logos are served from the Simple Icons CDN (same source as the Tech Stack). */
type TrackLogoItem = { name: string; url: string };
const si = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

const trackMeta: { icon: typeof Rocket; grad: string; logos: TrackLogoItem[] }[] = [
  {
    icon: Layers,
    grad: "from-blue-600 to-blue-400",
    logos: [
      { name: "React", url: si("react", "61DAFB") },
      { name: "Next.js", url: si("nextdotjs", "FFFFFF") },
      { name: "Node.js", url: si("nodedotjs", "5FA04E") },
      { name: "TypeScript", url: si("typescript", "3178C6") },
    ],
  },
  {
    icon: BrainCircuit,
    grad: "from-purple-600 to-fuchsia-400",
    logos: [
      { name: "Python", url: si("python", "3776AB") },
      { name: "TensorFlow", url: si("tensorflow", "FF6F00") },
      { name: "PyTorch", url: si("pytorch", "EE4C2C") },
      { name: "OpenAI", url: si("openai", "FFFFFF") },
    ],
  },
  {
    icon: Cloud,
    grad: "from-cyan-600 to-sky-400",
    logos: [
      { name: "AWS", url: si("amazonwebservices", "FF9900") },
      { name: "Docker", url: si("docker", "2496ED") },
      { name: "Kubernetes", url: si("kubernetes", "326CE5") },
      { name: "Terraform", url: si("terraform", "7B42BC") },
    ],
  },
  {
    icon: ShieldCheck,
    grad: "from-rose-600 to-red-400",
    logos: [
      { name: "Kali Linux", url: si("kalilinux", "557C94") },
      { name: "Wireshark", url: si("wireshark", "1679A7") },
      { name: "Linux", url: si("linux", "FCC624") },
      { name: "Hack The Box", url: si("hackthebox", "9FEF00") },
    ],
  },
  {
    icon: LayoutDashboard,
    grad: "from-amber-600 to-yellow-400",
    logos: [
      { name: "React", url: si("react", "61DAFB") },
      { name: "Tailwind CSS", url: si("tailwindcss", "06B6D4") },
      { name: "JavaScript", url: si("javascript", "F7DF1E") },
      { name: "Figma", url: si("figma", "F24E1E") },
    ],
  },
  {
    icon: Server,
    grad: "from-emerald-600 to-teal-400",
    logos: [
      { name: "Node.js", url: si("nodedotjs", "5FA04E") },
      { name: "Express", url: si("express", "FFFFFF") },
      { name: "PostgreSQL", url: si("postgresql", "4169E1") },
      { name: "GraphQL", url: si("graphql", "E10098") },
    ],
  },
  {
    icon: BarChart3,
    grad: "from-orange-600 to-amber-400",
    logos: [
      { name: "Python", url: si("python", "3776AB") },
      { name: "Pandas", url: si("pandas", "150458") },
      { name: "NumPy", url: si("numpy", "013243") },
      { name: "Jupyter", url: si("jupyter", "F37626") },
    ],
  },
  {
    icon: Megaphone,
    grad: "from-pink-600 to-rose-400",
    logos: [
      { name: "Google Ads", url: si("googleads", "4285F4") },
      { name: "Google Analytics", url: si("googleanalytics", "E37400") },
      { name: "Meta", url: si("meta", "0467DF") },
      { name: "HubSpot", url: si("hubspot", "FF7A59") },
    ],
  },
];

/* Renders a real tech logo; hides itself gracefully if the CDN icon is missing. */
function TrackLogo({ name, url }: TrackLogoItem) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <img
      src={url}
      alt={name}
      title={name}
      loading="lazy"
      decoding="async"
      onError={() => setErr(true)}
      className="h-6 w-6 opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
    />
  );
}

/* Portrait promo reel — click-to-play. preload="metadata" so the 6MB file is
   NOT downloaded until the user taps (zero page-load impact / no lag). */
function CodePilotVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };
  return (
    <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[1.75rem] border-2 border-gold-500/30 bg-ink-900 shadow-2xl shadow-gold-500/15">
      {/* Fixed 9:16 window; the video is scaled from the top-left and the
          overflow is clipped, which crops the bottom-right corner where the
          source clip carries an AI-tool watermark. Custom controls are used so
          the crop never hides a native control bar. */}
      <div className="relative aspect-[9/16] overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/code-pilot.mp4"
          className="absolute inset-0 h-full w-full origin-top-left scale-[1.1] bg-ink-900 object-cover"
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play the Code Pilot video"}
          data-cta="video-play"
          data-cta-location="codepilot"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          {!playing && (
            <>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-ink-950/45" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 text-ink-950 shadow-xl shadow-gold-500/30 ring-4 ring-gold-400/30 transition-transform duration-300 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-current" />
              </span>
              <span className="relative rounded-full bg-ink-950/70 px-4 py-1.5 text-xs font-semibold text-gold-200 backdrop-blur-sm">
                Watch • 30s
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

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

        {/* Watch Code Pilot — 30-second promo reel */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <CodePilotVideo />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                <Play className="h-3.5 w-3.5 fill-current" />
                See it in action
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                Code Pilot in <span className="text-gradient">30 seconds</span>
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-stone-400 lg:mx-0">
                See how Code Pilot takes students from the classroom to real, shipped software —
                live training, senior mentorship and hands-on projects that build a job-ready portfolio.
              </p>
              <ul className="mx-auto mt-6 grid max-w-md gap-3 text-left sm:grid-cols-2 lg:mx-0">
                {[
                  "Real client-grade projects",
                  "1-on-1 senior mentorship",
                  "Industry-recognized certificate",
                  "Placement support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-stone-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#apply-internship"
                className="btn-shine group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/50"
              >
                Apply for Code Pilot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
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
            {codepilotTracks.map((t, i) => {
              const meta = trackMeta[i] ?? trackMeta[0];
              const Icon = meta.icon;
              return (
                <Reveal key={t.title} delay={(i % 4) * 70}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-500/15 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10">
                    {/* Top accent line */}
                    <span className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${meta.grad} opacity-70`} />
                    {/* Hover glow */}
                    <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${meta.grad} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />

                    {/* Icon + number */}
                    <div className="relative flex items-center justify-between">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${meta.grad} text-white shadow-lg ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-sm font-bold text-stone-600 transition-colors duration-300 group-hover:text-gold-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <h4 className="relative mt-5 font-display text-lg font-semibold text-white">{t.title}</h4>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-stone-400">{t.desc}</p>

                    {/* Real technology logos */}
                    <div className="relative mt-5 flex items-center gap-3 border-t border-gold-500/10 pt-4">
                      {meta.logos.map((lg) => (
                        <TrackLogo key={lg.name} name={lg.name} url={lg.url} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
