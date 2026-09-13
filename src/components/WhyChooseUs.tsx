import { useState } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Clock,
  Code2,
  GitBranch,
  Globe2,
  GraduationCap,
  Headphones,
  Heart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* Reasons for BUSINESSES */
const businessReasons = [
  {
    icon: Award,
    title: "Certified Engineers",
    desc: "AWS-certified, senior engineers who've shipped production systems at scale.",
  },
  {
    icon: Timer,
    title: "On-time, On-budget",
    desc: "Transparent estimates and agile sprints that respect your timeline and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    desc: "Security-first architecture built to grow from your first user to millions.",
  },
  {
    icon: GitBranch,
    title: "Agile & Transparent",
    desc: "Clear communication with regular demos, so you're never left guessing.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated maintenance and monitoring after launch, whenever you need us.",
  },
  {
    icon: TrendingUp,
    title: "ROI Focused",
    desc: "We build technology that drives real business results and measurable growth.",
  },
];

/* Reasons for STUDENTS & FRESHERS */
const studentReasons = [
  {
    icon: Code2,
    title: "Real Project Experience",
    desc: "Work on actual client projects, not dummy assignments. Build a portfolio that matters.",
  },
  {
    icon: Users,
    title: "1-on-1 Mentorship",
    desc: "Learn directly from senior engineers who guide you through real challenges.",
  },
  {
    icon: Award,
    title: "Industry Certificate",
    desc: "Earn a recognized completion certificate that adds weight to your resume.",
  },
  {
    icon: Wallet,
    title: "Performance Stipend",
    desc: "Get rewarded for your work. Top performers earn stipends during the program.",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "Access PPOs, job referrals and interview prep on program completion.",
  },
  {
    icon: Rocket,
    title: "Latest Tech Stack",
    desc: "Work with React, Node.js, Python, AI/ML, AWS, Docker — what the industry actually uses.",
  },
];

/* Reasons for WORKING PROFESSIONALS */
const professionalReasons = [
  {
    icon: TrendingUp,
    title: "Upskill & Transition",
    desc: "Switch to in-demand tech roles with structured learning and real project exposure.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    desc: "Weekend and evening batches designed for working professionals.",
  },
  {
    icon: Target,
    title: "Career Growth",
    desc: "Gain skills that lead to promotions, new roles or starting your own venture.",
  },
  {
    icon: Globe2,
    title: "Remote Friendly",
    desc: "Learn from anywhere. Our programs are fully remote with live mentorship.",
  },
  {
    icon: Sparkles,
    title: "AI & Cloud Focus",
    desc: "Master the technologies that are reshaping every industry today.",
  },
  {
    icon: Heart,
    title: "Community Network",
    desc: "Join a network of professionals, founders and engineers for lifelong connections.",
  },
];

type AudienceTab = "business" | "students" | "professionals";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<AudienceTab>("business");

  const tabs: { id: AudienceTab; label: string; icon: typeof Briefcase }[] = [
    { id: "business", label: "For Businesses", icon: Briefcase },
    { id: "students", label: "For Students & Freshers", icon: GraduationCap },
    { id: "professionals", label: "For Working Professionals", icon: TrendingUp },
  ];

  const reasons =
    activeTab === "business"
      ? businessReasons
      : activeTab === "students"
      ? studentReasons
      : professionalReasons;

  const ctaConfig = {
    business: {
      primary: { label: "Book Free Consultation", href: "#contact" },
      secondary: {
        label: "Chat on WhatsApp",
        href: waLink("Hi! I'm interested in your services for my business. Can we discuss?"),
      },
    },
    students: {
      primary: { label: "Apply for Code Pilot", href: "#apply-internship" },
      secondary: {
        label: "Enquire on WhatsApp",
        href: waLink("Hi! I'm a student interested in the Code Pilot program. Please share details."),
      },
    },
    professionals: {
      primary: { label: "Explore Programs", href: "#internship" },
      secondary: {
        label: "Get Career Advice",
        href: waLink("Hi! I'm a working professional looking to upskill. What programs do you offer?"),
      },
    },
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.04] to-ink-950" />
      <div className="absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -left-40 bottom-1/3 -z-10 h-96 w-96 rounded-full bg-emerald-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              The right partner for <span className="text-gradient">every journey</span>
            </>
          }
          subtitle="Whether you're building a business, starting your career, or leveling up your skills — we deliver quality, transparency and real results."
        />

        {/* Audience Tabs */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-gold-500/20 bg-ink-900/60 p-2 backdrop-blur">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? tab.id === "students"
                      ? "bg-emerald-600 text-white shadow-lg"
                      : tab.id === "professionals"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-lg"
                    : "text-stone-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Reasons Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80} className="h-full">
              <div
                className={`group h-full rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  activeTab === "students"
                    ? "border-emerald-500/15 bg-emerald-500/[0.02] hover:border-emerald-500/40 hover:bg-emerald-500/[0.04]"
                    : activeTab === "professionals"
                    ? "border-blue-500/15 bg-blue-500/[0.02] hover:border-blue-500/40 hover:bg-blue-500/[0.04]"
                    : "border-gold-500/15 bg-white/[0.02] hover:border-gold-500/40 hover:bg-gold-500/[0.04]"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
                    activeTab === "students"
                      ? "bg-gradient-to-br from-emerald-600/25 to-emerald-400/25 text-emerald-300 group-hover:from-emerald-600 group-hover:to-emerald-400 group-hover:text-ink-950"
                      : activeTab === "professionals"
                      ? "bg-gradient-to-br from-blue-600/25 to-blue-400/25 text-blue-300 group-hover:from-blue-600 group-hover:to-blue-400 group-hover:text-ink-950"
                      : "bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300 group-hover:from-gold-600 group-hover:to-gold-400 group-hover:text-ink-950"
                  }`}
                >
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA based on active tab */}
        <Reveal delay={200} className="mt-12">
          <div
            className={`rounded-3xl border p-8 text-center ${
              activeTab === "students"
                ? "border-emerald-500/20 bg-gradient-to-br from-emerald-600/10 via-ink-900/50 to-ink-900/50"
                : activeTab === "professionals"
                ? "border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-ink-900/50 to-ink-900/50"
                : "border-gold-500/20 bg-gradient-to-br from-gold-600/10 via-ink-900/50 to-ink-900/50"
            }`}
          >
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              {activeTab === "business" && "Ready to build something great?"}
              {activeTab === "students" && "Ready to launch your tech career?"}
              {activeTab === "professionals" && "Ready to level up your skills?"}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-stone-400">
              {activeTab === "business" && "Let's discuss your project and show you how we can help."}
              {activeTab === "students" && "Join 100+ students who've started their journey with us."}
              {activeTab === "professionals" && "Explore flexible programs designed for your schedule."}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={ctaConfig[activeTab].primary.href}
                className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl transition ${
                  activeTab === "students"
                    ? "bg-emerald-600 text-white shadow-emerald-500/25 hover:bg-emerald-500"
                    : activeTab === "professionals"
                    ? "bg-blue-600 text-white shadow-blue-500/25 hover:bg-blue-500"
                    : "bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-gold-500/25"
                }`}
              >
                <Zap className="h-4 w-4" />
                {ctaConfig[activeTab].primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={ctaConfig[activeTab].secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-wa/20"
              >
                <WhatsAppIcon className="h-5 w-5 text-wa" />
                {ctaConfig[activeTab].secondary.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
