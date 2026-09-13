import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = true,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-stone-400" : "text-stone-600")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
