import { ArrowRight, GraduationCap, Mail, Rocket, Sparkles, Zap } from "lucide-react";
import { bizWhatsApp, contact, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-hexagon opacity-15" />
      <div className="absolute -left-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold-600/15 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-emerald-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ═══════════════════════════════════════════════════════════
            BUSINESS CTA
        ═══════════════════════════════════════════════════════════ */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/20 bg-gradient-to-br from-gold-600/15 via-ink-900 to-ink-900 p-8 sm:p-14">
            {/* Decorative elements */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-500/20 blur-[100px]" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-gold-400/15 blur-[100px]" />
            <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            
            {/* Floating particles */}
            <div className="absolute right-10 top-10 h-2 w-2 animate-bounce-subtle rounded-full bg-gold-400/50" style={{ animationDelay: '0s' }} />
            <div className="absolute right-20 top-20 h-1.5 w-1.5 animate-bounce-subtle rounded-full bg-gold-300/50" style={{ animationDelay: '0.5s' }} />
            <div className="absolute right-16 top-32 h-1 w-1 animate-bounce-subtle rounded-full bg-gold-500/50" style={{ animationDelay: '1s' }} />

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 text-xs font-semibold text-gold-200">
                <Rocket className="h-4 w-4" />
                For Businesses
              </span>

              <h2 className="mt-8 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Let's turn your idea into a
                <br />
                <span className="text-shimmer">product that scales.</span>
              </h2>
              
              <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-300">
                Book a free, no-obligation consultation. Share your vision and we'll show you 
                exactly how AI and cloud can accelerate your business.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={bizWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-wa px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110 sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50 sm:w-auto"
                >
                  <Zap className="h-4 w-4" />
                  Book Free Consultation
                </a>
                <a
                  href={contact.gmailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>

              <p className="mt-8 text-sm text-stone-500">
                ✓ No commitment required &nbsp; ✓ Response within 24 hours &nbsp; ✓ 100% confidential
              </p>
            </div>
          </div>
        </Reveal>

        {/* ═══════════════════════════════════════════════════════════
            STUDENT CTA
        ═══════════════════════════════════════════════════════════ */}
        <Reveal delay={100}>
          <div className="mt-8 relative overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-gradient-to-br from-emerald-600/10 via-ink-900 to-ink-900 p-8 sm:p-12">
            {/* Decorative */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/15 blur-[80px]" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-[60px]" />
            
            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-200">
                  <GraduationCap className="h-3.5 w-3.5" />
                  For Students & Freshers
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                  Ready to <span className="text-emerald-300">launch your tech career?</span>
                </h3>
                <p className="mt-3 max-w-lg text-stone-400">
                  Join the Code Pilot program — work on real projects, learn from senior engineers, 
                  and build a portfolio that gets you hired.
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-stone-500 lg:justify-start">
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    Real projects
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    Performance-based stipend
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    Placement support
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={waLink("Hi! I'm a student interested in the Code Pilot program. Please share the details and how to apply.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-500 active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Apply via WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#apply-internship"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500/10 active:scale-[0.98]"
                >
                  Fill Application Form
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
