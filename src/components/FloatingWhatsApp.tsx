import { WhatsAppIcon } from "./icons";
import { waLink } from "../data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi Code Origin.ai! I'd like to know more about your services. Please share the details.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-wa p-3.5 shadow-2xl shadow-wa/30 transition hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-wa opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7 text-white" />
      <span className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white transition-all duration-300 group-hover:max-w-[160px] group-hover:pr-1 sm:block">
        Chat with us
      </span>
    </a>
  );
}
