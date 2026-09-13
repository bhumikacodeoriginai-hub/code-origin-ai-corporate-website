import { Bot, Cloud, Globe, Palette, ShoppingBag, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Bot,
    title: "AI & Machine Learning",
    desc: "Chatbots, recommendation engines and intelligent automation powered by the latest AI models.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    desc: "Cloud architecture, CI/CD pipelines and infrastructure that scale reliably with your growth.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance websites and web apps built with modern, scalable frontend and backend stacks.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with a native feel using React Native and Flutter.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Intuitive, beautiful interfaces designed around real users and measurable engagement.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    desc: "Full-featured storefronts with payments, inventory, analytics and admin dashboards.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Full-cycle services, from <span className="text-gradient">idea to launch</span>
            </>
          }
          subtitle="We cover the entire product lifecycle so you can focus on growing your business while we handle the technology."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group relative h-full rounded-2xl border border-gold-500/15 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-gold-500/[0.04]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300 transition group-hover:from-gold-600 group-hover:to-gold-400 group-hover:text-ink-950">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
