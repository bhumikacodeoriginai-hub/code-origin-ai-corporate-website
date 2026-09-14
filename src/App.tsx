import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Stats from "./components/Stats";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CodePilot from "./components/CodePilot";
import Internship from "./components/Internship";
import ForProfessionals from "./components/ForProfessionals";
import FAQ from "./components/FAQ";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Aira from "./components/Aira";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-950 text-stone-200">
      {/* Thin reading-progress indicator (premium, non-interactive) */}
      <ScrollProgress />

      {/* Skip link target is handled in index.html */}
      <header role="banner">
        <Navbar />
      </header>
      
      <main id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <Hero />
        
        {/* Social Proof */}
        <TrustedBy />
        <Stats />
        
        {/* About the Company */}
        <About />
        
        {/* Vision, Mission & Board of Directors */}
        <Leadership />
        
        {/* Life at Code Origin.AI — real team & culture photos */}
        <Gallery />
        
        {/* Services Offered */}
        <Services />
        
        {/* Portfolio / Work */}
        <Projects />
        
        {/* Technology Stack */}
        <TechStack />
        
        {/* Why Choose Us - 3 Audiences */}
        <WhyChooseUs />
        
        {/* Client Testimonials */}
        <Testimonials />
        
        {/* Code Pilot Program Intro */}
        <CodePilot />
        
        {/* Internship Details */}
        <Internship />
        
        {/* Skill Enhancement for Professionals */}
        <ForProfessionals />
        
        {/* Frequently Asked Questions */}
        <FAQ />
        
        {/* Our Process */}
        <Process />
        
        {/* Call to Action */}
        <CTA />
        
        {/* Contact Forms */}
        <Contact />
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
      
      {/* Floating UI Elements */}
      <aside aria-label="Quick contact options">
        <FloatingWhatsApp />
        <Aira />
      </aside>

      {/* Scroll-to-top control */}
      <BackToTop />
    </div>
  );
}
