import { ArrowRight, BadgeCheck, BarChart3, Bot, ClipboardCheck, Clock, Code2, Compass, GraduationCap, Mail, MapPin, Megaphone, PenTool, Wallet, ExternalLink } from "lucide-react";
import { codepilotTracks, contact, eligibilityStreams, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TechLogo, { siLogo } from "./TechLogo";

const infoChips = [
  { icon: Clock, label: "Duration", value: "3 – 6 months" },
  { icon: MapPin, label: "Mode", value: "Remote / Hybrid" },
  { icon: Wallet, label: "Stipend", value: "Performance-based" },
  { icon: BadgeCheck, label: "Certificate", value: "On completion" },
];

const latestTech = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TensorFlow",
  "OpenAI",
  "AWS",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "Flutter",
  "Playwright",
];

/* Email resume link - works on all devices */
const emailResumeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent("Code Pilot 2026 Application - Resume Attached")}&body=${encodeURIComponent(`Hi Code Origin.AI Team,

I am interested in the Code Pilot 2026 internship program.

Please find my resume attached.

Name: 
Phone: 
College: 
Degree: 
Preferred Track: 

Thank you!`)}`;

export default function Internship() {
  return (
    <section id="internship" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-600/15 blur-[100px] animate-pulse" />
      <div className="absolute -right-20 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-gold-600/15 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Code Pilot Program"
          title={
            <>
              Launch your <span className="text-gradient">tech career</span> with us
            </>
          }
          subtitle="For students & freshers — build real software, learn from senior engineers, and get job-ready. No prior experience required — just curiosity, commitment and the drive to learn."
        />

        <Reveal className="mt-12 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-200">
            <GraduationCap className="h-4 w-4" />
            Open to all graduates — tech & non-tech backgrounds welcome
          </span>
        </Reveal>

        {/* Eligibility streams */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {eligibilityStreams.map((s, i) => (
            <Reveal key={s.code} delay={i * 70} className="h-full">
              <div className="h-full rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
                <span className="text-3xl">{s.emoji}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{s.code}</h3>
                <p className="text-xs font-medium text-gold-300">{s.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* From ANY background to a tech career — non-tech students welcome */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.05] to-transparent p-6 sm:p-8">
            <div className="text-center">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-200">
                <Compass className="h-3.5 w-3.5" />
                From a non-tech background? You're welcome too
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                BA, B.Com, BBA, Diploma or any degree —{" "}
                <span className="text-gradient">start your IT career here</span>
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-400">
                No coding background? No problem. We start from the fundamentals and guide you into
                today's most in-demand, job-oriented skills — at your pace.
              </p>
            </div>

            {/* Non-tech-friendly skill directions */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Megaphone,
                  title: "Digital Marketing",
                  desc: "SEO, Google & Meta ads, content and GA4 analytics — a fast, tool-based entry into IT with strong hiring demand.",
                  logos: [
                    { name: "Google Ads", url: siLogo("googleads", "4285F4") },
                    { name: "Google Analytics", url: siLogo("googleanalytics", "E37400") },
                    { name: "Meta", url: siLogo("meta", "0467DF") },
                    { name: "HubSpot", url: siLogo("hubspot", "FF7A59") },
                  ],
                },
                {
                  icon: Bot,
                  title: "Job-Oriented AI",
                  desc: "Practical AI: ChatGPT & GenAI tools, prompt engineering and AI automation — no heavy maths to get started.",
                  logos: [
                    { name: "OpenAI", url: siLogo("openai", "FFFFFF") },
                    { name: "LangChain", url: siLogo("langchain", "1C3C3C") },
                    { name: "Python", url: siLogo("python", "3776AB") },
                    { name: "Hugging Face", url: siLogo("huggingface", "FFD21E") },
                  ],
                },
                {
                  icon: Code2,
                  title: "Data & Web Foundations",
                  desc: "Computer & web basics, then a job-ready track — data analytics, software testing or frontend.",
                  logos: [
                    { name: "SQL / MySQL", url: siLogo("mysql", "4479A1") },
                    { name: "Python", url: siLogo("python", "3776AB") },
                    { name: "JavaScript", url: siLogo("javascript", "F7DF1E") },
                    { name: "Figma", url: siLogo("figma", "F24E1E") },
                  ],
                },
              ].map((s) => (
                <div key={s.title} className="group rounded-xl border border-emerald-500/15 bg-ink-900/40 p-5 transition duration-300 hover:border-emerald-500/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-semibold text-white">{s.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-3 border-t border-emerald-500/10 pt-4">
                    {s.logos.map((lg) => (
                      <TechLogo key={lg.name} name={lg.name} url={lg.url} className="h-5 w-5" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Simple 4-step pathway */}
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {[
                { n: "01", t: "Learn the fundamentals" },
                { n: "02", t: "Pick a job-oriented track" },
                { n: "03", t: "Build real projects" },
                { n: "04", t: "Get interview-ready" },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className="relative flex items-center gap-3 rounded-xl border border-gold-500/10 bg-white/[0.02] p-4"
                >
                  <span className="font-display text-lg font-bold text-emerald-300">{step.n}</span>
                  <span className="text-sm font-medium text-stone-200">{step.t}</span>
                  {i < 3 && <ArrowRight className="ml-auto hidden h-4 w-4 text-emerald-500/40 sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Roles you can target — entry-friendly IT careers */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 sm:p-8">
            <div className="text-center">
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Roles you can <span className="text-gradient">target</span>
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-stone-400">
                In-demand, entry-friendly IT careers our freshers and non-tech students train for.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: BarChart3,
                  role: "Data Analyst",
                  desc: "Turn raw data into decisions with SQL, Excel and dashboards.",
                  demand: "Very high demand",
                },
                {
                  icon: Megaphone,
                  role: "Digital Marketer",
                  desc: "Run SEO, paid ads and analytics that grow real brands.",
                  demand: "High demand",
                },
                {
                  icon: ClipboardCheck,
                  role: "QA / Test Engineer",
                  desc: "Safeguard software quality with manual and automation testing.",
                  demand: "Steady demand",
                },
                {
                  icon: PenTool,
                  role: "UI/UX Designer",
                  desc: "Design clean, intuitive product experiences in Figma.",
                  demand: "High demand",
                },
              ].map((r) => (
                <div
                  key={r.role}
                  className="group rounded-xl border border-gold-500/10 bg-ink-900/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold-500/35"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300 transition duration-300 group-hover:scale-110">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-semibold text-white">{r.role}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{r.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {r.demand}
                  </span>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-stone-500">
              Typical entry-level pay in India is around <span className="font-semibold text-stone-300">₹3–6 LPA</span> and
              grows quickly with skills and a strong project portfolio. Figures are indicative market data (varies by
              role, skills and city) — not a guarantee.
            </p>
          </div>
        </Reveal>

        {/* Programs / courses offered */}
        <Reveal className="mt-12">
          <div className="rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold text-white sm:text-2xl">
              Training <span className="text-gradient">tracks</span> we offer
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-stone-400">
              Choose from eight hands-on programs covering development, AI, cloud, security and marketing.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {codepilotTracks.map((t) => (
                <div
                  key={t.title}
                  className="rounded-xl border border-gold-500/15 bg-ink-900/50 p-4 transition hover:border-gold-500/40"
                >
                  <p className="font-semibold text-white">{t.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Latest tech stack you'll learn */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 sm:p-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-8">
              <h3 className="shrink-0 font-display text-xl font-semibold text-white">
                You'll work on the <span className="text-gradient">latest tech</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {latestTech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold-500/20 bg-gold-500/5 px-3.5 py-1.5 text-xs font-semibold text-stone-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Info chips */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoChips.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <div className="flex items-center gap-3.5 rounded-xl border border-gold-500/15 bg-white/[0.02] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">{c.label}</p>
                  <p className="text-sm font-semibold text-white">{c.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-r from-gold-600/20 via-gold-500/15 to-gold-400/20 p-8 text-center sm:p-12">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Applications open for the 2026 batch
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-stone-300">
              Limited seats per track. Apply today and start your engineering journey with Code Origin.AI.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Hi Code Origin.AI! I'd like to apply for the Code Pilot 2026 program. Please share the details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Apply on WhatsApp
              </a>
              <a
                href="#apply-internship"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50"
              >
                Apply via Form
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={emailResumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                Email your resume
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
