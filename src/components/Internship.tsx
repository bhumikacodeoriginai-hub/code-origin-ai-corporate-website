import { ArrowRight, BadgeCheck, Clock, GraduationCap, Mail, MapPin, Wallet } from "lucide-react";
import { codepilotTracks, contact, eligibilityStreams, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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

export default function Internship() {
  return (
    <section id="internship" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Internships"
          title={
            <>
              Code Pilot <span className="text-gradient">Internship</span> opportunities
            </>
          }
          subtitle="We invite freshly graduated students to build real software with us. No prior experience required — just curiosity, commitment and the drive to learn."
        />

        <Reveal className="mt-12 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-200">
            <GraduationCap className="h-4 w-4" />
            Open to graduates & final-year students
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

        {/* Programs / courses offered */}
        <Reveal className="mt-12">
          <div className="rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold text-white sm:text-2xl">
              Internship <span className="text-gradient">courses</span> we offer
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
              Limited seats per track. Apply today and start your engineering journey with Code Origin.ai.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Hi Code Origin.ai! I'd like to apply for the Code Pilot 2026 internship. Please share the details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Apply on WhatsApp
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50"
              >
                Apply via Form
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={contact.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email your resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
