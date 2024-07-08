'use client';
import Hero from "@/components/main/Hero";
import Experience from "@/components/ui/TimeLine/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero/>
      </div>
      <Experience/>
    </main>
  );
}
