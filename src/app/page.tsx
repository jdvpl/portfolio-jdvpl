'use client';
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Experience from "@/components/ui/TimeLine/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero/>
      <Skills/>
      <Experience/>
      </div>
    </main>
  );
}
