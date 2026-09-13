import { Camera } from "lucide-react";
import { galleryPhotos } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* "Life at Code Origin.AI" — a continuous, auto-scrolling strip of real team
   photos. Uses the shared CSS marquee (pauses on hover); honors
   prefers-reduced-motion via the global rule in index.css. */
export default function Gallery() {
  // Duplicate the set so the marquee loops seamlessly (translateX -50%).
  const row = [...galleryPhotos, ...galleryPhotos];

  return (
    <section id="gallery" className="relative overflow-hidden py-24 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-gold-500/[0.02] to-ink-950" />
      <div className="absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Life at Code Origin.AI"
          title={
            <>
              Real people, <span className="text-gradient">real culture</span>
            </>
          }
          subtitle="Meet the team behind the work — collaboration, celebrations and the culture that powers every product we ship."
        />
      </div>

      {/* Continuous auto-scrolling photo strip */}
      <Reveal className="mt-12">
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-5 pr-5 group-hover:[animation-play-state:paused]">
            {row.map((photo, i) => (
              <figure
                key={`${photo.src}-${i}`}
                className="group/card relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl border border-gold-500/20 bg-ink-900 shadow-xl shadow-black/40 transition-colors duration-500 hover:border-gold-500/45 sm:h-64 sm:w-[26rem]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-110"
                />
                {/* Hover sheen + caption affordance */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-medium text-gold-200 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover/card:opacity-100">
                  <Camera className="h-3 w-3" />
                  Code Origin.AI
                </span>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
