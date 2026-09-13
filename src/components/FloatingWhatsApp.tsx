import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { waLink, contact } from "../data";

/* ═══════════════════════════════════════════════════════════
   FLOATING WHATSAPP BUTTON
   Professional WhatsApp integration for all devices
   Mobile & Desktop optimized
═══════════════════════════════════════════════════════════ */

// Pre-defined quick messages for different user types
const quickMessages = [
  {
    label: "Business Enquiry",
    icon: "💼",
    message: "Hi Code Origin.AI! I'm interested in discussing a business project. Please share more details about your services.",
  },
  {
    label: "Code Pilot Program",
    icon: "🎓",
    message: "Hi Code Origin.AI! I'm interested in the Code Pilot internship program. Please share the details about eligibility and how to apply.",
  },
  {
    label: "Skill Enhancement",
    icon: "💻",
    message: "Hi Code Origin.AI! I'm a working professional interested in your skill enhancement programs. Please share the available courses and schedule.",
  },
  {
    label: "Get a Quote",
    icon: "📝",
    message: "Hi Code Origin.AI! I'd like to get a quote for my project. Here are the details:\n\nProject Type:\nBudget Range:\nTimeline:\nDescription:",
  },
  {
    label: "General Enquiry",
    icon: "❓",
    message: "Hi Code Origin.AI! I have a question about your services. Can you please help?",
  },
];

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show tooltip after 5 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleMainClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);
    setIsExpanded(!isExpanded);
  };

  const handleQuickMessage = (message: string) => {
    // Create WhatsApp link and open
    const link = waLink(message);
    window.open(link, "_blank", "noopener,noreferrer");
    setIsExpanded(false);
  };

  const handleDirectChat = () => {
    const link = waLink("Hi Code Origin.AI! I'd like to know more about your services.");
    window.open(link, "_blank", "noopener,noreferrer");
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {/* ═══════════════════════════════════════════════════════
          EXPANDED MENU
      ═══════════════════════════════════════════════════════ */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 w-72 animate-[chat-in_0.2s_ease-out] gpu-accelerate">
          <div className="rounded-2xl border border-wa/30 bg-ink-900/95 shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden">
            {/* Header */}
            <div className="bg-wa px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Code Origin.AI</p>
                  <p className="text-xs text-white/80">Typically replies within 1 hour</p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/20 hover:text-white btn-press"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick message options */}
            <div className="p-3 space-y-2">
              <p className="text-xs font-medium text-stone-400 px-1 mb-2">Quick Messages:</p>
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickMessage(item.message)}
                  className="w-full flex items-center gap-3 rounded-xl border border-gold-500/15 bg-white/[0.03] px-3 py-2.5 text-left transition hover:bg-white/[0.06] hover:border-gold-500/30 btn-press"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-stone-200">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Direct chat button */}
            <div className="border-t border-wa/20 p-3">
              <button
                onClick={handleDirectChat}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-wa px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-wa/25 transition hover:brightness-110 btn-press"
              >
                <MessageCircle className="h-4 w-4" />
                Start Chat
              </button>
              <p className="mt-2 text-center text-[10px] text-stone-500">
                {contact.phone} • Mon-Sat 10AM-7PM
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
          TOOLTIP
      ═══════════════════════════════════════════════════════ */}
      {showTooltip && !isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2 animate-[chat-in_0.3s_ease-out]">
          <div className="relative rounded-xl bg-ink-800 px-4 py-2.5 shadow-xl border border-gold-500/20">
            <p className="text-sm font-medium text-white">Need help? Chat with us! 💬</p>
            <p className="text-xs text-stone-400 mt-0.5">We reply within 1 hour</p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-4 h-4 w-4 rotate-45 bg-ink-800 border-r border-b border-gold-500/20" />
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
          MAIN BUTTON
      ═══════════════════════════════════════════════════════ */}
      <button
        onClick={handleMainClick}
        aria-label="Chat with us on WhatsApp"
        aria-expanded={isExpanded}
        data-cta="whatsapp"
        data-cta-location="floating-button"
        className={`group relative flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 gpu-accelerate btn-press ${
          isExpanded
            ? "h-12 w-12 bg-ink-800 border border-gold-500/30 shadow-black/50"
            : "h-14 w-14 bg-wa shadow-wa/30 hover:scale-105 hover:shadow-wa/50"
        }`}
      >
        {/* Ping animation when not expanded */}
        {!isExpanded && (
          <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-wa opacity-30" />
        )}
        
        {/* Icon */}
        {isExpanded ? (
          <X className="relative h-5 w-5 text-stone-300" />
        ) : (
          <WhatsAppIcon className="relative h-7 w-7 text-white" />
        )}

        {/* Hover text (desktop only) */}
        {!isExpanded && (
          <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink-800 px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 sm:block">
            Chat on WhatsApp
            <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink-800" />
          </span>
        )}
      </button>

      {/* ═══════════════════════════════════════════════════════
          UNREAD BADGE (Optional - shows when closed)
      ═══════════════════════════════════════════════════════ */}
      {!isExpanded && !hasInteracted && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-lg animate-bounce-subtle">
          1
        </span>
      )}
    </div>
  );
}
