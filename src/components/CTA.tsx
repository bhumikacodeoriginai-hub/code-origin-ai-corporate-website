import { ArrowRight, GraduationCap, Mail, Rocket, Sparkles } from "lucide-react";
import { bizWhatsApp, contact, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main CTA — Business focused */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-gold-600/20 via-ink-900 to-ink-900 p-8 text-center sm:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-500/20 blur-[100px]" />
            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-gold-400/15 blur-[100px]" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-200">
              <Rocket className="h-3.5 w-3.5" />
              For Businesses
            </span>

            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
              Let's turn your idea into a <span className="text-shimmer">product that scales.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-300">
              Book a free, no-obligation consultation. Tell us about your business goals and we'll show
              you exactly how AI and cloud can get you there — faster and more affordably than you think.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={bizWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wa px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50 sm:w-auto"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={contact.gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>

            <p className="mt-6 text-sm text-stone-500">
              No commitment required • Response within 24 hours • 100% confidential
            </p>
          </div>
        </Reveal>

        {/* Secondary CTA — Students / Internship */}
        <Reveal delay={100}>
          <div className="mt-6 relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600/15 via-ink-900 to-ink-900 p-8 text-center sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/15 blur-[80px]" />
            
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-200">
              <GraduationCap className="h-3.5 w-3.5" />
              For Students
            </span>

            <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to <span className="text-emerald-300">start your tech career?</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-stone-400">
              Join the Code Pilot internship — work on real projects, learn from senior engineers, 
              and build a portfolio that gets you hired. Applications open for 2026 batch.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi! I'm a student interested in the Code Pilot internship. Please share the details and how to apply.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-500 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Apply via WhatsApp
              </a>
              <a
                href="#internship"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500/10 sm:w-auto"
              >
                View Internship Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500">
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
                Certificate + placement support
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
