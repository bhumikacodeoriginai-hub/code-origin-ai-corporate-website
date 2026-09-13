import { 
  Building2, 
  Briefcase, 
  ExternalLink, 
  GraduationCap, 
  Heart, 
  ShoppingBag, 
  Stethoscope, 
  TrendingUp, 
  Truck, 
  Warehouse,
  Zap,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Reveal from "./Reveal";

const industries = [
  { icon: Briefcase, name: "FinTech", color: "text-emerald-400", bg: "from-emerald-600/20 to-emerald-400/20" },
  { icon: Stethoscope, name: "HealthTech", color: "text-rose-400", bg: "from-rose-600/20 to-rose-400/20" },
  { icon: ShoppingBag, name: "E-Commerce", color: "text-amber-400", bg: "from-amber-600/20 to-amber-400/20" },
  { icon: GraduationCap, name: "EdTech", color: "text-blue-400", bg: "from-blue-600/20 to-blue-400/20" },
  { icon: Building2, name: "Enterprise", color: "text-purple-400", bg: "from-purple-600/20 to-purple-400/20" },
  { icon: Truck, name: "Logistics", color: "text-orange-400", bg: "from-orange-600/20 to-orange-400/20" },
  { icon: Warehouse, name: "Warehousing", color: "text-teal-400", bg: "from-teal-600/20 to-teal-400/20" },
  { icon: Zap, name: "Electrical", color: "text-yellow-400", bg: "from-yellow-600/20 to-yellow-400/20" },
  { icon: Heart, name: "Matrimony", color: "text-pink-400", bg: "from-pink-600/20 to-pink-400/20" },
  { icon: BookOpen, name: "Vedic Science", color: "text-orange-300", bg: "from-orange-500/20 to-orange-300/20" },
  { icon: TrendingUp, name: "SaaS", color: "text-cyan-400", bg: "from-cyan-600/20 to-cyan-400/20" },
];

/* Featured clients - real businesses we've worked with */
const featuredClients = {
  delivered: [
    {
      name: "Arjun Realty",
      url: "https://www.arjun-realty.com",
      tagline: "Premium Warehousing Infrastructure",
      description: "42 World-Class Warehouses | 4,00,000+ Sqft | India & UAE",
      trustedBy: "Amazon, Zepto, Swiggy",
      highlights: ["42 Warehouses", "4,00,000+ Sqft", "India & UAE"],
      icon: Warehouse,
      color: "from-teal-500 to-emerald-500",
      bgGlow: "bg-teal-500/20",
      since: "2024",
    },
    {
      name: "Sri Annapurneshwari Electricals",
      url: null,
      tagline: "Solar, Battery & Electrical Store",
      description: "E-commerce & Inventory Platform | Chitradurga's Finest Since 2001",
      trustedBy: "1000+ Happy Customers",
      highlights: ["Solar Panels", "Batteries & Inverters", "Since 2001"],
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      bgGlow: "bg-yellow-500/20",
      since: "2001",
    },
  ],
  inProgress: [
    {
      name: "Advaita Matrimony",
      url: null,
      tagline: "Find Your Perfect Match",
      description: "Modern Matrimonial Platform | Verified Profiles | Family-Centric",
      features: "Smart Matching · Secure Chat · Video Calls",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-500/20",
    },
    {
      name: "Srividya University",
      url: null,
      tagline: "Vedic Science Education",
      description: "Digital Learning Platform | Live Classes | Certifications",
      features: "A Decade of Wisdom · Traditional & Modern",
      icon: BookOpen,
      color: "from-orange-500 to-amber-500",
      bgGlow: "bg-orange-500/20",
    },
  ],
};

const metrics = [
  { value: "8", label: "Products Live", icon: CheckCircle2, color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  { value: "6", label: "In Development", icon: Clock, color: "text-amber-400", bgColor: "bg-amber-500/10" },
  { value: "5+", label: "Internship Tracks", icon: GraduationCap, color: "text-blue-400", bgColor: "bg-blue-500/10" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-gold-500/[0.03] to-ink-950" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              <Sparkles className="h-3.5 w-3.5" />
              Our Valued Clients
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Trusted by <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-400">
              From established businesses to emerging ventures, we build digital solutions that drive real results
            </p>
          </div>
        </Reveal>
        
        {/* Industries Pills */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry, i) => (
              <div
                key={industry.name}
                className="group flex items-center gap-2.5 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/30 hover:bg-gold-500/[0.05] hover:shadow-lg hover:shadow-gold-500/5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${industry.bg}`}>
                  <industry.icon className={`h-3.5 w-3.5 ${industry.color}`} />
                </span>
                <span className="text-xs font-semibold text-stone-300 group-hover:text-white transition-colors">{industry.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Delivered Projects Section */}
        <Reveal delay={150}>
          <div className="mt-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-emerald-500/50" />
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 ring-1 ring-emerald-500/20">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Successfully Delivered
              </span>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-emerald-500/50" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredClients.delivered.map((client) => (
                <div
                  key={client.name}
                  className="group relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] via-ink-900/80 to-ink-900/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 sm:p-8"
                >
                  {/* Decorative glow */}
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${client.bgGlow} blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-70`} />

                  {/* Status badge */}
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>

                  {/* Header */}
                  <div className="relative flex items-center gap-4">
                    <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${client.color} shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <client.icon className="h-8 w-8 text-white" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-white sm:text-xl">{client.name}</h3>
                        {client.url && (
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-stone-500 transition-colors hover:text-emerald-400"
                            aria-label={`Visit ${client.name}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm font-medium text-emerald-400">{client.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative mt-5 text-sm leading-relaxed text-stone-400">{client.description}</p>

                  {/* Highlight chips */}
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {client.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-200"
                      >
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
                    <p className="text-xs text-stone-500">
                      <span className="font-semibold text-stone-400">Trusted by:</span> {client.trustedBy}
                    </p>
                    <span className="text-xs font-medium text-stone-500">Since {client.since}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* In Progress Section */}
        <Reveal delay={200}>
          <div className="mt-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-amber-500/50" />
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-400 ring-1 ring-amber-500/20">
                <Clock className="h-3.5 w-3.5 animate-pulse" />
                Under Development
              </span>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-amber-500/50" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredClients.inProgress.map((client) => (
                <div
                  key={client.name}
                  className="group relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.05] via-ink-900/80 to-ink-900/80 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  {/* Status badge */}
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1.5 text-xs font-semibold text-amber-300 ring-1 ring-amber-500/30 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Building
                  </span>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${client.color} shadow-xl`}>
                        <client.icon className="h-7 w-7 text-white" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white sm:text-xl">{client.name}</h3>
                        <p className="text-sm font-medium text-amber-400">{client.tagline}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="mt-4 text-sm text-stone-400 leading-relaxed">{client.description}</p>
                  
                  {/* Features */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs font-medium text-stone-500">
                      <span className="text-amber-400/80">✦</span> {client.features}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={250}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {metrics.map((metric) => (
              <div 
                key={metric.label} 
                className={`flex items-center gap-3 rounded-2xl ${metric.bgColor} px-6 py-4 ring-1 ring-white/5`}
              >
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
                <span className="text-sm text-stone-300">
                  <span className={`text-lg font-bold ${metric.color}`}>{metric.value}</span> {metric.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition hover:text-gold-300"
            >
              Want to be our next success story?
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        {/* Divider line with glow */}
        <div className="mx-auto mt-16 h-px w-2/3 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </div>
    </section>
  );
}
