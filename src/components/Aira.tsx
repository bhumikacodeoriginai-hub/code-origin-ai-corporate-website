import { useEffect, useRef, useState, useCallback } from "react";
import { Send, Sparkles, X, Bot, User, Zap, Clock, MessageCircle } from "lucide-react";
import airaAvatar from "../assets/aira-avatar.jpg";
import { contact, waLink, EMAIL } from "../data";
import { WhatsAppIcon } from "./icons";

/* ═══════════════════════════════════════════════════════════
   AIRA - AI-Powered Virtual Assistant
   Professional chatbot for Code Origin.ai
   Handles: Clients, Students, Freshers, Working Professionals
═══════════════════════════════════════════════════════════ */

type Msg = { role: "bot" | "user"; text: string; timestamp: Date };

type UserType = "unknown" | "client" | "student" | "fresher" | "professional";

interface ChatState {
  userType: UserType;
  name: string | null;
  context: string[];
}

/* ═══════════════════════════════════════════════════════════
   QUICK SUGGESTIONS FOR DIFFERENT USER TYPES
═══════════════════════════════════════════════════════════ */

const initialSuggestions = [
  "I'm a business client",
  "I'm a student",
  "I'm a fresher",
  "I'm a working professional",
  "Services offered",
  "Contact info",
];

const clientSuggestions = [
  "Get a quote",
  "View portfolio",
  "Book consultation",
  "Tech stack",
  "Timeline & process",
  "Support options",
];

const studentSuggestions = [
  "Code Pilot details",
  "Tracks available",
  "Eligibility",
  "Stipend info",
  "How to apply",
  "Certificate",
];

const fresherSuggestions = [
  "Job opportunities",
  "Code Pilot program",
  "Skills required",
  "Career guidance",
  "Portfolio help",
  "Interview prep",
];

const professionalSuggestions = [
  "Skill Enhancement",
  "Advanced courses",
  "Project experience",
  "Flexible schedule",
  "Certification",
  "Career switch",
];

/* ═══════════════════════════════════════════════════════════
   INTELLIGENT RESPONSE ENGINE
═══════════════════════════════════════════════════════════ */

function detectUserType(text: string): UserType | null {
  const t = text.toLowerCase();
  
  if (/(business|client|company|startup|enterprise|ceo|founder|manager|owner|hiring|project for|build for|develop for)/i.test(t)) {
    return "client";
  }
  if (/(student|college|university|studying|btech|bca|mca|bsc|msc|final year|2nd year|3rd year|1st year)/i.test(t)) {
    return "student";
  }
  if (/(fresher|fresh graduate|just graduated|passed out|looking for job|first job|no experience|entry level)/i.test(t)) {
    return "fresher";
  }
  if (/(working professional|employed|job|career switch|upskill|currently working|experience|years of|senior|junior developer|software engineer)/i.test(t)) {
    return "professional";
  }
  return null;
}

