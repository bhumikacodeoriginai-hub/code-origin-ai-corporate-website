import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Copy,
  GraduationCap,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Rocket,
  Send,
  Sparkles,
} from "lucide-react";
import { contact, waLink } from "../data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-xl border border-gold-500/20 bg-ink-900/70 px-4 py-3.5 text-sm text-white placeholder:text-stone-500 outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-500/20";

const inputClassEmerald =
  "w-full rounded-xl border border-emerald-500/20 bg-ink-900/70 px-4 py-3.5 text-sm text-white placeholder:text-stone-500 outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-500/20";

/* ───────────────────────────────────────────────────────────
   BUSINESS CONSULTATION FORM
─────────────────────────────────────────────────────────── */
type BusinessForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialBusinessForm: BusinessForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const projectTypes = [
  "Web Application",
  "Mobile App",
  "AI / Machine Learning",
  "Cloud Solutions",
  "E-Commerce Platform",
  "Custom Software",
  "UI/UX Design",
  "Other",
];

const budgetRanges = [
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "₹10,00,000+",
  "Let's discuss",
];

const timelines = [
  "ASAP / Urgent",
  "1-2 months",
  "2-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
];

/* ───────────────────────────────────────────────────────────
   INTERNSHIP ENQUIRY FORM
─────────────────────────────────────────────────────────── */
type InternshipForm = {
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  year: string;
  track: string;
  experience: string;
  message: string;
};

const initialInternshipForm: InternshipForm = {
  name: "",
  email: "",
  phone: "",
  college: "",
  degree: "",
  year: "",
  track: "",
  experience: "",
  message: "",
};

const degrees = [
  "B.E / B.Tech",
  "MCA",
  "BCA",
  "B.Sc Computer Science",
  "M.Sc Computer Science",
  "Other",
];

const years = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "Final Year",
  "Passed Out (2024)",
  "Passed Out (2025)",
  "Passed Out (2026)",
];

const tracks = [
  "Full Stack Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Cybersecurity",
  "Frontend Engineering",
  "Backend & APIs",
  "Data Science & Analytics",
  "Digital Marketing",
];

const experienceLevels = [
  "Complete Beginner",
  "Some basics (self-taught)",
  "College projects only",
  "Personal projects",
  "Some professional experience",
];

/* ───────────────────────────────────────────────────────────
   COPY BUTTON
─────────────────────────────────────────────────────────── */
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

