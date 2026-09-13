import { Building2, Briefcase, GraduationCap, Heart, ShoppingBag, Stethoscope, TrendingUp, Truck } from "lucide-react";
import Reveal from "./Reveal";

const industries = [
  { icon: Briefcase, name: "FinTech", color: "text-emerald-400", bg: "from-emerald-600/20 to-emerald-400/20" },
  { icon: Stethoscope, name: "HealthTech", color: "text-rose-400", bg: "from-rose-600/20 to-rose-400/20" },
  { icon: ShoppingBag, name: "E-Commerce", color: "text-amber-400", bg: "from-amber-600/20 to-amber-400/20" },
  { icon: GraduationCap, name: "EdTech", color: "text-blue-400", bg: "from-blue-600/20 to-blue-400/20" },
  { icon: Building2, name: "Enterprise", color: "text-purple-400", bg: "from-purple-600/20 to-purple-400/20" },
  { icon: Truck, name: "Logistics", color: "text-orange-400", bg: "from-orange-600/20 to-orange-400/20" },
  { icon: TrendingUp, name: "SaaS", color: "text-cyan-400", bg: "from-cyan-600/20 to-cyan-400/20" },
  { icon: Heart, name: "Startups", color: "text-pink-400", bg: "from-pink-600/20 to-pink-400/20" },
];

const metrics = [
  { value: "6", label: "Products Live", color: "text-emerald-400" },
  { value: "4", label: "In Development", color: "text-gold-400" },
  { value: "5+", label: "Internship Tracks", color: "text-blue-400" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.02] to-ink-950" />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
            Trusted Across Industries
          </p>
        </Reveal>
        
        {/* Industries */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className="group flex items-center gap-3 rounded-2xl border border-gold-500/10 bg-white/[0.02] px-5 py-3.5 transition duration-300 hover:-translate-y-1 hover:border-gold-500/30 hover:bg-gold-500/[0.04]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${industry.bg}`}>
                  <industry.icon className={`h-5 w-5 ${industry.color}`} />
                </span>
                <span className="text-sm font-semibold text-stone-200">{industry.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex items-center gap-3">
                <span className={`flex h-3 w-3 rounded-full ${metric.color.replace('text-', 'bg-')}`} />
                <span className="text-sm text-stone-400">
                  <span className={`font-bold ${metric.color}`}>{metric.value}</span> {metric.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Divider line with glow */}
        <div className="mx-auto mt-12 h-px w-1/2 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>
    </section>
  );
}
