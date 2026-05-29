import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

// Below-the-fold sections are code-split to keep the hero bundle lean.
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Architecture = dynamic(() => import("@/components/sections/Architecture"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <Contact />
      <Footer />
    </main>
  );
}
