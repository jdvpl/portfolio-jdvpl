"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Footer from "@/components/main/Footer";

// Lazy load heavy components with dynamic imports
const ModelViewer = dynamic(() => import("@/components/ui/modelViewer/ModelViewer"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full flex items-center justify-center"><div className="animate-pulse text-white">Loading 3D Model...</div></div>
});

const Encription = dynamic(() => import("@/components/main/Encription"), {
  ssr: false
});

const Experience = dynamic(() => import("@/components/ui/TimeLine/Timeline"), {
  ssr: false
});

const Projects = dynamic(() => import("@/components/main/Projects"), {
  ssr: false
});

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col ">
        <Hero />

        <Skills />

        <Suspense fallback={<div className="h-[400px] w-full" />}>
          <ModelViewer modelPath={"/models/programmer.glb"} />
        </Suspense>

        <Suspense fallback={null}>
          <Encription />
        </Suspense>

        <Suspense fallback={null}>
          <Experience />
        </Suspense>

        <Suspense fallback={null}>
          <Projects />
        </Suspense>

        <Footer />
      </div>
    </main>
  );
}
