import { ArrowRight, Mail } from "lucide-react";
import { contact, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-gold-600/25 via-ink-900 to-ink-900 p-8 text-center sm:p-14">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold-500/20 blur-[90px]" />
            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-gold-400/15 blur-[90px]" />
            <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to build — or <span className="text-shimmer">start your career?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-300">
              Whether you're a business with a bold idea or a graduate ready to learn by building real
              systems, Code Origin.ai is ready to get you there.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi Code Origin.ai! I'd like to discuss a project / internship.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={contact.gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
