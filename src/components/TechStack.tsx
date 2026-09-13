import { useState } from "react";
import { Cpu } from "lucide-react";
import { allTech, techStack, type TechItem } from "../data";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function PlaywrightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#2EAD33"
        d="M23.996 7.462c-.056.837-.257 2.135-.716 3.85-.995 3.715-4.27 10.874-10.42 9.227-6.15-1.65-5.407-9.487-4.412-13.201.46-1.716.934-2.94 1.305-3.694.42-.853.846-.289 1.815.523.684.573 2.41 1.791 5.011 2.488 2.601.697 4.706.506 5.583.352 1.245-.219 1.897-.494 1.834.455Zm-9.807 3.863s-.127-1.819-1.773-2.286c-1.644-.467-2.613 1.04-2.613 1.04Zm4.058 4.539-7.769-2.172s.446 2.306 3.338 3.153c2.862.836 4.43-.98 4.43-.981Zm2.701-2.51s-.13-1.818-1.773-2.286c-1.644-.469-2.612 1.038-2.612 1.038ZM8.57 18.23c-4.749 1.279-7.261-4.224-8.021-7.08C.197 9.831.044 8.832.003 8.188c-.047-.73.455-.52 1.415-.354.677.118 2.3.261 4.308-.28a11.28 11.28 0 0 0 2.41-.956c-.058.197-.114.4-.17.61-.433 1.618-.827 4.055-.632 6.426-1.976.732-2.267 2.423-2.267 2.423l2.524-.715c.227 1.002.6 1.987 1.15 2.838a5.914 5.914 0 0 1-.171.049Zm-4.188-6.298c1.265-.333 1.363-1.631 1.363-1.631l-3.374.888s.745 1.076 2.01.743Z"
      />
    </svg>
  );
}

function TechMark({ item, className }: { item: TechItem; className?: string }) {
  const [err, setErr] = useState(false);
  if (item.name === "Playwright") return <PlaywrightIcon className={className} />;
  if (err)
    return (
      <span className={cn("flex items-center justify-center font-display font-bold text-gold-400", className)}>
        {item.name.charAt(0)}
      </span>
    );
  return (
    <img
      src={item.url}
      alt={item.name}
      loading="lazy"
      onError={() => setErr(true)}
      className={className}
    />
  );
}

function TechLogo({ name, url }: TechItem) {
  return (
    <div className="flex h-16 flex-col items-center justify-center gap-2 rounded-xl border border-gold-500/15 bg-ink-900/60 px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-gold-500/[0.06]">
      <TechMark item={{ name, url }} className="h-7 w-7" />
      <span className="text-xs font-medium text-stone-300">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              The <span className="text-gradient">latest technologies</span> we build with
            </>
          }
          subtitle="Our engineers and Code Pilot interns work hands-on with today's most in-demand tools — from modern frontend frameworks to AI, cloud, DevOps and automation testing."
        />

        {/* Intro with image */}
        <Reveal className="mt-14">
          <div className="grid items-center gap-8 rounded-3xl border border-gold-500/15 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-gold-500/15">
              <img
                src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Engineer working inside a modern data center"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink-950/80 px-3.5 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur">
                <Cpu className="h-3.5 w-3.5" /> Cloud & AI infrastructure
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Modern stack, <span className="text-gradient">production-ready</span>
              </h3>
              <p className="mt-4 text-stone-400">
                We stay ahead of the curve so our clients and interns learn what the industry actually
                uses today — React & Next.js, Node & Python, AI with TensorFlow, PyTorch and LLMs, and
                cloud deployment on AWS with Docker & Kubernetes, all tested with Playwright.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-stone-300">
                {["Industry-standard tools", "AI / LLM integration", "Cloud-native delivery", "CI/CD pipelines"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Marquee */}
        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...allTech, ...allTech].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap rounded-full border border-gold-500/15 bg-white/[0.03] px-5 py-2.5"
              >
                <TechMark item={t} className="h-5 w-5" />
                <span className="text-sm font-medium text-stone-300">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, gi) => (
            <Reveal key={group.category} delay={(gi % 3) * 80} className="h-full">
              <div className="h-full rounded-2xl border border-gold-500/15 bg-white/[0.02] p-6">
                <h4 className="font-display text-lg font-semibold text-gold-300">{group.category}</h4>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <TechLogo key={item.name} name={item.name} url={item.url} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
