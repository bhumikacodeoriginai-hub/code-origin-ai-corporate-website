import { useState } from "react";
import { cn } from "../utils/cn";

/* A real technology logo served from the Simple Icons CDN (same source as the
   Tech Stack). Colourises on parent-card hover; hides itself gracefully if the
   CDN icon is ever unavailable so no broken-image icon is shown. */
export type Logo = { name: string; url: string };

export const siLogo = (slug: string, color: string): string =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export default function TechLogo({
  name,
  url,
  className,
}: Logo & { className?: string }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <img
      src={url}
      alt={name}
      title={name}
      loading="lazy"
      decoding="async"
      onError={() => setErr(true)}
      className={cn(
        "h-6 w-6 shrink-0 opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0",
        className
      )}
    />
  );
}