function getReply(raw: string, state: ChatState): { text: string; newState: Partial<ChatState> } {
  const t = raw.toLowerCase().trim();
  let newState: Partial<ChatState> = {};

  // Detect and set user type if not already set
  const detectedType = detectUserType(t);
  if (detectedType && state.userType === "unknown") {
    newState.userType = detectedType;
  }

  const userType = newState.userType || state.userType;

  /* ─────────────────────────────────────────────────────────
     GREETINGS & INTRODUCTIONS
  ───────────────────────────────────────────────────────── */
  
  if (/^(hi|hii+|hello|hey|namaste|namaskar|hai|hola|good\s*(morning|afternoon|evening|day))\b/.test(t)) {
    return {
      text: `Hello! 👋 Welcome to Code Origin.ai — I'm AIRA, your AI assistant.

I'm here to help you 24/7 with:
• 💼 **Business clients** — Custom software, AI & cloud solutions
• 🎓 **Students** — Code Pilot internship program
• 🚀 **Freshers** — Career guidance & job opportunities  
• 💻 **Working professionals** — Skill enhancement courses

Who am I speaking with today? Just tell me a bit about yourself, or pick a quick option below!`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     USER TYPE IDENTIFICATION
  ───────────────────────────────────────────────────────── */

  if (/(i('m| am) a (business|client)|business client|have a project|need.*build|want.*develop|looking for.*company)/i.test(t)) {
    return {
      text: `Excellent! 💼 Welcome, valued business partner!

I'm here to help you explore how Code Origin.ai can bring your vision to life.

**What we offer businesses:**
• 🤖 AI & Machine Learning solutions
• ☁️ Cloud architecture & DevOps
• 🌐 Custom web & mobile apps
• 🛒 E-commerce platforms
• 🎨 UI/UX design
• 🧪 QA & automation testing

**Our process:**
1. Free consultation call
2. Detailed proposal & timeline
3. Agile development with weekly updates
4. Launch & ongoing support

Would you like to:
→ **Get a free quote** for your project
→ **See our portfolio** of completed work
→ **Book a consultation** call
→ **Learn about our tech stack**`,
      newState: { userType: "client" }
    };
  }

  if (/(i('m| am) a student|i('m| am) studying|college student|university)/i.test(t)) {
    return {
      text: `Great to meet you! 🎓 Welcome, future tech star!

As a student, you have an amazing opportunity with our **Code Pilot Program** — a hands-on internship where you'll work on real industry projects.

**Why students love Code Pilot:**
• 💻 Work on live client projects (not dummy assignments)
• 👨‍🏫 1-on-1 mentorship from senior engineers
• 📜 Industry-recognized certificate
• 💰 Performance-based stipend
• 🏢 Placement assistance & PPO opportunities

**8 Specialized Tracks:**
1. Full Stack Development
2. AI & Machine Learning
3. Cloud & DevOps
4. Cybersecurity
5. Frontend Engineering
6. Backend & APIs
7. Data Science & Analytics
8. Digital Marketing

Which track interests you? Or would you like to know about eligibility & how to apply?`,
      newState: { userType: "student" }
    };
  }

  if (/(i('m| am) a fresher|just graduated|fresh graduate|recently passed|looking for.*first.*job|no experience)/i.test(t)) {
    return {
      text: `Welcome! 🚀 Being a fresher is exciting — you're at the start of an amazing journey!

**How Code Origin.ai helps freshers:**

**Option 1: Code Pilot Program (Recommended)**
→ Gain 3-6 months of real project experience
→ Build a professional portfolio
→ Get mentored by industry experts
→ Certificate + Letter of Recommendation
→ High chances of placement/PPO

**Option 2: Direct Opportunities**
→ We occasionally hire freshers with strong fundamentals
→ Requires good DSA, coding skills & eagerness to learn

**What we look for:**
• Passion for technology
• Willingness to learn
• Basic programming knowledge
• Good communication skills

Would you like to:
→ Learn more about **Code Pilot** (highly recommended for freshers)
→ Know what **skills to build**
→ Get **career guidance**
→ Tips for **building your portfolio**`,
      newState: { userType: "fresher" }
    };
  }

  if (/(i('m| am) a (working professional|professional)|currently working|employed|career switch|want to upskill|years of experience)/i.test(t)) {
    return {
      text: `Welcome! 💻 Great to connect with a fellow professional!

We understand the unique challenges of upskilling while working. That's why we created our **Skill Enhancement Programs** specifically for working professionals.

**What makes our programs different:**
• 🕐 **Flexible timing** — weekend batches & self-paced options
• 💼 **Real projects** — not just theory, actual client work
• 🎯 **Industry-relevant** — skills that are in demand NOW
• 📈 **Career advancement** — many alumni got promotions/switches

**Popular tracks for professionals:**
1. **AI & Machine Learning** — The hottest skill in 2026
2. **Cloud & DevOps** — AWS, Docker, Kubernetes
3. **Full Stack Development** — React, Node, TypeScript
4. **Data Science** — Python, ML, Analytics

**Program highlights:**
• 3-6 month flexible duration
• Live project experience
• Certificate recognized by industry
• Networking with peers

What's your current role? I can suggest the best track for your career goals!`,
      newState: { userType: "professional" }
    };
  }

  /* ─────────────────────────────────────────────────────────
     BUSINESS/CLIENT SPECIFIC QUERIES
  ───────────────────────────────────────────────────────── */

  if (/(quote|estimate|pricing|cost|price|how much|budget|rate)/i.test(t)) {
    if (userType === "client" || /(project|build|develop|website|app|software)/i.test(t)) {
      return {
        text: `💰 **Project Pricing at Code Origin.ai**

We provide **transparent, value-based pricing** tailored to your specific needs.

**Typical budget ranges:**
• Simple website/landing page: ₹30,000 - ₹80,000
• Web application: ₹1,00,000 - ₹5,00,000
• Mobile app (single platform): ₹1,50,000 - ₹4,00,000
• Mobile app (cross-platform): ₹2,50,000 - ₹6,00,000
• AI/ML solution: ₹3,00,000 - ₹10,00,000+
• E-commerce platform: ₹1,50,000 - ₹5,00,000
• Enterprise software: Custom quote

**What's included:**
✓ Free initial consultation
✓ Detailed proposal with timeline
✓ UI/UX design
✓ Development & testing
✓ Deployment & launch support
✓ 30-day post-launch support

**How to get an accurate quote:**
1. Fill the Business Enquiry form on this page, OR
2. WhatsApp us your requirements, OR
3. Book a free 30-min consultation call

Shall I help you get started with a quote?`,
        newState
      };
    }
  }

  if (/(portfolio|work|projects|case study|delivered|previous work|examples)/i.test(t)) {
    return {
      text: `📦 **Our Portfolio — 14+ Projects Delivered**

**Live Deployments (8):**

🏭 **Arjun Realty** — Real Estate / Warehousing
→ Corporate website & warehouse management
→ 42 warehouses across India & UAE
→ Trusted by Amazon, Zepto, Swiggy
→ Visit: arjun-realty.com

⚡ **Sri Annapurneshwari Electricals** — Electrical / Retail
→ E-commerce & inventory management platform
→ Trusted electrical store since 2001
→ Stack: React, Node.js, MongoDB

🏥 **MediCare+** — HealthTech
→ Telemedicine platform with appointment booking
→ Stack: Next.js, NestJS, MongoDB

📊 **FinTrack Pro** — FinTech
→ Personal finance & expense management
→ Stack: React, Node.js, PostgreSQL

🛍️ **ShopSphere** — E-Commerce
→ Scalable marketplace with Stripe payments
→ Stack: React, Express, Stripe API

🎓 **LearnHub** — EdTech
→ LMS with live classes & certifications
→ Stack: React, Django, PostgreSQL

🍔 **FoodExpress** — Food Delivery
→ Real-time order tracking app
→ Stack: React Native, Node.js, Firebase

🏠 **RealtyPro** — Real Estate
→ Property listing with virtual tours
→ Stack: Next.js, PostgreSQL, AWS

**In Development (6):**
💍 **Advaita Matrimony** — Modern matrimonial platform
🕉️ **Srividya University** — Vedic science learning platform
• GenAI Assistant (AI/ML)
• HR Suite (Enterprise SaaS)
• Logistics Tracker
• Cloud Analytics Suite

Scroll up to the **Projects** section to see more details, or would you like me to explain any specific project?`,
      newState
    };
  }

  if (/(consultation|consult|meeting|call|discuss|talk to team|schedule)/i.test(t)) {
    return {
      text: `📞 **Book a Free Consultation**

We offer a **free 30-minute consultation** to understand your project needs.

**What happens in the call:**
1. We listen to your vision & requirements
2. Discuss technical approach & feasibility
3. Provide rough timeline & budget estimate
4. Answer all your questions

**How to book:**

**Option 1: WhatsApp (Fastest)**
→ Tap the WhatsApp button and say "I'd like to book a consultation"
→ We'll respond within 1-2 hours

**Option 2: Contact Form**
→ Fill the "Business Enquiry" form on this page
→ Select your project type & timeline
→ We'll call you within 24 hours

**Option 3: Direct Call**
→ Call us at ${contact.phone}
→ Available Mon-Sat, 10 AM - 7 PM IST

**Option 4: Email**
→ Send details to ${EMAIL}
→ Response within 24-48 hours

Which method works best for you?`,
      newState
    };
  }

  if (/(timeline|how long|duration|delivery|when.*ready|deadline)/i.test(t) && (userType === "client" || /(project|build|develop)/i.test(t))) {
    return {
      text: `⏱️ **Project Timelines at Code Origin.ai**

**Typical delivery timelines:**

• **Landing page / Simple website:** 1-2 weeks
• **Corporate website:** 2-4 weeks
• **Web application (MVP):** 6-10 weeks
• **Full web application:** 3-5 months
• **Mobile app (single platform):** 8-12 weeks
• **Mobile app (cross-platform):** 3-4 months
• **AI/ML solution:** 2-6 months (depends on complexity)
• **E-commerce platform:** 2-3 months
• **Enterprise software:** 4-8 months

**Our development process:**
1. **Discovery (1 week)** — Requirements & planning
2. **Design (1-2 weeks)** — UI/UX wireframes & mockups
3. **Development (varies)** — Agile sprints with weekly demos
4. **Testing (1-2 weeks)** — QA, bug fixes, optimization
5. **Launch (1 week)** — Deployment & go-live support

**We offer:**
✓ Weekly progress updates
✓ Access to project dashboard
✓ Flexible milestone-based payments
✓ Rush delivery available (additional cost)

Need something delivered urgently? Let us know your deadline!`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     CODE PILOT / INTERNSHIP QUERIES
  ───────────────────────────────────────────────────────── */

  if (/(code pilot|internship|intern program)/i.test(t)) {
    return {
      text: `🚀 **Code Pilot Program 2026 — Applications Open!**

Code Pilot is our flagship hands-on training program where you work on **real client projects** under expert mentorship.

**Program Highlights:**
• ⏱️ Duration: 3-6 months
• 🏠 Mode: Remote / Hybrid
• 💰 Stipend: Performance-based
• 📜 Certificate: Industry-recognized
• 💼 Placement: Support & PPO opportunities

**8 Specialized Tracks:**
1. 🌐 Full Stack Development
2. 🤖 AI & Machine Learning
3. ☁️ Cloud & DevOps
4. 🛡️ Cybersecurity
5. 🎨 Frontend Engineering
6. ⚙️ Backend & APIs
7. 📊 Data Science & Analytics
8. 📈 Digital Marketing

**What you'll gain:**
✓ Real project experience (not tutorials)
✓ GitHub portfolio with live projects
✓ Letter of recommendation
✓ Interview preparation
✓ Industry networking

Would you like to know about:
→ **Eligibility** criteria
→ **How to apply**
→ Details about a specific **track**
→ **Stipend & fees**`,
      newState
    };
  }

  if (/(eligibility|eligible|qualification|who can apply|degree|stream|branch|can i apply)/i.test(t)) {
    return {
      text: `🎓 **Code Pilot Eligibility Criteria**

**Who can apply:**

✅ **Engineering Students**
• B.E / B.Tech (CSE, IT, ECE, EEE & related)
• Final year or pre-final year preferred
• Passed out graduates also welcome

✅ **Computer Applications**
• MCA (Master of Computer Applications)
• BCA (Bachelor of Computer Applications)

✅ **Computer Science**
• B.Sc Computer Science
• M.Sc Computer Science

✅ **Other Streams**
• Any graduate with coding knowledge
• Career switchers with basic skills
• Self-taught programmers

**Not required:**
❌ Prior work experience
❌ High CGPA (skills matter more)
❌ Specific college tier

**What we look for:**
• 💡 Passion for technology
• 📚 Willingness to learn
• 🔧 Basic programming fundamentals
• 💬 Good communication skills
• 🎯 Dedication & commitment

**For Digital Marketing track:**
• Any graduate stream eligible
• No coding required

Do you meet these criteria? Would you like to know how to apply?`,
      newState
    };
  }

  if (/(track|course|stream|program|what.*learn|syllabus|curriculum)/i.test(t)) {
    return {
      text: `📚 **Code Pilot Tracks — Choose Your Path**

**1. Full Stack Development** 🌐
→ React, Next.js, Node.js, databases
→ Build complete web applications

**2. AI & Machine Learning** 🤖
→ Python, TensorFlow, PyTorch, LangChain
→ Build chatbots, models, AI apps

**3. Cloud & DevOps** ☁️
→ AWS, Docker, Kubernetes, CI/CD
→ Deploy & scale applications

**4. Cybersecurity** 🛡️
→ Ethical hacking, network security, OWASP
→ Secure applications & systems

**5. Frontend Engineering** 🎨
→ React, TypeScript, Tailwind, animations
→ Build beautiful, fast interfaces

**6. Backend & APIs** ⚙️
→ Node.js, Python, databases, REST/GraphQL
→ Build scalable backend systems

**7. Data Science & Analytics** 📊
→ Python, Pandas, ML, visualization
→ Turn data into insights

**8. Digital Marketing** 📈
→ SEO, social media, ads, analytics
→ Grow businesses online

**Each track includes:**
• 40+ hours of live sessions
• Real project assignments
• Code reviews & feedback
• Career guidance

Which track interests you most? I can share more details!`,
      newState
    };
  }

  if (/(stipend|salary|paid|fee|fees|cost|price|money|free|payment|charge)/i.test(t)) {
    return {
      text: `💰 **Code Pilot — Fees & Stipend**

**Program Fee:**
• Affordable fee structure
• EMI options available
• Scholarships for meritorious students
• Contact us for current pricing

**Stipend:**
• Performance-based stipend provided
• Top performers earn back their fee
• Based on project contributions & attendance

**What's included in the fee:**
✓ 3-6 months of training
✓ Real project experience
✓ Mentorship from senior engineers
✓ Industry-recognized certificate
✓ Letter of recommendation
✓ Placement assistance
✓ Lifetime community access

**ROI (Return on Investment):**
• Average fresher salary: ₹3-6 LPA
• Code Pilot alumni often get 20-50% higher offers
• Real project experience = faster career growth

**Payment options:**
• One-time payment (discount available)
• EMI (2-3 installments)
• Scholarship (limited seats)

For exact pricing, please:
→ WhatsApp us, or
→ Fill the Code Pilot application form

Shall I help you apply?`,
      newState
    };
  }

  if (/(apply|application|register|join|enroll|enrol|sign up|how.*start)/i.test(t)) {
    return {
      text: `✅ **How to Apply for Code Pilot**

**Step-by-step process:**

**Step 1: Submit Application**
→ Fill the "Code Pilot Application" form on this page
→ OR WhatsApp us with your details
→ OR Email your resume to ${EMAIL}

**Step 2: Initial Screening**
→ Our team reviews your application (24-48 hours)
→ We check eligibility & track preference

**Step 3: Brief Discussion**
→ 15-20 min call to understand your goals
→ We explain the program in detail
→ Answer all your questions

**Step 4: Enrollment**
→ Complete payment (EMI available)
→ Get access to learning resources
→ Meet your mentor & cohort

**Step 5: Start Learning!**
→ Orientation session
→ First project assignment
→ Begin your tech journey

**Documents needed:**
• Resume/CV
• College ID (for students)
• Aadhaar/ID proof
• Passport photo

**Application tips:**
✓ Mention your preferred track
✓ Share any projects/GitHub profile
✓ Be clear about your goals

Ready to apply? I can guide you through the form!`,
      newState
    };
  }

  if (/(certificate|certification|letter|lor|recommendation)/i.test(t)) {
    return {
      text: `📜 **Code Pilot Certification**

**On successful completion, you receive:**

**1. Certificate of Completion**
• Industry-recognized credential
• Mentions your specialization track
• Duration & skills covered
• Verifiable certificate ID

**2. Letter of Recommendation**
• Personalized LOR from mentors
• Highlights your contributions
• Great for job applications
• LinkedIn-worthy achievement

**3. Project Portfolio**
• GitHub repository access
• Live deployed projects
• Code you can showcase
• Real client work samples

**Certificate validity:**
✓ Lifetime validity
✓ Shareable on LinkedIn
✓ Verifiable by employers
✓ Industry-recognized

**Completion criteria:**
• Minimum 80% attendance
• Complete all assignments
• Final project submission
• Satisfactory performance review

This certificate has helped our alumni land jobs at startups and MNCs alike!

Would you like to see a sample certificate or know more about placement support?`,
      newState
    };
  }

  if (/(placement|job|career|hire|ppo|offer|employ|opportunity)/i.test(t)) {
    return {
      text: `💼 **Placement & Career Support**

**Our placement assistance includes:**

**1. Pre-Placement Offers (PPO)**
→ Top performers get offers from Code Origin.ai
→ Work on exciting projects with us
→ Competitive salary packages

**2. Partner Network**
→ We share profiles with our client network
→ Startup & enterprise connections
→ Direct referrals to hiring managers

**3. Interview Preparation**
→ Resume building workshops
→ Mock interviews
→ DSA & system design practice
→ HR round preparation

**4. Portfolio Building**
→ GitHub profile optimization
→ LinkedIn enhancement
→ Personal website/portfolio
→ Project documentation

**Success stories:**
• 70%+ alumni placed within 3 months
• Average package: ₹4-8 LPA for freshers
• Top performers: ₹10-15 LPA

**Companies where alumni work:**
Startups, product companies, IT services, MNCs across India

**Note:** Placement is assistance, not guaranteed. Your effort during the program directly impacts opportunities.

Want to know more about specific success stories or interview tips?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     WORKING PROFESSIONALS - SKILL ENHANCEMENT
  ───────────────────────────────────────────────────────── */

  if (/(skill enhancement|upskill|upgrade|professional course|advanced course|weekend)/i.test(t)) {
    return {
      text: `💻 **Skill Enhancement for Working Professionals**

Designed specifically for busy professionals who want to level up without leaving their jobs.

**What makes it different:**

🕐 **Flexible Schedule**
• Weekend batches (Sat-Sun)
• Evening sessions (post work hours)
• Self-paced modules available
• Record sessions for revision

💼 **Real Project Experience**
• Work on actual client projects
• Not just tutorials or assignments
• Portfolio-worthy work

🎯 **Industry-Relevant Skills**
• Curated for 2026 job market
• Technologies that are in demand
• Practical, not theoretical

**Popular tracks:**

**AI & Machine Learning** 🤖
→ Perfect for: Developers, analysts, researchers
→ Skills: Python, TensorFlow, LangChain, GenAI

**Cloud & DevOps** ☁️
→ Perfect for: Backend devs, sysadmins, testers
→ Skills: AWS, Docker, Kubernetes, CI/CD

**Full Stack Development** 🌐
→ Perfect for: Frontend/backend devs, career switchers
→ Skills: React, Node.js, TypeScript, databases

**Data Science** 📊
→ Perfect for: Analysts, developers, managers
→ Skills: Python, SQL, ML, visualization

What's your current role? I can recommend the best track for your career goals!`,
      newState
    };
  }

  if (/(career switch|change career|different field|new career|transition)/i.test(t)) {
    return {
      text: `🔄 **Career Switch Guidance**

Thinking of switching careers into tech? You're making a smart move! Tech skills are in high demand.

**Common successful transitions:**

**Non-tech → Tech:**
• MBA/Commerce → Product Management, Data Analytics
• Mechanical/Civil → Full Stack, DevOps
• BPO/Customer Service → Digital Marketing, QA
• Teachers → Technical Writing, EdTech

**Within Tech:**
• Manual Testing → Automation, DevOps
• Support/Admin → Cloud Engineering
• Frontend → Full Stack
• Traditional Dev → AI/ML

**Our recommendation for career switchers:**

**Step 1:** Identify transferable skills
**Step 2:** Pick a track aligned with interests
**Step 3:** Join our Skill Enhancement program
**Step 4:** Build portfolio with real projects
**Step 5:** Leverage our placement support

**Why Code Origin.ai for career switch:**
✓ Real project experience (not just certificates)
✓ Mentorship from industry experts
✓ Flexible timing for working people
✓ Career counseling included
✓ Resume & interview support

What's your current background? I can suggest the best path forward!`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     SERVICES & TECHNOLOGY
  ───────────────────────────────────────────────────────── */

  if (/(service|what.*offer|what.*do|capabilities)/i.test(t)) {
    return {
      text: `🛠️ **Our Services**

**Software Development:**
• 🌐 Custom Web Applications
• 📱 Mobile Apps (iOS & Android)
• 🛒 E-Commerce Platforms
• 🏢 Enterprise Software

**AI & Data:**
• 🤖 AI/ML Solutions
• 💬 Chatbots & Virtual Assistants
• 📊 Data Analytics & BI
• 🧠 GenAI Applications

**Cloud & Infrastructure:**
• ☁️ Cloud Architecture (AWS/GCP/Azure)
• 🔄 DevOps & CI/CD
• 🐳 Containerization (Docker/K8s)
• 📈 Scalability & Performance

**Design & Quality:**
• 🎨 UI/UX Design
• 🧪 QA & Automation Testing
• 🔒 Security Audits

**Digital Marketing:**
• 📈 SEO & Content
• 📱 Social Media Marketing
• 💰 Paid Advertising

**Industries we serve:**
FinTech, HealthTech, EdTech, E-Commerce, Real Estate, Logistics, SaaS

Which service interests you? I can share more details!`,
      newState
    };
  }

  if (/(tech|technology|stack|language|framework|tools|what.*use)/i.test(t)) {
    return {
      text: `🧰 **Our Technology Stack**

**Frontend:**
• React, Next.js, Vue.js, Angular
• TypeScript, Tailwind CSS
• Framer Motion, Three.js

**Backend:**
• Node.js, Express, NestJS
• Python, Django, FastAPI
• Go, Rust (for performance)

**AI/ML:**
• TensorFlow, PyTorch
• OpenAI, LangChain
• Hugging Face, AWS Bedrock

**Databases:**
• PostgreSQL, MySQL
• MongoDB, Firebase
• Redis, Elasticsearch

**Cloud & DevOps:**
• AWS, GCP, Azure
• Docker, Kubernetes
• GitHub Actions, Jenkins
• Terraform, Ansible

**Mobile:**
• React Native, Flutter
• Swift, Kotlin

**Testing:**
• Playwright, Selenium, Cypress
• Jest, Vitest, Pytest

We choose the right tech for each project — not one-size-fits-all!

Looking for expertise in something specific?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     CONTACT & SUPPORT
  ───────────────────────────────────────────────────────── */

  if (/(contact|email|phone|mobile|call|reach|whatsapp|number)/i.test(t)) {
    return {
      text: `📞 **Contact Code Origin.ai**

**Instant Response:**
💬 **WhatsApp:** ${contact.phone}
→ Tap the green button at bottom-right
→ Fastest way to reach us!

**Phone:**
📱 ${contact.phone}
→ Mon-Sat, 10 AM - 7 PM IST

**Email:**
✉️ ${EMAIL}
→ Response within 24-48 hours

**Office Address:**
📍 ${contact.address}
→ Tap for Google Maps directions

**Social Media:**
• Instagram: @codeoriginai
• LinkedIn: Code Origin.ai

**Response times:**
• WhatsApp: Within 1-2 hours
• Phone: Instant (during hours)
• Email: 24-48 hours
• AIRA (me!): 24/7 instant

How would you like to connect?`,
      newState
    };
  }

  if (/(address|location|where|office|visit|map|direction)/i.test(t)) {
    return {
      text: `📍 **Our Office Location**

**Code Origin.ai**
${contact.address}

**Landmarks:**
• Opposite Gurukula English Medium School
• Near CK Pura area

**Google Maps:**
Tap "Get Directions" in the contact section above, or search "Kotla Arcade Chitradurga" on Google Maps.

**Office Hours:**
Monday - Saturday
10:00 AM - 7:00 PM IST

**Note:** We work with clients globally through remote collaboration. Most meetings happen online via Google Meet or Zoom.

Need directions or planning a visit?`,
      newState
    };
  }

  if (/(timing|hours|open|working|available|when.*call)/i.test(t)) {
    return {
      text: `🕐 **Business Hours**

**Office Hours:**
Monday - Saturday
10:00 AM - 7:00 PM IST

**AIRA (that's me!):**
Available 24/7 for instant answers

**WhatsApp:**
Messages are monitored even outside hours
→ Expect response within 1-2 hours during work hours
→ Within 12 hours outside work hours

**For urgent matters:**
Call directly at ${contact.phone}

**Holidays:**
Major Indian holidays (Diwali, Holi, etc.)
→ Limited availability, emergency support only

Is there something urgent I can help with right now?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     ABOUT COMPANY
  ───────────────────────────────────────────────────────── */

  if (/(about|company|code origin|who are you|team|background)/i.test(t) && !/about me|about you/.test(t)) {
    return {
      text: `🏢 **About Code Origin.ai**

**Who we are:**
Code Origin.ai is a software development company founded in 2024, building custom AI, cloud, and web products that help businesses grow.

**Our mission:**
"AI & Cloud Products That Grow Your Business"

**What we do:**
1. **Build software** for businesses — from startups to enterprises
2. **Train engineers** through our Code Pilot program
3. **Upskill professionals** with industry-relevant courses

**Our track record:**
• 14+ projects delivered
• 8 live deployments
• 100% on-time delivery
• 5.0★ average client rating

**What makes us different:**
✓ End-to-end delivery (design to deployment)
✓ Latest tech stack (AI, Cloud, Modern frameworks)
✓ Transparent communication
✓ Agile methodology
✓ Post-launch support

**Team:**
Engineers with experience from top tech companies, passionate about building great software and nurturing new talent.

Want to know more about our work or team?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     AIRA IDENTITY
  ───────────────────────────────────────────────────────── */

  if (/(who are you|your name|what is aira|about aira|are you (a |)?(bot|human|ai|real))/i.test(t)) {
    return {
      text: `🤖 **I'm AIRA — AI Response Assistant**

I'm Code Origin.ai's virtual assistant, powered by intelligent response matching to help you 24/7.

**What I can help with:**
• Answer questions about our services
• Guide business clients through project inquiries
• Help students learn about Code Pilot
• Assist freshers with career guidance
• Support professionals with upskilling options
• Provide contact information
• Direct you to the right resources

**What I can't do (yet!):**
• Access your personal data
• Process payments
• Schedule meetings directly
• Provide technical support for existing projects

**For anything I can't handle:**
I'll connect you with our human team via WhatsApp — they typically respond within 1-2 hours!

What can I help you with today?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     COMMON PHRASES & FEEDBACK
  ───────────────────────────────────────────────────────── */

  if (/(thank|thanks|thx|appreciate|helpful|great|awesome|nice|good|perfect)/i.test(t)) {
    return {
      text: `You're welcome! 😊 Happy to help!

Is there anything else you'd like to know about:
• Our services
• Code Pilot program
• Skill enhancement courses
• How to get started

Just ask, or tap a suggestion below!`,
      newState
    };
  }

  if (/(bye|goodbye|see you|talk later|that('s| is) all)/i.test(t)) {
    return {
      text: `Goodbye! 👋 It was great chatting with you!

**Before you go:**
• 💬 WhatsApp us anytime for quick responses
• 📝 Fill a form if you're interested in our services or programs
• 🔖 Bookmark this page for later

I'm always here if you have more questions. Take care and good luck with your journey! 🚀`,
      newState
    };
  }

  if (/(human|agent|real person|talk to someone|support team|representative|not robot)/i.test(t)) {
    return {
      text: `Of course! 🙌 I'll connect you with our human team.

**Fastest way:**
💬 **WhatsApp:** Tap the green button below
→ A team member will respond within 1-2 hours

**Other options:**
📞 **Call:** ${contact.phone}
→ Mon-Sat, 10 AM - 7 PM IST

✉️ **Email:** ${EMAIL}
→ Response within 24-48 hours

Our team handles:
• Detailed project discussions
• Custom requirements
• Payment & enrollment
• Technical support

Is there anything specific I should let them know about your query?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     SPECIFIC TECH/TRACK QUERIES
  ───────────────────────────────────────────────────────── */

  if (/(ai|artificial intelligence|machine learning|ml|deep learning|genai|llm|chatbot)/i.test(t)) {
    return {
      text: `🤖 **AI & Machine Learning**

**For Businesses:**
We build custom AI solutions:
• Intelligent chatbots & virtual assistants
• Predictive analytics & forecasting
• Image/video processing
• NLP & text analysis
• GenAI applications with LLMs
• Recommendation systems

**For Learners (Code Pilot / Skill Enhancement):**
Our AI/ML track covers:
• Python fundamentals
• NumPy, Pandas, Matplotlib
• Scikit-learn for ML
• TensorFlow & PyTorch
• Natural Language Processing
• Computer Vision basics
• LangChain & GenAI
• Real project: Build an AI-powered app

**Tech we use:**
Python, TensorFlow, PyTorch, OpenAI, LangChain, Hugging Face, AWS Bedrock, SageMaker

**Duration:** 3-6 months
**Mode:** Remote with live sessions

Interested in building AI solutions or learning AI?`,
      newState
    };
  }

  if (/(cloud|aws|azure|gcp|devops|docker|kubernetes|k8s|cicd|ci\/cd)/i.test(t)) {
    return {
      text: `☁️ **Cloud & DevOps**

**For Businesses:**
We provide cloud services:
• Cloud architecture design
• AWS/GCP/Azure setup & migration
• Containerization with Docker
• Kubernetes orchestration
• CI/CD pipeline setup
• Infrastructure as Code (Terraform)
• 24/7 monitoring & support

**For Learners (Code Pilot / Skill Enhancement):**
Our Cloud & DevOps track covers:
• Linux fundamentals
• AWS services (EC2, S3, Lambda, etc.)
• Docker & containerization
• Kubernetes basics to advanced
• CI/CD with GitHub Actions
• Infrastructure as Code
• Monitoring & logging
• Real project: Deploy a production app

**Tech we use:**
AWS, Docker, Kubernetes, GitHub Actions, Jenkins, Terraform, Ansible, Prometheus, Grafana

**Duration:** 3-6 months
**Mode:** Remote with live sessions

Want to learn cloud or need cloud services for your business?`,
      newState
    };
  }

  if (/(full stack|fullstack|web development|mern|mean|react|node|frontend|backend)/i.test(t) && !/(only frontend|only backend)/i.test(t)) {
    return {
      text: `🌐 **Full Stack Development**

**For Businesses:**
We build complete web applications:
• Custom web apps from scratch
• SaaS platforms
• Admin dashboards
• Customer portals
• API development
• Database design

**For Learners (Code Pilot / Skill Enhancement):**
Our Full Stack track covers:
• HTML, CSS, JavaScript fundamentals
• React.js with hooks & state management
• TypeScript for type safety
• Tailwind CSS for styling
• Node.js & Express backend
• REST API design
• Database (PostgreSQL/MongoDB)
• Authentication & authorization
• Deployment & DevOps basics
• Real project: Build a complete web app

**Tech we use:**
React, Next.js, Node.js, Express, TypeScript, PostgreSQL, MongoDB, Redis, Tailwind

**Duration:** 3-6 months
**Mode:** Remote with live sessions

This is our most popular track! Interested?`,
      newState
    };
  }

  if (/(cyber|security|hacking|ethical|penetration|pentest|owasp)/i.test(t)) {
    return {
      text: `🛡️ **Cybersecurity**

**For Businesses:**
We provide security services:
• Security audits & assessments
• Penetration testing
• Vulnerability scanning
• Secure code review
• Compliance consulting
• Security training for teams

**For Learners (Code Pilot):**
Our Cybersecurity track covers:
• Network fundamentals
• Linux for security
• Web application security
• OWASP Top 10 vulnerabilities
• Ethical hacking techniques
• Penetration testing tools
• Secure coding practices
• Incident response basics
• Real project: Security assessment

**Tools you'll learn:**
Kali Linux, Burp Suite, Wireshark, Nmap, Metasploit, OWASP ZAP

**Duration:** 3-6 months
**Mode:** Remote with live sessions

High demand field! Interested in learning cybersecurity?`,
      newState
    };
  }

  if (/(data science|analytics|data analyst|big data|visualization|pandas|power bi|tableau)/i.test(t)) {
    return {
      text: `📊 **Data Science & Analytics**

**For Businesses:**
We provide data services:
• Business intelligence dashboards
• Data pipeline development
• Predictive analytics
• Customer insights & segmentation
• Reporting automation
• Data visualization

**For Learners (Code Pilot / Skill Enhancement):**
Our Data Science track covers:
• Python for data analysis
• Statistics fundamentals
• Pandas & NumPy
• Data visualization (Matplotlib, Seaborn)
• SQL for data querying
• Machine learning basics
• Feature engineering
• Model evaluation
• Real project: End-to-end data project

**Tools you'll learn:**
Python, Pandas, NumPy, Scikit-learn, SQL, Power BI/Tableau basics

**Duration:** 3-6 months
**Mode:** Remote with live sessions

Great for career switchers too! Interested?`,
      newState
    };
  }

  if (/(digital marketing|marketing|seo|social media|ads|google ads|facebook ads|content)/i.test(t)) {
    return {
      text: `📈 **Digital Marketing**

**For Businesses:**
We provide marketing services:
• SEO optimization
• Social media management
• Google & Facebook ads
• Content marketing
• Email campaigns
• Analytics & reporting

**For Learners (Code Pilot):**
Our Digital Marketing track covers:
• Marketing fundamentals
• SEO (on-page & off-page)
• Google Ads & PPC
• Social media marketing
• Content strategy
• Email marketing
• Analytics & tracking
• Conversion optimization
• Real project: Run a campaign

**Tools you'll learn:**
Google Analytics, Search Console, Google Ads, Meta Business Suite, Canva, Mailchimp, SEMrush

**Duration:** 3-6 months
**Mode:** Remote with live sessions
**No coding required!**

Great for non-tech backgrounds! Interested?`,
      newState
    };
  }

  /* ─────────────────────────────────────────────────────────
     FALLBACK — Intelligent default response
  ───────────────────────────────────────────────────────── */

  // Context-aware fallback based on user type
  if (userType === "client") {
    return {
      text: `Thanks for your message! 🤔

I want to make sure I help you properly. As a business client, you might be interested in:

• **Getting a quote** for your project
• **Booking a consultation** call
• **Viewing our portfolio** of work
• **Learning about our tech stack**
• **Understanding our process** & timeline

Could you clarify what you'd like to know? Or tap a suggestion below!

For anything specific, our team is available on WhatsApp for quick responses.`,
      newState
    };
  }

  if (userType === "student") {
    return {
      text: `Thanks for your message! 🤔

Let me help you better. As a student, you might want to know about:

• **Code Pilot tracks** available
• **Eligibility** requirements
• **How to apply**
• **Fees & stipend**
• **Certificate** & placement

What specifically would you like to know? Tap a suggestion or type your question!`,
      newState
    };
  }

  if (userType === "fresher") {
    return {
      text: `Thanks for your message! 🤔

As a fresher, I can help you with:

• **Code Pilot program** — best way to get experience
• **Skills you should build**
• **Career guidance**
• **Portfolio & resume tips**
• **Job opportunities**

What would you like to explore? Just ask or tap a suggestion!`,
      newState
    };
  }

  if (userType === "professional") {
    return {
      text: `Thanks for your message! 🤔

As a working professional, you might be interested in:

• **Skill Enhancement programs**
• **Weekend/flexible batches**
• **Career switch guidance**
• **Advanced courses** in AI, Cloud, etc.
• **Certification** & career growth

What's your goal? I can recommend the best path!`,
      newState
    };
  }

  // Generic fallback
  return {
    text: `Thanks for your message! 🤔

I'm not sure I understood that correctly. I'm here to help with:

**For Businesses:**
• Project inquiries & quotes
• Services & technology
• Portfolio & case studies

**For Students & Freshers:**
• Code Pilot internship program
• Tracks, eligibility & fees
• How to apply

**For Working Professionals:**
• Skill Enhancement programs
• Upskilling & career switch
• Flexible learning options

**General:**
• Contact information
• About Code Origin.ai

Could you rephrase your question? Or tap one of the quick suggestions below!

For anything specific, message us on WhatsApp — our team responds quickly! 💬`,
    newState
  };
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */

export default function Aira() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: `Hello! 👋 I'm AIRA — your AI assistant at Code Origin.ai.

I'm here 24/7 to help you with:
• 💼 Business inquiries & project quotes
• 🎓 Code Pilot internship program
• 🚀 Career guidance for freshers
• 💻 Skill enhancement for professionals

Who am I speaking with today? Select an option below or just start typing!`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({
    userType: "unknown",
    name: null,
    context: [],
  });
  const endRef = useRef<HTMLDivElement>(null);

  // Get suggestions based on user type
  const getSuggestions = useCallback(() => {
    switch (chatState.userType) {
      case "client":
        return clientSuggestions;
      case "student":
        return studentSuggestions;
      case "fresher":
        return fresherSuggestions;
      case "professional":
        return professionalSuggestions;
      default:
        return initialSuggestions;
    }
  }, [chatState.userType]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  const send = useCallback((text: string) => {
    const clean = text.trim();
    if (!clean) return;
    
    setMessages((m) => [...m, { role: "user", text: clean, timestamp: new Date() }]);
    setInput("");
    setTyping(true);
    
    // Simulate natural typing delay
    const delay = 600 + Math.random() * 400;
    setTimeout(() => {
      const { text: replyText, newState } = getReply(clean, chatState);
      setMessages((m) => [...m, { role: "bot", text: replyText, timestamp: new Date() }]);
      setChatState((prev) => ({ ...prev, ...newState }));
      setTyping(false);
    }, delay);
  }, [chatState]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          LAUNCHER BUTTON
      ═══════════════════════════════════════════════════════ */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Chat with AIRA"
          className="group fixed bottom-5 left-5 z-50 flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-ink-900/90 p-1.5 pr-4 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-gold-400/50 hover:shadow-gold-500/20 sm:bottom-7 sm:left-7 gpu-accelerate btn-press"
        >
          {/* Glow ring animation */}
          <span className="absolute inset-0 rounded-full border-2 border-gold-500/30 animate-ping-slow opacity-50" />
          
          <span className="relative">
            <img
              src={airaAvatar}
              alt="AIRA — AI Assistant"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-500/50 transition-all duration-300 group-hover:ring-gold-400"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-ink-900 animate-pulse" />
          </span>
          <span className="text-left">
            <span className="flex items-center gap-1.5">
              <span className="text-sm font-bold leading-none text-white">AIRA</span>
              <Zap className="h-3 w-3 text-gold-400" />
            </span>
            <span className="mt-0.5 block text-[11px] font-medium text-gold-300">AI Assistant • Online</span>
          </span>
          <Sparkles className="h-4 w-4 text-gold-400 transition-transform group-hover:rotate-12" />
        </button>
      )}

      {/* ═══════════════════════════════════════════════════════
          CHAT PANEL
      ═══════════════════════════════════════════════════════ */}
      {open && (
        <div className="fixed bottom-5 left-5 z-50 flex max-w-[400px] flex-col overflow-hidden rounded-3xl border border-gold-500/25 bg-ink-900/95 shadow-2xl shadow-black/60 backdrop-blur-xl sm:bottom-7 sm:left-7 w-[calc(100vw-2.5rem)] sm:w-[400px] animate-[chat-in_0.3s_ease-out] gpu-accelerate">
          
          {/* ─────────────────────────────────────────────────────
              HEADER
          ───────────────────────────────────────────────────── */}
          <div className="flex items-center gap-3 border-b border-gold-500/15 bg-gradient-to-r from-gold-600/20 via-gold-500/10 to-transparent px-4 py-3">
            <span className="relative">
              <img
                src={airaAvatar}
                alt="AIRA"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-gold-500/40"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-ink-900" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-white">AIRA</p>
                <span className="rounded-full bg-gold-500/20 px-2 py-0.5 text-[10px] font-semibold text-gold-300">
                  AI Powered
                </span>
              </div>
              <p className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Online — replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition hover:bg-white/10 hover:text-white btn-press"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* ─────────────────────────────────────────────────────
              MESSAGES
          ───────────────────────────────────────────────────── */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" style={{ maxHeight: "50vh", minHeight: "300px" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex items-start gap-2"}
              >
                {m.role === "bot" && (
                  <img
                    src={airaAvatar}
                    alt=""
                    className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-gold-500/40 mt-1"
                  />
                )}
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] whitespace-pre-line rounded-2xl rounded-br-md bg-gradient-to-r from-gold-600 to-gold-500 px-4 py-2.5 text-sm text-ink-950 shadow-lg"
                      : "max-w-[85%] whitespace-pre-line rounded-2xl rounded-bl-md border border-gold-500/15 bg-white/[0.04] px-4 py-2.5 text-sm text-stone-200 shadow-md"
                  }
                >
                  {/* Parse markdown-style bold */}
                  {m.text.split('\n').map((line, lineIdx) => (
                    <span key={lineIdx}>
                      {line.split(/(\*\*[^*]+\*\*)/).map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIdx} className={m.role === "user" ? "font-bold" : "font-semibold text-gold-200"}>{part.slice(2, -2)}</strong>;
                        }
                        return <span key={partIdx}>{part}</span>;
                      })}
                      {lineIdx < m.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {typing && (
              <div className="flex items-start gap-2">
                <img
                  src={airaAvatar}
                  alt=""
                  className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-gold-500/40"
                />
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-gold-500/15 bg-white/[0.04] px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold-400" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold-400 [animation-delay:0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gold-400 [animation-delay:0.3s]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* ─────────────────────────────────────────────────────
              QUICK SUGGESTIONS
          ───────────────────────────────────────────────────── */}
          <div className="border-t border-gold-500/10 bg-ink-950/50">
            <div className="flex gap-2 overflow-x-auto px-4 py-2.5 scrollbar-hide">
              {getSuggestions().slice(0, 6).map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="shrink-0 rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1.5 text-xs font-medium text-gold-200 transition-all hover:bg-gold-500/20 hover:border-gold-400/40 btn-press whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────
              INPUT FORM
          ───────────────────────────────────────────────────── */}
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
              className="flex-1 rounded-full border border-gold-500/20 bg-ink-800/60 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-500/20"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold-600 to-gold-400 text-ink-950 shadow-lg shadow-gold-500/25 transition-all hover:shadow-gold-500/50 disabled:opacity-50 disabled:cursor-not-allowed btn-press"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>

          {/* ─────────────────────────────────────────────────────
              FOOTER — WhatsApp CTA
          ───────────────────────────────────────────────────── */}
          <a
            href={waLink("Hi Code Origin.ai! I'd like to speak with your team. Here's my query:")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-gold-500/10 bg-wa/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-wa/20 btn-press"
          >
            <WhatsAppIcon className="h-4 w-4 text-wa" />
            Prefer human support? WhatsApp us
          </a>
        </div>
      )}
    </>
  );
}
