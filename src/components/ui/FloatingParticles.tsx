"use client";
import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

/**
 * Lightweight DOM particle field (no GPU canvas). Positions are generated
 * client-side after mount to avoid SSR hydration mismatch.
 */
export function FloatingParticles({
  count = 24,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * -8,
        duration: Math.random() * 6 + 6,
        opacity: Math.random() * 0.4 + 0.2,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 8px rgb(var(--accent) / 0.8)",
          }}
        />
      ))}
    </div>
  );
}
