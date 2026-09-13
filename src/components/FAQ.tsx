import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What does Code Origin.ai do?",
    a: "We're an enterprise AI & cloud solutions company. We design, build and scale web, mobile and AI-powered products for businesses — and train the next generation of engineers through our Code Pilot program.",
  },
  {
    q: "What is the Code Pilot program?",
    a: "Code Pilot is our flagship training & internship program where students and graduates work on real, production-grade projects under the mentorship of senior engineers.",
  },
  {
    q: "Who can apply for the internship?",
    a: "Fresh graduates and final-year students from Engineering (B.E/B.Tech), MCA, BCA, B.Sc Computer Science and M.Sc Computer Science. No prior work experience is required.",
  },
  {
    q: "Is the internship paid?",
    a: "Yes — we offer a performance-based stipend. Top performers are also eligible for pre-placement offers (PPOs) and job referrals.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Absolutely. Every intern who completes the program receives an industry-recognized completion certificate and a letter of recommendation.",
  },
  {
    q: "How long is the program?",
    a: "The Code Pilot internship typically runs for 3 to 6 months, depending on your chosen track, in remote or hybrid mode.",
  },
  {
    q: "What technologies will I learn?",
    a: "You'll work hands-on with React, Next.js, Node.js, Python, AI/ML tools, AWS cloud, Docker, Kubernetes, and automation testing with Playwright — plus specialized tracks in Cybersecurity and Digital Marketing.",
  },
  {
    q: "How do I start a project with Code Origin.ai?",
    a: "Simply reach out via WhatsApp, email or the contact form. We'll schedule a free consultation to understand your requirements and propose a clear plan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="text-gradient">questions</span>
            </>
          }
          subtitle="Everything you need to know about working with us and joining the Code Pilot program."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors",
                    isOpen ? "border-gold-500/40 bg-gold-500/[0.05]" : "border-gold-500/15 bg-white/[0.02]"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white">{f.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-stone-400">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
