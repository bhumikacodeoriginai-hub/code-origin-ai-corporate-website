import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CodePilot from "./components/CodePilot";
import Internship from "./components/Internship";
import FAQ from "./components/FAQ";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Aira from "./components/Aira";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-stone-200">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <WhyChooseUs />
        <Testimonials />
        <CodePilot />
        <Internship />
        <FAQ />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Aira />
    </div>
  );
}
