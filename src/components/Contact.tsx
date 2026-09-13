import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, CheckCircle2, Copy, Mail, MapPin, Navigation, Phone, Send } from "lucide-react";
import { contact, eligibilityStreams, gmailTo, mailTo, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-xl border border-gold-500/20 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-500/30";

type FormState = { name: string; email: string; phone: string; stream: string; message: string };

const initialForm: FormState = { name: "", email: "", phone: "", stream: "", message: "" };

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${text}`}
      className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold-500/20 bg-white/5 text-stone-300 transition hover:border-gold-400/50 hover:text-gold-300"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [links, setLinks] = useState({ wa: "", mail: "", gmail: "" });

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const compose = () =>
    [
      "*New Application — Code Origin.ai*",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone && `*Phone:* ${form.phone}`,
      `*Stream:* ${form.stream || "Project inquiry"}`,
      `*Message:* ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = compose();
    setLinks({
      wa: waLink(msg),
      mail: mailTo("New Application — Code Origin.ai", msg),
      gmail: gmailTo("New Application — Code Origin.ai", msg),
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient">great together</span>
            </>
          }
          subtitle="Have a project in mind, or ready to apply for a Code Pilot internship? Reach out — your message goes straight to our WhatsApp and email."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-gold-500/15">
              <img
                src="https://images.pexels.com/photos/8297442/pexels-photo-8297442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Code Origin.ai team at the office"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-gold-500/15 bg-white/[0.02] p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Phone</p>
                  <a href={contact.phoneHref} className="font-semibold text-white transition hover:text-gold-300">
                    {contact.phone}
                  </a>
                </div>
                <CopyButton text={contact.phone} />
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gold-500/15 bg-white/[0.02] p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Email</p>
                  <a
                    href={contact.emailHref}
                    className="break-all font-semibold text-white transition hover:text-gold-300"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={contact.gmailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-gold-300 transition hover:text-gold-200"
                  >
                    Open in Gmail <Navigation className="h-3 w-3" />
                  </a>
                </div>
                <CopyButton text={contact.email} />
              </div>

              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-wa/30 bg-wa/10 p-5 transition hover:border-wa/60"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wa text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-500">WhatsApp</p>
                  <p className="font-semibold text-white">{contact.phone}</p>
                </div>
              </a>

              <div className="rounded-2xl border border-gold-500/15 bg-white/[0.02] p-5">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Address</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-white">{contact.address}</p>
                    <a
                      href={contact.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition hover:text-gold-200"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Get directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={100}>
            <div className="rounded-3xl border border-gold-500/15 bg-white/[0.02] p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-wa/15 text-wa">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    Application ready to send!
                  </h3>
                  <p className="mt-2 max-w-sm text-stone-400">
                    Choose a channel below to complete your submission — it opens WhatsApp or email
                    with all your details pre-filled.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={links.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-wa/25 transition hover:brightness-110"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      WhatsApp
                    </a>
                    <a
                      href={links.mail}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <Mail className="h-5 w-5" />
                      Email App
                    </a>
                    <a
                      href={links.gmail}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-500/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <Navigation className="h-5 w-5" />
                      Gmail
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="mt-6 text-sm font-semibold text-gold-300 transition hover:text-gold-200"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-300">Full name</label>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-300">Email address</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-300">Phone number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+91"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-stone-300">Interested stream</label>
                    <select required value={form.stream} onChange={update("stream")} className={inputClass}>
                      <option value="" disabled>
                        Select a stream
                      </option>
                      {eligibilityStreams.map((s) => (
                        <option key={s.code} value={s.code}>
                          {s.code} — {s.name}
                        </option>
                      ))}
                      <option value="Other">Other / Project inquiry</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-stone-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about yourself or your project…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50 sm:w-auto"
                    >
                      Submit Application
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <p className="mt-3 text-xs text-stone-500">
                      You'll be able to send via WhatsApp, email app or Gmail on the next step.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
