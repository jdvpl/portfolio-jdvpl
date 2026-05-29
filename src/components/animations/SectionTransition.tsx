"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** parallax + fade choreography as the section enters/leaves the viewport */
  parallax?: boolean;
}

/**
 * Wraps a section so it enters like a cinematic scene: a soft scale/opacity
 * choreography tied to scroll progress. Use as the outer shell of each section.
 */
export function SectionTransition({
  children,
  className,
  id,
  parallax = true,
}: SectionTransitionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.85, 1],
    [0.3, 1, 1, 0.4]
  );
  const scale = useTransform(scrollYProgress, [0, 0.18], [0.985, 1]);
  const y = useTransform(scrollYProgress, [0, 0.18], [40, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={parallax ? { opacity, scale, y } : undefined}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  );
}
