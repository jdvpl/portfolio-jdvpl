"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease, inView } from "@/lib/motion";

interface RevealTextProps {
  text: string;
  className?: string;
  /** delay before the first word animates in */
  delay?: number;
  /** stagger between words */
  stagger?: number;
  /** animate when scrolled into view (true) or immediately on mount (false) */
  onView?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Cinematic per-word mask reveal — words rise from behind a clip line with an
 * expo-out curve. The signature entrance for headlines.
 */
export const RevealText = memo(function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  onView = true,
  as = "span",
}: RevealTextProps) {
  const words = text.split(" ");
  const MotionTag = motion[as] as typeof motion.span;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { y: "115%" },
    visible: { y: "0%", transition: { duration: 0.9, ease: ease.expoOut } },
  };

  return (
    <MotionTag
      className={cn("inline-flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      {...(onView
        ? { whileInView: "visible", viewport: inView }
        : { animate: "visible" })}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] pr-[0.26em]">
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
});
