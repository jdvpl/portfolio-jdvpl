'use client';
import Encription from "@/components/main/Encription";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/ui/TimeLine/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero/>
        
      <Skills/>
      <Encription/>
      <Experience/>
      <Projects/>
      <Footer/>
      </div>
    </main>
  );
}
