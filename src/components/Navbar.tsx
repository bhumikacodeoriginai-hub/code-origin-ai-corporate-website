import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import Logo from "./Logo";
import { company, contact, navLinks } from "../data";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gold-500/15 bg-ink-950/90 shadow-lg shadow-black/40 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* Top utility bar */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-gold-500/10 bg-ink-950/95 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 text-xs text-stone-400 sm:px-8">
          <div className="flex items-center gap-6">
            <a href={contact.phoneHref} className="flex items-center gap-1.5 transition hover:text-gold-300">
              <Phone className="h-3.5 w-3.5 text-gold-500" />
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-1.5 transition hover:text-gold-300">
              <Mail className="h-3.5 w-3.5 text-gold-500" />
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-500" />
              Chitradurga, Karnataka
            </span>
            <span className="flex items-center gap-1.5 font-medium text-gold-400" title="Registered with the Ministry of Corporate Affairs, Govt. of India">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
              CIN: {company.cin}
            </span>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all sm:px-8",
          scrolled && "py-3"
        )}
      >
        <a href="#home" aria-label="Code Origin.AI home">
          <Logo />
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/5 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            data-cta="start-project"
            data-cta-location="navbar"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-gold-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-500/40 active:scale-[0.97]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/20 bg-white/5 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold-500/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-stone-200 transition hover:bg-white/5 hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-gold-500/10 pt-3 text-sm text-stone-400">
              <a href={contact.phoneHref} data-cta="phone" data-cta-location="navbar-mobile" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-500" /> {contact.phone}
              </a>
              <a href={contact.emailHref} data-cta="email" data-cta-location="navbar-mobile" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-500" /> {contact.email}
              </a>
              <span className="mt-1 flex items-start gap-2 text-xs text-gold-400">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>Registered Company (MCA) · CIN: {company.cin}</span>
              </span>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-cta="start-project"
              data-cta-location="navbar-mobile"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-5 py-3 text-sm font-semibold text-ink-950 transition active:scale-[0.98]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
