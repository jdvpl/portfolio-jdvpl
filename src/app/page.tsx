"use client";
import Encription from "@/components/main/Encription";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ModelViewer from "@/components/ui/modelViewer/ModelViewer";
import Experience from "@/components/ui/TimeLine/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col ">
        <Hero />

        <Skills />

        <ModelViewer modelPath={"/models/programmer.glb"} />
        <Encription />
        <Experience />
        <Projects />

        <Footer />
      </div>
    </main>
  );
}
