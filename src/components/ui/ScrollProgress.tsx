"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin top progress bar tracking page scroll, with a gradient fill and a
 * trailing glow. Spring-smoothed so it never snaps.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[linear-gradient(90deg,rgb(var(--glow-1)),rgb(var(--glow-2)))] shadow-[0_0_12px_rgb(var(--glow-1)/0.8)]"
      aria-hidden
    />
  );
}
