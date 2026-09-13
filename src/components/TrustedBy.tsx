import { Building2, Briefcase, GraduationCap, Heart, ShoppingBag, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";

const industries = [
  { icon: Briefcase, name: "FinTech", color: "text-emerald-400" },
  { icon: Stethoscope, name: "HealthTech", color: "text-rose-400" },
  { icon: ShoppingBag, name: "E-Commerce", color: "text-amber-400" },
  { icon: GraduationCap, name: "EdTech", color: "text-blue-400" },
  { icon: Building2, name: "Enterprise", color: "text-purple-400" },
  { icon: Heart, name: "Startups", color: "text-pink-400" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
            Trusted by businesses across industries
          </p>
        </Reveal>
        
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className="group flex items-center gap-3 rounded-full border border-gold-500/15 bg-white/[0.02] px-5 py-3 transition duration-300 hover:border-gold-500/30 hover:bg-gold-500/[0.04]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <industry.icon className={`h-5 w-5 ${industry.color}`} />
                <span className="text-sm font-medium text-stone-300">{industry.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm text-stone-400">6 products live in production</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-gold-400" />
              <span className="text-sm text-stone-400">4 more in active development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-sm text-stone-400">5+ internship streams</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
