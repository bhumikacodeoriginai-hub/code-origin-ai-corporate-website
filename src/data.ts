export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Clients", href: "#testimonials" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Code Pilot", href: "#internship" },
  { label: "Upskill", href: "#professionals" },
  { label: "Contact", href: "#contact" },
];

/* Landing-page showreel video (streamed from a CDN — falls back to poster image) */
export const showreel = {
  src: "https://videos.pexels.com/video-files/5496611/5496611-uhd_2560_1440_30fps.mp4",
  srcAlt: "https://videos.pexels.com/video-files/5496611/5496611-sd_640_360_30fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1280&q=80",
};

export const stats = [
  { value: 14, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Live Deployments" },
  { value: 6, suffix: "", label: "In Development" },
  { value: 5, suffix: "+", label: "Internship Streams" },
];

/* ═══════════════════════════════════════════════════════════
   Centralized company identity — single source of truth for the
   official brand across the site. Update brand facts here only.
═══════════════════════════════════════════════════════════ */
export const company = {
  name: "Code Origin.AI",
  legalName: "Code Origin.AI Private Limited",
  tagline: "Engineering Intelligent Digital Solutions for Modern Businesses",
  foundedYear: 2024,
  city: "Chitradurga",
  region: "Karnataka",
  country: "India",
};

/* Official contact details */
export const EMAIL = "aicodeorigin@gmail.com";

export const DEFAULT_SUBJECT = "Enquiry — Code Origin.AI";
export const DEFAULT_BODY =
  "Hi Code Origin.AI,\n\nI would like to know more about your services and the Code Pilot internship.\n\nName:\nPhone:\nMessage:\n\nThank you.";

/** Opens the default mail app with a pre-filled subject + body. */
export const mailTo = (subject = DEFAULT_SUBJECT, body = DEFAULT_BODY) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

/** Opens Gmail compose in the browser (works on laptop & mobile web). */
export const gmailTo = (subject = DEFAULT_SUBJECT, body = DEFAULT_BODY) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

export const contact = {
  phone: "+91 78921 77297",
  phoneHref: "tel:+917892177297",
  whatsapp: "917892177297",
  whatsappHref: "https://wa.me/917892177297",
  email: EMAIL,
  emailHref: mailTo(),
  gmailHref: gmailTo(),
  address:
    "Kotla Arcade, opposite Gurukula English Medium School, CK Pura, Chitradurga, Karnataka 577501",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Kotla%20Arcade%20Chitradurga%20Karnataka%20577501",
};

/* Social media links */
export const socials = {
  instagram: "https://www.instagram.com/codeoriginai",
  linkedin: "https://www.linkedin.com/company/codeorigin-ai",
  github: "https://github.com/codeoriginai",
  twitter: "https://twitter.com/codeoriginai",
};

export const waLink = (message: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export type ProjectStatus = "Deployed" | "In Development";

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  emoji: string;
};

export const projects: Project[] = [
  {
    name: "Arjun Realty",
    category: "Real Estate / Logistics",
    description:
      "Corporate website and warehousing management platform for India's premium warehousing infrastructure provider with 42 world-class warehouses and 4,00,000+ sqft delivered across India & UAE.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    status: "Deployed",
    emoji: "🏭",
  },
  {
    name: "Sri Annapurneshwari Electricals",
    category: "Solar & Battery / Electrical Retail",
    description:
      "Complete e-commerce and business management platform for Chitradurga's most trusted electrical store since 2001. Solar panels, inverters, batteries, and complete electrical solutions with inventory management and billing system.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    status: "Deployed",
    emoji: "⚡",
  },
  {
    name: "Advaita Matrimony",
    category: "Matrimony / Social",
    description:
      "Modern matrimonial platform with advanced matching algorithms, verified profiles, secure messaging, and family-centric features for finding meaningful connections.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    status: "In Development",
    emoji: "💍",
  },
  {
    name: "Srividya University",
    category: "EdTech / Vedic Science",
    description:
      "Digital learning platform for India's premier Vedic science institution. Course management, live classes, student portal, and certification system spanning a decade of wisdom.",
    tags: ["React", "Django", "MySQL", "AWS S3"],
    status: "In Development",
    emoji: "🕉️",
  },
  {
    name: "FinTrack Pro",
    category: "FinTech",
    description:
      "Personal finance & expense management platform with smart budgeting and AI-driven insights.",
    tags: ["Vue.js", "FastAPI", "PostgreSQL", "Plaid"],
    status: "Deployed",
    emoji: "📊",
  },
  {
    name: "MediCare+",
    category: "HealthTech",
    description:
      "Healthcare appointment booking & telemedicine suite connecting patients with doctors.",
    tags: ["Next.js", "Node.js", "MongoDB", "Twilio"],
    status: "Deployed",
    emoji: "🏥",
  },
  {
    name: "ShopSphere",
    category: "E-Commerce",
    description:
      "Scalable e-commerce marketplace with payments, inventory and a full admin dashboard.",
    tags: ["React", "Express", "MySQL", "Stripe"],
    status: "Deployed",
    emoji: "🛍️",
  },
  {
    name: "LearnHub",
    category: "EdTech",
    description:
      "Learning management system for courses, live classes, quizzes and certifications.",
    tags: ["Angular", "Django", "PostgreSQL", "WebRTC"],
    status: "Deployed",
    emoji: "🎓",
  },
  {
    name: "FoodExpress",
    category: "Food & Delivery",
    description:
      "On-demand food delivery app with live order tracking and restaurant partner panels.",
    tags: ["React Native", "Node.js", "Firebase", "Google Maps"],
    status: "Deployed",
    emoji: "🍔",
  },
  {
    name: "RealtyPro",
    category: "Real Estate",
    description:
      "Real-estate listing portal with map search, smart filters and immersive virtual tours.",
    tags: ["Next.js", "Go", "PostgreSQL", "Mapbox"],
    status: "Deployed",
    emoji: "🏠",
  },
  {
    name: "GenAI Assistant",
    category: "AI / ML",
    description:
      "Conversational AI support assistant with NLP, RAG and multilingual capabilities, in active build.",
    tags: ["Python", "LangChain", "AWS Bedrock", "Pinecone"],
    status: "In Development",
    emoji: "🤖",
  },
  {
    name: "HR Suite",
    category: "Enterprise SaaS",
    description:
      "End-to-end cloud HR platform covering payroll, attendance, leaves and recruitment.",
    tags: ["React", "NestJS", "MySQL", "Docker"],
    status: "In Development",
    emoji: "🧑‍💼",
  },
  {
    name: "Logistics Tracker",
    category: "Logistics",
    description:
      "Supply-chain tracking with real-time fleet visibility and smart route optimization.",
    tags: ["Vue.js", "Go", "Redis", "Kafka"],
    status: "In Development",
    emoji: "🚚",
  },
  {
    name: "Cloud Analytics Suite",
    category: "Analytics",
    description:
      "Business intelligence dashboard aggregating KPIs with predictive cloud insights.",
    tags: ["React", "FastAPI", "BigQuery", "Tableau"],
    status: "In Development",
    emoji: "📈",
  },
];

export const codepilotTracks = [
  {
    title: "Full Stack Development",
    desc: "Master end-to-end web apps with modern frontend and backend stacks.",
  },
  {
    title: "AI & Machine Learning",
    desc: "Work with Python, machine learning and LLM-powered features.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Design scalable cloud architecture, CI/CD and serverless services.",
  },
  {
    title: "Cybersecurity",
    desc: "Learn ethical hacking, network security and secure coding practices.",
  },
  {
    title: "Frontend Engineering",
    desc: "Build pixel-perfect interfaces with React, Tailwind and design systems.",
  },
  {
    title: "Backend & APIs",
    desc: "Design scalable APIs, databases and robust backend services.",
  },
  {
    title: "Data Science & Analytics",
    desc: "Turn raw data into insights with analytics and predictive modeling.",
  },
  {
    title: "Digital Marketing",
    desc: "Master SEO, social media, content marketing and paid campaigns.",
  },
];

export const eligibilityStreams = [
  { code: "B.E / B.Tech", name: "Engineering", desc: "CSE, IT, ECE, EEE & related branches", emoji: "🏗️" },
  { code: "MCA", name: "Computer Applications", desc: "Master of Computer Applications", emoji: "🎓" },
  { code: "BCA", name: "Computer Applications", desc: "Bachelor of Computer Applications", emoji: "💻" },
  { code: "B.Sc CS", name: "Computer Science", desc: "Bachelor of Science in Computer Science", emoji: "🧬" },
  { code: "M.Sc CS", name: "Computer Science", desc: "Master of Science in Computer Science", emoji: "🔬" },
];

export const processSteps = [
  { step: "01", title: "Discover", desc: "We understand your goals, audience and technical requirements." },
  { step: "02", title: "Design", desc: "Wireframes and UI that turn ideas into clear product experiences." },
  { step: "03", title: "Develop", desc: "Agile sprints with clean, scalable and fully-tested code." },
  { step: "04", title: "Deploy", desc: "Reliable launches with CI/CD, cloud hosting and monitoring." },
  { step: "05", title: "Support", desc: "Ongoing maintenance, updates and performance tuning." },
];

/* Latest technology stack — logos served from Simple Icons CDN */
export type TechItem = { name: string; url: string };
export type TechGroup = { category: string; items: TechItem[] };

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Vue.js", url: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      { name: "Angular", url: "https://cdn.simpleicons.org/angular/DD0031" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Django", url: "https://cdn.simpleicons.org/django/ffffff" },
      { name: "FastAPI", url: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Express", url: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "NestJS", url: "https://cdn.simpleicons.org/nestjs/E0234E" },
    ],
  },
  {
    category: "AI & Data Science",
    items: [
      { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/ffffff" },
      { name: "LangChain", url: "https://cdn.simpleicons.org/langchain/ffffff" },
      { name: "Pandas", url: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "Scikit-learn", url: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", url: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
      { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", url: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "GitHub Actions", url: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Terraform", url: "https://cdn.simpleicons.org/terraform/7B42BC" },
      { name: "Linux", url: "https://cdn.simpleicons.org/linux/FCC624" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MySQL", url: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Redis", url: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "Supabase", url: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    ],
  },
  {
    category: "Mobile & Design",
    items: [
      { name: "Flutter", url: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "React Native", url: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Swift", url: "https://cdn.simpleicons.org/swift/F05138" },
      { name: "Kotlin", url: "https://cdn.simpleicons.org/kotlin/7F52FF" },
    ],
  },
  {
    category: "Automation Testing & QA",
    items: [
      { name: "Playwright", url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playwright.svg" },
      { name: "Selenium", url: "https://cdn.simpleicons.org/selenium/43B02A" },
      { name: "Cypress", url: "https://cdn.simpleicons.org/cypress/69D3A7" },
      { name: "Jest", url: "https://cdn.simpleicons.org/jest/C21325" },
      { name: "Postman", url: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Vitest", url: "https://cdn.simpleicons.org/vitest/6E9F18" },
    ],
  },
  {
    category: "APIs & Integration",
    items: [
      { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/E10098" },
      { name: "REST API", url: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
      { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/008CDD" },
      { name: "Twilio", url: "https://cdn.simpleicons.org/twilio/F22F46" },
      { name: "Socket.io", url: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "RabbitMQ", url: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
    ],
  },
];

export const allTech: TechItem[] = techStack.flatMap((g) => g.items);


/* Pre-filled WhatsApp message for business enquiries */
export const bizWhatsApp = waLink(
  "Hi Code Origin.AI! I'd like to discuss a project for my business. Here are a few details:"
);

/* Social proof — client testimonials.
   Initials-only display for authentic, professional appearance. */
export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  rating: number;
  role?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Code Origin.AI delivered an exceptional website and application for Arjun Realty. Their understanding of our warehousing business was impressive. The platform handles our 42 warehouses across India & UAE seamlessly. Highly professional team!",
    name: "Arjun Realty",
    initials: "AR",
    rating: 5,
    role: "Real Estate & Warehousing",
  },
  {
    quote:
      "After 23 years in the electrical business, we finally have a modern digital presence thanks to Code Origin.AI. The inventory system and billing platform they built has transformed how we operate. Our customers love the new online experience!",
    name: "Sri Annapurneshwari Electricals",
    initials: "SA",
    rating: 5,
    role: "Electrical Retail",
  },
  {
    quote:
      "The Advaita Matrimony platform is exactly what we envisioned. Code Origin.AI understood our vision for a family-centric, values-based matrimonial service. The development is progressing excellently and we're excited for the launch!",
    name: "Advaita Matrimony",
    initials: "AM",
    rating: 5,
    role: "Matrimony Platform",
  },
  {
    quote:
      "As a Vedic education institution with a decade of experience, we needed a partner who understood the blend of tradition and technology. Code Origin.AI is building us a world-class learning platform that honors our heritage while embracing modern education.",
    name: "Srividya University",
    initials: "SU",
    rating: 5,
    role: "Vedic Education",
  },
  {
    quote:
      "Working with the team was a smooth experience from start to finish. They understood exactly what I wanted and delivered on time. Very happy with the result.",
    name: "Kantha Raj",
    initials: "KR",
    rating: 5,
    role: "Business Owner",
  },
  {
    quote:
      "Great communication throughout the project. They kept me updated at every step and the final product worked exactly as promised. Highly recommended.",
    name: "Mukund",
    initials: "MK",
    rating: 5,
    role: "Entrepreneur",
  },
  {
    quote:
      "Professional and skilled team. The quality of the work was excellent and they were patient with all my changes and requests. Would work with them again.",
    name: "Shivraj",
    initials: "SR",
    rating: 5,
    role: "Startup Founder",
  },
  {
    quote:
      "They turned my idea into a real, working product. Clean design, fast, and easy to use on both mobile and laptop. Thank you for the great support.",
    name: "Sheetal",
    initials: "SH",
    rating: 5,
    role: "Product Manager",
  },
  {
    quote:
      "Very reliable and honest team. They explained everything clearly and delivered a solution that fit my budget perfectly. Genuinely impressed.",
    name: "Ananya",
    initials: "AN",
    rating: 5,
    role: "Business Consultant",
  },
];

/* Trusted across industries — shown as a scrolling strip */
export const industries = [
  "FinTech",
  "HealthTech",
  "E-Commerce",
  "EdTech",
  "Logistics",
  "Real Estate",
  "Warehousing",
  "Electrical",
  "Matrimony",
  "Vedic Science",
  "SaaS",
  "AI / ML",
];

/* Quick trust signals for the hero / about sections */
export const trustSignals = [
  { value: "14+", label: "Projects delivered" },
  { value: "100%", label: "On-time delivery" },
  { value: "24/7", label: "Support & monitoring" },
  { value: "5.0★", label: "Average client rating" },
];
