"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll } from "framer-motion";
import { Monitor, Network, Boxes, Database, Cpu, Cloud, MousePointer2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CanvasGuard } from "@/components/3d/CanvasGuard";
import { reveal, inView } from "@/lib/motion";

const SystemsScene = dynamic(() => import("@/components/3d/SystemsScene"), {
  ssr: false,
});

export default function Architecture() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  // Scroll progress through the section drives the 3D topology tilt/scale.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const legend = [
    { icon: Monitor, key: "client" as const },
    { icon: Network, key: "gateway" as const },
    { icon: Boxes, key: "services" as const },
    { icon: Database, key: "data" as const },
    { icon: Cpu, key: "ai" as const },
    { icon: Cloud, key: "cloud" as const },
  ];

  return (
    <section id="architecture" className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-12 md:py-40">
      <SectionHeading eyebrow={t.systems.eyebrow} title={t.systems.title} description={t.systems.description} />

      <motion.div
        ref={ref}
        variants={reveal(0.1, 40)}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        className="mt-16 overflow-hidden rounded-3xl glass-strong border-gradient p-4 md:p-6"
      >
        {/* Dashboard chrome */}
        <div className="mb-2 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 font-mono text-xs text-[rgb(var(--text-muted))]">
              systems.topology — live
            </span>
          </div>
          <span className="hidden items-center gap-2 font-mono text-xs text-emerald-400 sm:flex">
            <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-emerald-400" />
            healthy
          </span>
        </div>

        {/* 3D topology */}
        <div className="relative h-[440px] w-full md:h-[560px]">
          <CanvasGuard
            fallback={
              <div className="grid h-full w-full place-items-center rounded-2xl bg-aurora">
                <p className="font-mono text-sm text-[rgb(var(--text-muted))]">
                  Interactive 3D topology unavailable on this device.
                </p>
              </div>
            }
          >
            <SystemsScene progress={scrollYProgress} />
          </CanvasGuard>

          {/* Interaction hint */}
          <span className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
            <MousePointer2 className="h-3.5 w-3.5 text-accent" />
            drag to orbit · scroll to explore
          </span>
        </div>

        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {legend.map(({ icon: Icon, key }) => (
            <div key={key} className="flex items-center gap-2 rounded-xl glass px-3 py-2">
              <Icon className="h-4 w-4 shrink-0 text-accent" />
              <span className="truncate text-xs text-[rgb(var(--text-muted))]">
                {t.systems.legend[key]}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
