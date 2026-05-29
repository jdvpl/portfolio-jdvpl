"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { EXPERIENCE } from "@/constants/experience";
import { reveal, inView } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative mx-auto w-full max-w-6xl px-6 py-28 md:px-12 md:py-36">
      <SectionHeading eyebrow="Trajectory" title={t.experience.title} />

      <div ref={ref} className="relative mt-20 pl-10 md:pl-0">
        {/* Center rail */}
        <div className="absolute left-[14px] top-0 h-full w-px bg-[rgb(var(--border-soft))]/30 md:left-1/2 md:-translate-x-1/2" />
        {/* Glowing progress fill */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[14px] top-0 h-full w-px origin-top bg-[linear-gradient(180deg,rgb(var(--glow-1)),rgb(var(--glow-2)))] shadow-[0_0_14px_rgb(var(--glow-1)/0.8)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={item.company}
                variants={reveal(0, 40)}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                className={cn(
                  "relative md:w-1/2",
                  left ? "md:pr-12" : "md:ml-auto md:pl-12"
                )}
              >
                {/* Node */}
                <span
                  className={cn(
                    "absolute top-2 z-10 grid h-4 w-4 place-items-center rounded-full bg-[rgb(var(--bg))] ring-2 ring-accent",
                    left ? "left-[-30px] md:left-auto md:right-[-8px]" : "left-[-30px] md:left-[-8px]"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
                </span>

                <GlowCard tilt={false} className="p-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight">{item.company}</h3>
                  <p className="text-sm font-medium text-[rgb(var(--text-muted))]">{item.role}</p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
                    {item.points.map((p, j) => (
                      <li key={j} className="relative pl-4 before:absolute before:left-0 before:text-accent before:content-['▹']">
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[11px] text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
