import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Work from "@/components/Work";

export default function HomePage() {
  return (
    <div className="space-y-28">
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}
