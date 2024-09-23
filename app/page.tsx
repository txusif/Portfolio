import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}
