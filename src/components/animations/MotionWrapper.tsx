"use client";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { reveal, inView } from "@/lib/motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** vertical travel distance for the default reveal */
  y?: number;
  variants?: Variants;
  as?: keyof typeof motion;
}

/**
 * Drop-in scroll-reveal wrapper. Defaults to the standard rise+fade reveal,
 * or accepts custom variants for choreographed entrances.
 */
export function MotionWrapper({
  children,
  className,
  delay = 0,
  y = 28,
  variants,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants ?? reveal(delay, y)}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
    >
      {children}
    </motion.div>
  );
}
