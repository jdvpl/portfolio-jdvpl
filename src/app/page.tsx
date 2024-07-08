'use client';
import Hero from "@/components/main/Hero";
import Experience from "@/components/ui/TimeLine/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero/>
      </div>
        <p className="font-poppins font-semibold text-3xl"> Hola mundo</p>
      <Experience/>
    </main>
  );
}
