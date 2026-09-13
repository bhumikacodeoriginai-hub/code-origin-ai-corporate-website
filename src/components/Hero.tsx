import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Rocket,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { bizWhatsApp, contact, socials, waLink } from "../data";
import { WhatsAppIcon } from "./icons";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/* Animated code lines for tech aesthetic */
const codeSnippets = [
  { text: "const solution = await codeOrigin.build(yourIdea);", delay: 0 },
  { text: "// Transforming businesses with AI & Cloud", delay: 0.5 },
  { text: "ship({ quality: 'enterprise', timeline: 'fast' });", delay: 1 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32">
      {/* ═══════════════════════════════════════════════════════════
          BACKGROUND EFFECTS - High-tech aesthetic
      ═══════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 -z-30">
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/70 to-ink-950" />
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 -z-20 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      {/* Hexagon pattern */}
      <div className="absolute inset-0 -z-20 bg-hexagon opacity-30" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 -z-10 bg-noise opacity-[0.03]" />
      
      {/* Glowing orbs */}
      <div className="absolute -top-40 left-1/4 -z-10 h-[40rem] w-[40rem] rounded-full bg-gold-500/20 blur-[150px] animate-pulse" />
      <div className="absolute -left-40 top-1/2 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold-600/15 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 -z-10 h-[35rem] w-[35rem] rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="absolute -bottom-40 right-1/4 -z-10 h-[25rem] w-[25rem] rounded-full bg-gold-400/15 blur-[100px]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold-400/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ═══════════════════════════════════════════════════════════
            TOP ANNOUNCEMENT BANNERS
        ═══════════════════════════════════════════════════════════ */}
        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contact"
            className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-gold-200 transition hover:border-gold-400/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
            </span>
            <Rocket className="h-3.5 w-3.5 text-gold-400" />
            <span>For Businesses — Free Consultation</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#apply-internship"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-semibold text-emerald-200 backdrop-blur transition hover:bg-emerald-500/20"
          >
            <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
            <span>Code Pilot Internship 2026 — Apply Now</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ═══════════════════════════════════════════════════════════
              LEFT CONTENT
          ═══════════════════════════════════════════════════════════ */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-ink-900/80 px-4 py-2 text-xs font-medium text-stone-300 backdrop-blur">
              <Code2 className="h-4 w-4 text-gold-400" />
              <span>Trusted Technology Partner</span>
              <span className="h-1 w-1 rounded-full bg-gold-500" />
              <span className="font-semibold text-gold-400">Est. 2024</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              We Build{" "}
              <span className="relative">
                <span className="text-shimmer">AI & Cloud</span>
                <Sparkles className="absolute -right-6 -top-2 h-5 w-5 text-gold-400 animate-bounce-subtle" />
              </span>
              <br />
              <span className="text-stone-300">Products That</span>{" "}
              <span className="text-gradient">Scale</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg lg:mx-0">
              Code Origin.ai is your end-to-end technology partner. We design, build and deploy{" "}
              <span className="font-semibold text-gold-300">custom software, AI solutions & cloud infrastructure</span>{" "}
              that transform businesses — and train tomorrow's engineers through Code Pilot.
            </p>

            {/* Code snippet animation */}
            <div className="mt-6 hidden rounded-xl border border-gold-500/20 bg-ink-900/60 p-4 font-mono text-xs backdrop-blur lg:block">
              {codeSnippets.map((snippet, i) => (
                <div
                  key={i}
                  className="text-stone-400"
                  style={{ 
                    animation: `slide-up 0.5s ease-out forwards`,
                    animationDelay: `${snippet.delay}s`,
                    opacity: 0,
                  }}
                >
                  <span className="text-gold-500">&gt;</span> {snippet.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50 sm:w-auto"
              >
                <Zap className="h-4 w-4" />
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={bizWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-wa/40 bg-wa/15 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-wa/25 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 text-wa" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Student CTA */}
            <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="#apply-internship"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
              >
                <GraduationCap className="h-4 w-4" />
                Apply for Internship
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <span className="text-stone-600">|</span>
              <a
                href={waLink("Hi! I'm interested in the Code Pilot program. Please share details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-400 transition hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Student enquiry
              </a>
            </div>

            {/* Trust Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
                <span className="ml-1 font-bold text-white">5.0</span>
                <span className="text-stone-500">rating</span>
              </span>
              <span className="inline-flex items-center gap-2 text-stone-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 14+ projects
              </span>
              <span className="inline-flex items-center gap-2 text-stone-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% on-time
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-xs font-medium text-stone-500">Follow us:</span>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 transition hover:text-gold-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 transition hover:text-gold-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-wa/30 bg-wa/10 text-wa transition hover:bg-wa/20"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT - TEAM PHOTO SHOWCASE (More Trust!)
          ═══════════════════════════════════════════════════════════ */}
          <div className="relative">
            {/* Main team photo container */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-gold-500/30 bg-ink-900/90 shadow-2xl shadow-gold-500/20 backdrop-blur-xl glow-gold-strong">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-gold-500/15 bg-gradient-to-r from-ink-900/95 to-ink-800/95 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-gold-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Our Team — Chitradurga Office
                </div>
              </div>

              {/* Real Team Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/companypic.jpg"
                  alt="Code Origin.ai Team - Developers, designers and engineers at Chitradurga office"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />

                {/* Verified badge */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-bold text-emerald-300 ring-1 ring-emerald-500/50 backdrop-blur-md">
                  <CheckCircle2 className="h-4 w-4" />
                  Real Team
                </div>

                {/* Caption */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">
                    20+ Talented Engineers
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-stone-300">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-200">
                      <Rocket className="h-3 w-3" />
                      Building Your Vision
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-8 hidden animate-float rounded-2xl border border-gold-500/20 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3 lg:-left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/30 to-gold-400/30 text-gold-300">
                <Cpu className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">8 Live</p>
                <p className="text-xs text-stone-400">In production</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 hidden animate-float-delayed rounded-2xl border border-emerald-500/20 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-3 lg:-right-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600/30 to-emerald-400/30 text-emerald-300">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Code Pilot</p>
                <p className="text-xs text-stone-400">Internship open</p>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 animate-float rounded-2xl border border-gold-500/20 bg-ink-900/95 px-4 py-3 shadow-xl backdrop-blur xl:flex xl:items-center xl:gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/30 to-gold-400/30 text-gold-300">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">AI-First</p>
                <p className="text-xs text-stone-400">Future-ready</p>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-gold-500/10" />
            <div className="absolute -inset-8 -z-20 rounded-[2.5rem] border border-gold-500/5" />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            TRUST BADGES
        ═══════════════════════════════════════════════════════════ */}
        <div className="mt-16 lg:mt-24">
          <div className="flex flex-col items-center justify-center gap-4 border-t border-gold-500/10 pt-8 sm:flex-row sm:gap-8 lg:gap-12">
            {[
              { icon: Cpu, label: "Enterprise AI & Cloud" },
              { icon: CheckCircle2, label: "AWS-Certified Team" },
              { icon: Rocket, label: "14+ Projects Shipped" },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2.5 text-sm font-medium tracking-wide text-stone-400"
              >
                <item.icon className="h-5 w-5 text-gold-400" />
                {item.label}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-gold-500">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              ESTABLISHED 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
