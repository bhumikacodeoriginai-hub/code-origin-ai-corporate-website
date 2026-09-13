import { Bot, Cloud, Globe, Palette, ShoppingBag, Smartphone, ArrowRight } from "lucide-react";
import { waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Intelligent chatbots, recommendation engines, predictive analytics and LLM-powered solutions that automate and scale your business.",
    features: ["Custom AI Models", "Chatbots & Assistants", "Data Analytics"],
    color: "from-purple-600/30 to-purple-400/30",
    borderColor: "hover:border-purple-500/40",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    desc: "Scalable cloud architecture on AWS, CI/CD pipelines, Kubernetes orchestration and infrastructure that grows with you.",
    features: ["AWS Architecture", "CI/CD Pipelines", "Auto-scaling"],
    color: "from-blue-600/30 to-blue-400/30",
    borderColor: "hover:border-blue-500/40",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance web applications with modern React, Next.js and TypeScript. SEO-optimized, blazing fast, pixel perfect.",
    features: ["React & Next.js", "TypeScript", "SEO Optimized"],
    color: "from-gold-600/30 to-gold-400/30",
    borderColor: "hover:border-gold-500/40",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with React Native and Flutter. Native performance, single codebase.",
    features: ["React Native", "Flutter", "Cross-platform"],
    color: "from-emerald-600/30 to-emerald-400/30",
    borderColor: "hover:border-emerald-500/40",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Beautiful, intuitive interfaces designed around real users. Figma prototypes to production-ready designs.",
    features: ["User Research", "Figma Design", "Design Systems"],
    color: "from-pink-600/30 to-pink-400/30",
    borderColor: "hover:border-pink-500/40",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with payments, inventory management, analytics and admin dashboards.",
    features: ["Payment Integration", "Inventory System", "Admin Dashboard"],
    color: "from-amber-600/30 to-amber-400/30",
    borderColor: "hover:border-amber-500/40",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-hexagon opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.02] to-ink-950" />
      <div className="absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title={
            <>
              Full-cycle services from <span className="text-gradient">idea to launch</span>
            </>
          }
          subtitle="We handle the entire product lifecycle — strategy, design, development and deployment — so you can focus on growing your business while we build the technology."
        />

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className={`card-hover group relative h-full rounded-3xl border border-gold-500/15 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 ${s.borderColor}`}>
                {/* Icon */}
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-white transition group-hover:scale-110`}>
                  <s.icon className="h-7 w-7" />
                </span>

                {/* Content */}
                <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">{s.desc}</p>

                {/* Features */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-gold-500/20 bg-gold-500/5 px-3 py-1 text-xs font-medium text-stone-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gold-400 opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>

                {/* Corner glow on hover */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-500/0 blur-3xl transition group-hover:bg-gold-500/10" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/40"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink("Hi! I'd like to discuss a project. Can we talk about your services?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-wa/20"
            >
              <WhatsAppIcon className="h-5 w-5 text-wa" />
              Quick Chat
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
