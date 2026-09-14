import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  ShoppingBag,
  Smartphone,
  TestTube2,
  Workflow,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Intelligent chatbots, recommendation engines, predictive analytics and LLM-powered solutions that automate and scale your business.",
    features: ["Custom AI Models", "Chatbots & Assistants", "Data Analytics", "LLM Integration"],
    color: "from-purple-600/30 to-purple-400/30",
    borderColor: "hover:border-purple-500/40",
    iconColor: "text-purple-400",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I'm interested in AI & Machine Learning services. I'd like to discuss building intelligent solutions for my business.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    desc: "Scalable cloud architecture on AWS, CI/CD pipelines, Kubernetes orchestration and infrastructure that grows with you.",
    features: ["AWS Architecture", "CI/CD Pipelines", "Auto-scaling", "Kubernetes"],
    color: "from-blue-600/30 to-blue-400/30",
    borderColor: "hover:border-blue-500/40",
    iconColor: "text-blue-400",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need help with Cloud & DevOps. Looking for scalable infrastructure and CI/CD pipelines.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance web applications with modern React, Next.js and TypeScript. SEO-optimized, blazing fast, pixel perfect.",
    features: ["React & Next.js", "TypeScript", "SEO Optimized", "Performance"],
    color: "from-gold-600/30 to-gold-400/30",
    borderColor: "hover:border-gold-500/40",
    iconColor: "text-gold-400",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I want to build a modern web application. Can we discuss React/Next.js development?",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with React Native and Flutter. Native performance, single codebase, faster time-to-market.",
    features: ["React Native", "Flutter", "iOS & Android", "Cross-platform"],
    color: "from-emerald-600/30 to-emerald-400/30",
    borderColor: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need a mobile app for iOS and Android. Can we discuss React Native or Flutter development?",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    desc: "Robust backend systems and RESTful/GraphQL APIs with Node.js, Python, Django and FastAPI. Secure, scalable, well-documented.",
    features: ["Node.js & Python", "REST & GraphQL", "Microservices", "API Security"],
    color: "from-cyan-600/30 to-cyan-400/30",
    borderColor: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need backend and API development services. Looking for scalable and secure APIs.",
  },
  {
    icon: TestTube2,
    title: "Automation Testing & QA",
    desc: "End-to-end test automation with Playwright, Selenium and Cypress. Ensure quality with comprehensive testing strategies.",
    features: ["Playwright", "Selenium", "Cypress", "CI Integration"],
    color: "from-green-600/30 to-green-400/30",
    borderColor: "hover:border-green-500/40",
    iconColor: "text-green-400",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need automation testing services. Looking for Playwright/Selenium test automation for my project.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Build robust data pipelines, warehouses and analytics platforms. Transform raw data into actionable business insights.",
    features: ["Data Pipelines", "ETL Processes", "Data Warehousing", "Analytics"],
    color: "from-orange-600/30 to-orange-400/30",
    borderColor: "hover:border-orange-500/40",
    iconColor: "text-orange-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need data engineering services. Looking to build data pipelines and analytics platforms.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Beautiful, intuitive interfaces designed around real users. Figma prototypes to production-ready designs that convert.",
    features: ["User Research", "Figma Design", "Design Systems", "Prototyping"],
    color: "from-pink-600/30 to-pink-400/30",
    borderColor: "hover:border-pink-500/40",
    iconColor: "text-pink-400",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need UI/UX design services. Looking for professional design for my app/website.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with payments, inventory management, analytics and admin dashboards that drive sales.",
    features: ["Payment Integration", "Inventory System", "Admin Dashboard", "Analytics"],
    color: "from-amber-600/30 to-amber-400/30",
    borderColor: "hover:border-amber-500/40",
    iconColor: "text-amber-400",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I want to build an e-commerce platform. Can we discuss online store development?",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Automate repetitive tasks and workflows. CRM integration, process automation and custom business tools that save time.",
    features: ["Workflow Automation", "CRM Integration", "Custom Tools", "Process Optimization"],
    color: "from-indigo-600/30 to-indigo-400/30",
    borderColor: "hover:border-indigo-500/40",
    iconColor: "text-indigo-400",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need business automation services. Looking to automate workflows and integrate systems.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Bespoke software solutions tailored to your unique business needs. From concept to deployment and beyond.",
    features: ["Custom Solutions", "Enterprise Apps", "Legacy Modernization", "Integration"],
    color: "from-rose-600/30 to-rose-400/30",
    borderColor: "hover:border-rose-500/40",
    iconColor: "text-rose-400",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I need custom software development. Looking for a tailored solution for my business.",
  },
  {
    icon: Zap,
    title: "MVP & Startup Development",
    desc: "Fast-track your startup idea to market. We build MVPs quickly without compromising on quality or scalability.",
    features: ["Rapid Prototyping", "MVP Development", "Scalable Architecture", "Launch Support"],
    color: "from-yellow-600/30 to-yellow-400/30",
    borderColor: "hover:border-yellow-500/40",
    iconColor: "text-yellow-400",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
    waMessage: "Hi! I'm a startup founder looking to build an MVP. Can we discuss rapid development options?",
  },
];

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 6);

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

        {/* Services count badge */}
        <Reveal className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 text-sm font-semibold text-gold-200">
            <Zap className="h-4 w-4" />
            12+ Services Across All Tech Domains
          </span>
        </Reveal>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className={`card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gold-500/15 bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${s.borderColor}`}>
                {/* Service Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} service illustration`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
                  
                  {/* Icon overlay */}
                  <span className={`absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900/90 backdrop-blur-sm ${s.iconColor} ring-1 ring-white/10 transition group-hover:scale-110`}>
                    <s.icon className="h-7 w-7" />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">{s.desc}</p>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 rounded-full border border-gold-500/20 bg-gold-500/5 px-3 py-1 text-xs font-medium text-stone-300"
                      >
                        <CheckCircle2 className="h-3 w-3 text-gold-400" />
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={waLink(s.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition hover:text-gold-300"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Enquire Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Show More/Less Button */}
        {services.length > 6 && (
          <Reveal className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-6 py-3 text-sm font-semibold text-gold-200 transition hover:bg-gold-500/20"
            >
              {showAll ? "Show Less" : `Show All ${services.length} Services`}
              <ArrowRight className={`h-4 w-4 transition-transform ${showAll ? "rotate-[-90deg]" : "rotate-90"}`} />
            </button>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal delay={200}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-gold-500/20">
            {/* Background image — covers the whole card at any height */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaboration"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/85 to-ink-950/60" />

            {/* Content defines the card height → never clipped on small screens */}
            <div className="relative px-6 py-10 sm:px-12 sm:py-16">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Not sure which service you need?
              </h3>
              <p className="mt-3 max-w-xl text-stone-300">
                Tell us about your project and we'll recommend the best approach. Free consultation, no commitment.
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-4">
                <a
                  href="#contact"
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:shadow-gold-500/40"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={waLink("Hi! I'm not sure which service I need. Can you help me understand what's best for my project?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-wa/20"
                >
                  <WhatsAppIcon className="h-5 w-5 text-wa" />
                  Quick Chat
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
