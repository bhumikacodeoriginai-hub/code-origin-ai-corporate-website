import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import airaAvatar from "../assets/aira-avatar.jpg";
import { contact, waLink } from "../data";
import { WhatsAppIcon } from "./icons";

type Msg = { role: "bot" | "user"; text: string };

const suggestions = [
  "Internship details",
  "Courses offered",
  "Fees & stipend",
  "Eligibility",
  "Tech stack",
  "Contact info",
];

function getReply(raw: string): string {
  const t = raw.toLowerCase().trim();

  if (/^(hi|hii+|hello|hey|namaste|namaskar|hai|hola)\b/.test(t) || /good (morning|afternoon|evening)/.test(t)) {
    return "Hello! 👋 I'm AIRA — your AI assistant at Code Origin.ai.\n\nI can help with:\n• Our AI & cloud services\n• Code Pilot internship\n• Courses, eligibility & stipend\n• Applying & contact info\n\nWhat would you like to know?";
  }
  if (/(who are you|your name|what is aira|about you|are you)/.test(t) || t === "aira") {
    return "I'm AIRA 🤖 — Code Origin.ai's virtual assistant.\n\nI'm here 24/7 to answer questions about our services, projects and the Code Pilot internship program. Just type your question!";
  }
  if (/(cyber|security|hacking|ethical)/.test(t)) {
    return "🛡️ Cybersecurity — one of our Code Pilot tracks!\n\nYou'll learn:\n• Network & web security\n• Ethical hacking & pentesting\n• Secure coding & OWASP\n\nOpen to Engineering, MCA, BCA, B.Sc CS & M.Sc CS graduates. Want to apply?";
  }
  if (/(digital marketing|marketing|seo|social media|ads|campaign)/.test(t)) {
    return "📈 Digital Marketing — part of Code Pilot!\n\nYou'll master:\n• SEO & content marketing\n• Social media & paid ads\n• Analytics & funnels\n\nOpen to all graduate streams. Interested in joining?";
  }
  if (/(test|qa|playwright|selenium|automation|cypress)/.test(t)) {
    return "🧪 Automation Testing & QA — a core part of what we teach.\n\nOur stack includes Playwright, Selenium, Cypress, Jest & Postman. Interns write real end-to-end tests on live projects. Want the full tech stack list?";
  }
  if (/(stipend|salary|paid|fee|fees|cost|price|charge|money|free|payment)/.test(t)) {
    return "💰 Stipend & fees:\n\n• Internship: performance-based stipend\n• Program: affordable & industry-focused\n• No hidden costs\n\nTop performers also earn PPOs. For exact current details, message us on WhatsApp or email — happy to share!";
  }
  if (/(eligible|eligibility|qualification|who can|degree|graduate|mca|bca|bsc|msc|btech|engineering)/.test(t)) {
    return "🎓 Eligibility — Code Pilot is open to graduates & final-year students in:\n\n• B.E / B.Tech (Engineering)\n• MCA\n• BCA\n• B.Sc Computer Science\n• M.Sc Computer Science\n\nNo prior experience required!";
  }
  if (/(course|track|program|training|syllabus|curriculum)/.test(t)) {
    return "📚 Code Pilot courses (8 tracks):\n\n1. Full Stack Development\n2. AI & Machine Learning\n3. Cloud & DevOps\n4. Cybersecurity\n5. Frontend Engineering\n6. Backend & APIs\n7. Data Science & Analytics\n8. Digital Marketing\n\nWhich one interests you?";
  }
  if (/(duration|how long|period|months|timeline)/.test(t)) {
    return "⏱️ The Code Pilot internship runs for 3 to 6 months, depending on your chosen track, in remote or hybrid mode.";
  }
  if (/(certificate|certification|letter)/.test(t)) {
    return "📜 Yes! On completion you receive:\n\n• Industry-recognized certificate\n• Letter of recommendation\n• Real project portfolio\n\nGreat for your resume!";
  }
  if (/(placement|job|career|hire|ppo|offer|employ)/.test(t)) {
    return "💼 Career support:\n\n• Pre-placement offers (PPOs)\n• Job referrals\n• Interview prep & resume help\n\nMany Code Pilot alumni now work as engineers. Ready to start?";
  }
  if (/(internship|intern)/.test(t)) {
    return "🚀 Code Pilot Internship 2026 — Applications Open!\n\n• Real projects, senior mentorship\n• 3–6 months, remote/hybrid\n• Performance-based stipend\n• Certificate + placement support\n\nWant me to share how to apply?";
  }
  if (/(apply|application|register|join|enroll|enrol)/.test(t)) {
    return "✅ Applying is easy!\n\n1. Fill the contact form on this page\n2. Or WhatsApp us directly\n3. Or email your resume to " + contact.email + "\n\nOur team will reach out within 24–48 hours!";
  }
  if (/(tech|technology|stack|language|framework|learn|tools)/.test(t)) {
    return "🧰 We work with the latest stack:\n\n• React, Next.js, TypeScript, Tailwind\n• Node.js, Python, Django, FastAPI\n• TensorFlow, PyTorch, OpenAI, LangChain\n• AWS, Docker, Kubernetes\n• Playwright, Selenium (testing)\n\nPlus Flutter for mobile & Figma for design.";
  }
  if (/(project|portfolio|work|case study|delivered|deployment)/.test(t)) {
    return "📦 Our work: 10+ projects delivered, 6 live deployments and 4 in development across FinTech, HealthTech, E-Commerce, EdTech, AI & more. Check the 'Projects' section above!";
  }
  if (/(contact|email|phone|mobile|address|location|where|office|reach)/.test(t)) {
    return "📍 Contact us:\n\n📞 Phone: " + contact.phone + "\n✉️ Email: " + contact.email + "\n🏢 " + contact.address + "\n\nOr tap the WhatsApp button below!";
  }
  if (/(whatsapp|\bwa\b|chat on whatsapp)/.test(t)) {
    return "💬 You can reach us instantly on WhatsApp! Tap the green WhatsApp button at the bottom-right of the screen, or use the contact section.";
  }
  if (/(timing|hours|open|working)/.test(t)) {
    return "🕒 We're available Monday to Saturday, 10:00 AM – 7:00 PM (IST). AIRA here is available 24/7 for instant answers!";
  }
  if (/(remote|online|offline|mode|work from)/.test(t)) {
    return "🏡 The Code Pilot internship is available in Remote & Hybrid modes, so you can join from anywhere. We're based in Chitradurga, Karnataka.";
  }
  if (/(service|offer|what (can|do) you)/.test(t)) {
    return "🛠️ Our services:\n\n• AI & Machine Learning\n• Cloud Solutions & DevOps\n• Web & Mobile Development\n• UI/UX Design\n• E-Commerce\n• Automation Testing & QA\n\nWhat are you building?";
  }
  if (/(\bai\b|artificial intelligence|machine learning|cloud)/.test(t)) {
    return "🤖 AI & Cloud are our specialty!\n\nWe build chatbots, LLM apps, predictive models and cloud-native systems on AWS. Interns learn these hands-on through Code Pilot.";
  }
  if (/(about|company|code origin|who are we)/.test(t)) {
    return "🏢 Code Origin.ai is an enterprise AI & cloud solutions company (Est. 2024). We build real systems for businesses and train engineers through Code Pilot.\n\n'Build Real Systems. Start Your Career.'";
  }
  if (/(thank|thanks|thx|great|awesome|nice|helpful)/.test(t)) {
    return "You're welcome! 😊 Anything else I can help you with?";
  }
  if (/(bye|goodbye|see you)/.test(t)) {
    return "Goodbye! 👋 It was great chatting. Feel free to come back anytime — AIRA is always here!";
  }
  if (/(human|agent|talk to|support|person|representative)/.test(t)) {
    return "Of course! 🙌 You can talk to our team directly:\n\n📞 " + contact.phone + "\n✉️ " + contact.email + "\n\nOr tap the WhatsApp button below — a human will reply shortly.";
  }
  return "Thanks for your message! 🤔 I might not have caught that one.\n\nYou can ask me about services, the Code Pilot internship, courses, fees, eligibility, tech stack or contact info.\n\nFor anything specific, message us on WhatsApp or email " + contact.email + " and our team will help you right away!";
}

