"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RevealText } from "@/components/animations/RevealText";
import { reveal, inView } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent editorial section header: a mono eyebrow chip, a per-word
 * reveal headline, and an optional fading subtitle. Used across all sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={reveal(0, 16)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
          {eyebrow}
        </motion.span>
      )}

      <RevealText
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl",
          align === "center" ? "justify-center" : "justify-start"
        )}
      />

      {description && (
        <motion.p
          variants={reveal(0.1, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-[rgb(var(--text-muted))] md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
