import { Building2, Briefcase, ExternalLink, GraduationCap, Heart, ShoppingBag, Stethoscope, TrendingUp, Truck, Warehouse } from "lucide-react";
import Reveal from "./Reveal";

const industries = [
  { icon: Briefcase, name: "FinTech", color: "text-emerald-400", bg: "from-emerald-600/20 to-emerald-400/20" },
  { icon: Stethoscope, name: "HealthTech", color: "text-rose-400", bg: "from-rose-600/20 to-rose-400/20" },
  { icon: ShoppingBag, name: "E-Commerce", color: "text-amber-400", bg: "from-amber-600/20 to-amber-400/20" },
  { icon: GraduationCap, name: "EdTech", color: "text-blue-400", bg: "from-blue-600/20 to-blue-400/20" },
  { icon: Building2, name: "Enterprise", color: "text-purple-400", bg: "from-purple-600/20 to-purple-400/20" },
  { icon: Truck, name: "Logistics", color: "text-orange-400", bg: "from-orange-600/20 to-orange-400/20" },
  { icon: Warehouse, name: "Warehousing", color: "text-teal-400", bg: "from-teal-600/20 to-teal-400/20" },
  { icon: TrendingUp, name: "SaaS", color: "text-cyan-400", bg: "from-cyan-600/20 to-cyan-400/20" },
  { icon: Heart, name: "Startups", color: "text-pink-400", bg: "from-pink-600/20 to-pink-400/20" },
];

const metrics = [
  { value: "7", label: "Products Live", color: "text-emerald-400" },
  { value: "4", label: "In Development", color: "text-gold-400" },
  { value: "5+", label: "Internship Tracks", color: "text-blue-400" },
];

/* Featured clients - real businesses we've worked with */
const featuredClients = [
  {
    name: "Arjun Realty",
    url: "https://www.arjun-realty.com",
    description: "42 World-Class Warehouses | 4,00,000+ Sqft | India & UAE",
    trustedBy: "Amazon, Zepto, Swiggy",
    color: "from-teal-600 to-teal-400",
    textColor: "text-teal-300",
  },
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

        {/* Featured Client - Arjun Realty */}
        <Reveal delay={150}>
          <div className="mt-12">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-gold-500">
              Featured Client
            </p>
            {featuredClients.map((client) => (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto block max-w-2xl rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/[0.05] via-ink-900/50 to-ink-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10 sm:p-8"
              >
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                  {/* Logo/Icon */}
                  <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${client.color} shadow-xl`}>
                    <Warehouse className="h-8 w-8 text-white" />
                  </span>
                  
                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center gap-2 sm:justify-start">
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{client.name}</h3>
                      <ExternalLink className="h-4 w-4 text-stone-500 transition-colors group-hover:text-gold-400" />
                    </div>
                    <p className={`mt-1 text-sm font-semibold ${client.textColor}`}>{client.description}</p>
                    <p className="mt-2 text-xs text-stone-400">
                      <span className="font-semibold text-stone-300">Trusted by:</span> {client.trustedBy}
                    </p>
                  </div>
                  
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live & Delivered
                  </span>
                </div>
              </a>
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