/* ───────────────────────────────────────────────────────────
   MAIN CONTACT COMPONENT
─────────────────────────────────────────────────────────── */
export default function Contact() {
  const [activeTab, setActiveTab] = useState<"business" | "internship">("business");

  // Auto-switch to internship tab if URL has ?tab=internship or hash is #contact-internship
  useEffect(() => {
    const checkAndSwitchTab = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get("tab");
      const hash = window.location.hash;
      
      if (tabParam === "internship" || hash === "#contact-internship" || hash === "#apply-internship") {
        setActiveTab("internship");
        // Scroll to contact section after a short delay
        setTimeout(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    
    checkAndSwitchTab();
    
    // Listen for hash changes (for in-page navigation)
    window.addEventListener("hashchange", checkAndSwitchTab);
    return () => window.removeEventListener("hashchange", checkAndSwitchTab);
  }, []);

  // Business form state
  const [bizForm, setBizForm] = useState<BusinessForm>(initialBusinessForm);
  const [bizSubmitted, setBizSubmitted] = useState(false);
  const [bizWhatsAppLink, setBizWhatsAppLink] = useState("");

  // Internship form state
  const [internForm, setInternForm] = useState<InternshipForm>(initialInternshipForm);
  const [internSubmitted, setInternSubmitted] = useState(false);
  const [internWhatsAppLink, setInternWhatsAppLink] = useState("");

  const updateBiz =
    (key: keyof BusinessForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setBizForm((f) => ({ ...f, [key]: e.target.value }));

  const updateIntern =
    (key: keyof InternshipForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setInternForm((f) => ({ ...f, [key]: e.target.value }));

  /* ─────────────────────────────────────────────────────────
     BUSINESS FORM SUBMIT — Creates WhatsApp message
  ───────────────────────────────────────────────────────── */
  const handleBusinessSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 *NEW BUSINESS ENQUIRY*
━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *Contact Details*
━━━━━━━━━━━━━━━━━━
• Name: ${bizForm.name}
• Email: ${bizForm.email}
• Phone: ${bizForm.phone || "Not provided"}
• Company: ${bizForm.company || "Not provided"}

💼 *Project Requirements*
━━━━━━━━━━━━━━━━━━
• Type: ${bizForm.projectType}
• Budget: ${bizForm.budget}
• Timeline: ${bizForm.timeline}

📝 *Project Description*
━━━━━━━━━━━━━━━━━━
${bizForm.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Source: Code Origin.ai Website
🕐 Sent: ${new Date().toLocaleString("en-IN")}
━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    setBizWhatsAppLink(waLink(message));
    setBizSubmitted(true);
  };

  /* ─────────────────────────────────────────────────────────
     INTERNSHIP FORM SUBMIT — Creates WhatsApp message
  ───────────────────────────────────────────────────────── */
  const handleInternshipSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 *NEW INTERNSHIP APPLICATION*
━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 *Personal Details*
━━━━━━━━━━━━━━━━━━
• Name: ${internForm.name}
• Email: ${internForm.email}
• Phone: ${internForm.phone}

🏫 *Education*
━━━━━━━━━━━━━━━━━━
• College: ${internForm.college}
• Degree: ${internForm.degree}
• Year: ${internForm.year}

💻 *Internship Preferences*
━━━━━━━━━━━━━━━━━━
• Track: ${internForm.track}
• Experience: ${internForm.experience}

📝 *About Me / Message*
━━━━━━━━━━━━━━━━━━
${internForm.message || "No additional message"}

━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Source: Code Origin.ai Website
🕐 Sent: ${new Date().toLocaleString("en-IN")}
━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    setInternWhatsAppLink(waLink(message));
    setInternSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-gold-600/10 blur-[130px]" />
      <div className="absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Let's <span className="text-gradient">connect</span> and build together
            </>
          }
          subtitle="Whether you have a project idea or want to start your tech career — we're here to help. Fill the form and we'll respond within 24 hours."
        />

        {/* Tab Switcher */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-gold-500/20 bg-ink-900/50 p-1.5 backdrop-blur">
            <button
              onClick={() => setActiveTab("business")}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                activeTab === "business"
                  ? "bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-lg shadow-gold-500/25"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Business Enquiry
            </button>
            <button
              onClick={() => setActiveTab("internship")}
              className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                activeTab === "internship"
                  ? "bg-gradient-to-r from-emerald-600 to-emerald-400 text-ink-950 shadow-lg shadow-emerald-500/25"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              Code Pilot Application
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact Info Sidebar */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {/* Info Card */}
              <div className="overflow-hidden rounded-3xl border border-gold-500/15 bg-gradient-to-br from-gold-500/5 to-transparent">
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-white">Quick Contact</h3>
                  <p className="mt-1 text-sm text-stone-400">Reach us directly anytime</p>
                </div>

                <div className="space-y-3 px-6 pb-6">
                  <div className="flex items-center gap-4 rounded-xl border border-gold-500/15 bg-white/[0.02] p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Phone</p>
                      <a href={contact.phoneHref} className="font-semibold text-white transition hover:text-gold-300">
                        {contact.phone}
                      </a>
                    </div>
                    <CopyButton text={contact.phone} />
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-gold-500/15 bg-white/[0.02] p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Email</p>
                      <a href={contact.gmailHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition hover:text-gold-300">
                        {contact.email}
                      </a>
                    </div>
                    <CopyButton text={contact.email} />
                  </div>

                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-wa/30 bg-wa/10 p-4 transition hover:border-wa/50 hover:bg-wa/15"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wa text-white">
                      <WhatsAppIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-stone-500">WhatsApp</p>
                      <p className="font-semibold text-white">Chat instantly</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-wa" />
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="rounded-2xl border border-gold-500/15 bg-white/[0.02] p-5">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600/25 to-gold-400/25 text-gold-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-stone-500">Office</p>
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

              {/* Why choose us mini */}
              <div className="rounded-2xl border border-gold-500/15 bg-gradient-to-br from-gold-500/5 to-transparent p-5">
                <h4 className="font-display text-sm font-bold text-white">Why Code Origin.ai?</h4>
                <ul className="mt-3 space-y-2">
                  {[
                    "11+ projects delivered successfully",
                    "100% on-time delivery track record",
                    "24/7 support & maintenance",
                    "AWS-certified engineering team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Forms */}
          <Reveal className="lg:col-span-3" delay={100}>
            {/* ═══════════════════════════════════════════════════════
                BUSINESS FORM
            ═══════════════════════════════════════════════════════ */}
            {activeTab === "business" && (
              <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/5 via-ink-900/50 to-ink-900/50 p-6 backdrop-blur sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-600 to-gold-400 text-ink-950">
                    <Rocket className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Book Free Consultation</h3>
                    <p className="text-sm text-stone-400">Tell us about your project</p>
                  </div>
                </div>

                {bizSubmitted ? (
                  <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-600/20 to-gold-400/20 text-gold-400">
                      <CheckCircle2 className="h-10 w-10" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      Your enquiry is ready!
                    </h3>
                    <p className="mt-2 max-w-sm text-stone-400">
                      Click below to send your project details directly to our WhatsApp. We'll respond within 24 hours.
                    </p>
                    <a
                      href={bizWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-wa px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-wa/25 transition hover:brightness-110"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Send via WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setBizSubmitted(false);
                        setBizForm(initialBusinessForm);
                      }}
                      className="mt-4 text-sm font-semibold text-gold-300 transition hover:text-gold-200"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBusinessSubmit} className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Full Name *</label>
                      <input
                        required
                        value={bizForm.name}
                        onChange={updateBiz("name")}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Email *</label>
                      <input
                        required
                        type="email"
                        value={bizForm.email}
                        onChange={updateBiz("email")}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Phone</label>
                      <input
                        type="tel"
                        value={bizForm.phone}
                        onChange={updateBiz("phone")}
                        placeholder="+91"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Company</label>
                      <input
                        value={bizForm.company}
                        onChange={updateBiz("company")}
                        placeholder="Your company name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Project Type *</label>
                      <select required value={bizForm.projectType} onChange={updateBiz("projectType")} className={inputClass}>
                        <option value="" disabled>Select project type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Budget Range *</label>
                      <select required value={bizForm.budget} onChange={updateBiz("budget")} className={inputClass}>
                        <option value="" disabled>Select budget</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Timeline *</label>
                      <select required value={bizForm.timeline} onChange={updateBiz("timeline")} className={inputClass}>
                        <option value="" disabled>When do you need it?</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Project Description *</label>
                      <textarea
                        required
                        rows={4}
                        value={bizForm.message}
                        onChange={updateBiz("message")}
                        placeholder="Describe your project, goals, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-gold-500/30 transition hover:shadow-gold-500/50"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        Send to WhatsApp
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="mt-3 text-center text-xs text-stone-500">
                        Your details will be formatted and sent via WhatsApp for quick response
                      </p>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════
                INTERNSHIP FORM
            ═══════════════════════════════════════════════════════ */}
            {activeTab === "internship" && (
              <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-ink-900/50 to-ink-900/50 p-6 backdrop-blur sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 text-ink-950">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">Apply for Code Pilot</h3>
                    <p className="text-sm text-stone-400">Code Pilot 2026 — Applications Open</p>
                  </div>
                </div>

                {internSubmitted ? (
                  <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600/20 to-emerald-400/20 text-emerald-400">
                      <CheckCircle2 className="h-10 w-10" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      Application ready!
                    </h3>
                    <p className="mt-2 max-w-sm text-stone-400">
                      Click below to send your application directly to our WhatsApp. Our team will contact you within 48 hours.
                    </p>
                    <a
                      href={internWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:bg-emerald-500"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Send via WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setInternSubmitted(false);
                        setInternForm(initialInternshipForm);
                      }}
                      className="mt-4 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInternshipSubmit} className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Full Name *</label>
                      <input
                        required
                        value={internForm.name}
                        onChange={updateIntern("name")}
                        placeholder="Your name"
                        className={inputClassEmerald}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Email *</label>
                      <input
                        required
                        type="email"
                        value={internForm.email}
                        onChange={updateIntern("email")}
                        placeholder="you@email.com"
                        className={inputClassEmerald}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={internForm.phone}
                        onChange={updateIntern("phone")}
                        placeholder="+91"
                        className={inputClassEmerald}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">College / University *</label>
                      <input
                        required
                        value={internForm.college}
                        onChange={updateIntern("college")}
                        placeholder="Your college name"
                        className={inputClassEmerald}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Degree *</label>
                      <select required value={internForm.degree} onChange={updateIntern("degree")} className={inputClassEmerald}>
                        <option value="" disabled>Select degree</option>
                        {degrees.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Year *</label>
                      <select required value={internForm.year} onChange={updateIntern("year")} className={inputClassEmerald}>
                        <option value="" disabled>Select year</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Preferred Track *</label>
                      <select required value={internForm.track} onChange={updateIntern("track")} className={inputClassEmerald}>
                        <option value="" disabled>Select track</option>
                        {tracks.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">Experience Level *</label>
                      <select required value={internForm.experience} onChange={updateIntern("experience")} className={inputClassEmerald}>
                        <option value="" disabled>Select experience</option>
                        {experienceLevels.map((e) => (
                          <option key={e} value={e}>{e}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium text-stone-300">About You / Why Join?</label>
                      <textarea
                        rows={4}
                        value={internForm.message}
                        onChange={updateIntern("message")}
                        placeholder="Tell us about yourself, your interests, and why you want to join Code Pilot..."
                        className={`${inputClassEmerald} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-xl shadow-emerald-500/30 transition hover:shadow-emerald-500/50"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        Send Application via WhatsApp
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-stone-500">
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="h-3 w-3 text-emerald-400" />
                          Performance-based stipend
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="h-3 w-3 text-emerald-400" />
                          Certificate on completion
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="h-3 w-3 text-emerald-400" />
                          Placement support
                        </span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