export default function Aira() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi, I'm AIRA 👋 — your AI assistant at Code Origin.ai.\n\nAsk me anything about our services, projects or the Code Pilot internship!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getReply(clean) }]);
      setTyping(false);
    }, 850 + Math.random() * 500);
  };

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Chat with AIRA"
          className="group fixed bottom-5 left-5 z-50 flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-ink-900/90 p-1.5 pr-4 shadow-2xl shadow-black/50 backdrop-blur-xl transition hover:scale-105 hover:border-gold-400/50 sm:bottom-7 sm:left-7"
        >
          <span className="relative">
            <img
              src={airaAvatar}
              alt="AIRA — AI Assistant"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-500/50"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-ink-900" />
          </span>
          <span className="text-left">
            <span className="block text-sm font-bold leading-none text-white">AIRA</span>
            <span className="mt-0.5 block text-[11px] font-medium text-gold-300">AI Assistant</span>
          </span>
          <Sparkles className="h-4 w-4 text-gold-400" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-5 left-5 z-50 flex max-w-sm flex-col overflow-hidden rounded-3xl border border-gold-500/25 bg-ink-900/95 shadow-2xl shadow-black/60 backdrop-blur-xl sm:bottom-7 sm:left-7 w-[calc(100vw-2.5rem)] animate-[chat-in_0.3s_ease-out]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gold-500/15 bg-gradient-to-r from-gold-600/25 via-gold-500/10 to-transparent px-4 py-3">
            <span className="relative">
              <img
                src={airaAvatar}
                alt="AIRA"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-gold-500/40"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-ink-900" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-bold text-white">AIRA</p>
              <p className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Online — replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" style={{ maxHeight: "52vh" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex items-end gap-2"}
              >
                {m.role === "bot" && (
                  <img
                    src={airaAvatar}
                    alt=""
                    className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-gold-500/40"
                  />
                )}
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[80%] whitespace-pre-line rounded-2xl rounded-br-md bg-gradient-to-r from-gold-600 to-gold-500 px-4 py-2.5 text-sm text-ink-950"
                      : "max-w-[82%] whitespace-pre-line rounded-2xl rounded-bl-md border border-gold-500/15 bg-white/[0.04] px-4 py-2.5 text-sm text-stone-200"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <img
                  src={airaAvatar}
                  alt=""
                  className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-gold-500/40"
                />
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-gold-500/15 bg-white/[0.04] px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-400" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-400 [animation-delay:0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-400 [animation-delay:0.3s]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div className="flex gap-2 overflow-x-auto px-4 pb-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="shrink-0 rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1.5 text-xs font-medium text-gold-200 transition hover:bg-gold-500/20"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-gold-500/15 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-full border border-gold-500/20 bg-ink-800/60 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 outline-none transition focus:border-gold-400/60"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-lg shadow-gold-500/25 transition hover:shadow-gold-500/50"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>

          {/* Footer action */}
          <a
            href={waLink("Hi Code Origin.ai! I'd like to talk to your team.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-gold-500/10 bg-wa/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-wa/20"
          >
            <WhatsAppIcon className="h-4 w-4 text-wa" />
            Prefer to chat with a human? WhatsApp us
          </a>
        </div>
      )}
    </>
  );
}
