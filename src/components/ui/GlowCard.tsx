"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** intensity of the cursor-tracking glow (0–1) */
  glow?: number;
  /** subtle 3D tilt toward the cursor */
  tilt?: boolean;
}

/**
 * Glass card with a cursor-tracking radial spotlight and optional 3D tilt.
 * The spotlight position is written to CSS variables for GPU-cheap rendering.
 */
export function GlowCard({
  children,
  className,
  glow = 0.55,
  tilt = true,
  ...props
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (tilt) {
      const rx = (py - 0.5) * -6;
      const ry = (px - 0.5) * 6;
      setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`);
    }
  };

  const handleLeave = () => setTransform("");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform }}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass border-gradient",
        "transition-[transform,box-shadow] duration-300 ease-expo will-change-transform",
        "hover:shadow-glow",
        className
      )}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {/* Cursor-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgb(var(--accent) / ${glow}), transparent 45%)`,
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
