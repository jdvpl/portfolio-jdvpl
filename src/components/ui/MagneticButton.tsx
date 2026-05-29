"use client";
import { forwardRef } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "ghost";

interface MagneticButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof motion.a>, "ref"> {
  as?: "a" | "button";
  variant?: Variant;
  strength?: number;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(110deg,rgb(var(--glow-1)),rgb(var(--glow-2)))] shadow-glow hover:shadow-[0_24px_80px_-20px_rgba(109,75,255,0.65)]",
  glass:
    "glass-strong text-[rgb(var(--text-strong))] hover:border-[rgb(var(--accent)/0.4)]",
  ghost: "text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-strong))]",
};

// Inner label moves a fraction of the button travel for layered parallax depth.
function useDamped(v: MotionValue<number>) {
  return useTransform(v, (val) => val * 0.35);
}

/**
 * Premium magnetic button — the element follows the cursor with spring physics
 * while the inner label counter-moves for parallax depth.
 */
export const MagneticButton = forwardRef<HTMLAnchorElement, MagneticButtonProps>(
  function MagneticButton(
    { as = "a", variant = "primary", strength = 0.35, className, children, ...props },
    _ref
  ) {
    const { ref, x, y, onMouseMove, onMouseLeave } =
      useMagnetic<HTMLAnchorElement>(strength);
    const labelX = useDamped(x);
    const labelY = useDamped(y);
    const Tag = (as === "button" ? motion.button : motion.a) as typeof motion.a;

    return (
      <Tag
        ref={ref}
        style={{ x, y }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight",
          "transition-[box-shadow,border-color,color] duration-500 ease-expo will-change-transform",
          variants[variant],
          className
        )}
        {...props}
      >
        <motion.span style={{ x: labelX, y: labelY }} className="inline-flex items-center gap-2">
          {children}
        </motion.span>
      </Tag>
    );
  }
);
