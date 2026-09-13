import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import { company, contact, navLinks, socials } from "../data";
import { WhatsAppIcon } from "./icons";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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

const socialLinks = [
  { icon: InstagramIcon, href: socials.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: socials.linkedin, label: "LinkedIn" },
  { icon: GithubIcon, href: socials.github, label: "GitHub" },
  { icon: XIcon, href: socials.twitter, label: "Twitter" },
  { icon: WhatsAppIcon, href: contact.whatsappHref, label: "WhatsApp" },
  { icon: Mail, href: contact.gmailHref, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/15 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              Your trusted technology partner for AI, cloud and custom software solutions. We help
              businesses grow and train the next generation of engineers through Code Pilot.
            </p>

            {/* Registered company trust badge — MCA (Govt. of India) */}
            <div className="mt-6 max-w-sm rounded-xl border border-gold-500/25 bg-gold-500/[0.05] px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold-300">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Registered Company — Govt. of India (MCA)
              </div>
              <p className="mt-2 text-xs text-stone-300">{company.registeredName}</p>
              <p className="mt-1 text-xs text-stone-400">
                CIN:{" "}
                <span className="select-all font-mono font-semibold tracking-wide text-stone-100">
                  {company.cin}
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/20 bg-white/5 text-stone-300 transition hover:border-gold-400/50 hover:bg-gold-500/10 hover:text-gold-300"
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
                <a href={contact.gmailHref} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-300">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="leading-relaxed transition hover:text-gold-300">
                  {contact.address}
                </a>
              </li>
            </ul>

            {/* Quick action buttons */}
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-cta-location="footer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-wa/15 px-4 py-2.5 text-sm font-semibold text-wa transition hover:bg-wa/25"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={contact.gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="email"
                data-cta-location="footer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold-500/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:bg-gold-500/10 hover:text-gold-300"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Social links row for mobile */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-gold-500/10 pt-8 md:hidden">
          {socialLinks.map((s) => (
            <a
              key={`mobile-${s.label}`}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/20 bg-white/5 text-stone-300 transition active:scale-95 hover:border-gold-400/50 hover:bg-gold-500/10 hover:text-gold-300"
            >
              <s.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gold-500/10 pt-8 text-sm text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.legalName} · CIN: {company.cin} — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-400">
              @codeoriginai
            </a>
            <span className="text-gold-500/80">www.codeoriginai.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
