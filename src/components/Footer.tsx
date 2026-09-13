import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { contact, navLinks } from "../data";
import { WhatsAppIcon } from "./icons";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const services = [
  "AI & Machine Learning",
  "Cloud Solutions & DevOps",
  "Web Development",
  "Mobile Apps",
  "UI / UX Design",
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: XIcon, href: "#", label: "Twitter" },
  { icon: WhatsAppIcon, href: contact.whatsappHref, label: "WhatsApp" },
  { icon: Mail, href: contact.emailHref, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              Enterprise AI and cloud solutions for businesses — and the Code Pilot program building
              the engineers of tomorrow.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/20 bg-white/5 text-stone-300 transition hover:border-gold-400/50 hover:text-gold-300"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-stone-400 transition hover:text-gold-300">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-sm text-stone-400 transition hover:text-gold-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-stone-400 transition hover:text-gold-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a href={contact.phoneHref} className="transition hover:text-gold-300">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a href={contact.emailHref} className="transition hover:text-gold-300">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span className="leading-relaxed">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-500/10 pt-8 text-sm text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Code Origin.ai — Established 2024. All rights reserved.</p>
          <p className="text-gold-500/80">www.codeoriginai.com</p>
        </div>
      </div>
    </footer>
  );
}
