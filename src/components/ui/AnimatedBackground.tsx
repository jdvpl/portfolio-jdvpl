"use client";
import { memo } from "react";
import { cn } from "@/lib/utils";

/**
 * Fixed atmospheric backdrop: layered aurora blobs, a fading tech grid and a
 * vignette. Pure CSS, GPU-accelerated, sits behind all content.
 */
export const AnimatedBackground = memo(function AnimatedBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden noise",
        className
      )}
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-[rgb(var(--bg))] transition-colors duration-500" />

      {/* Tech grid, faded toward edges */}
      <div className="absolute inset-0 bg-grid-fade bg-grid mask-fade-y opacity-60" />

      {/* Aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[55vh] w-[55vh] rounded-full glow-blob animate-aurora" />
      <div
        className="absolute -right-32 top-1/4 h-[45vh] w-[45vh] rounded-full glow-blob animate-aurora"
        style={{ animationDelay: "-5s", background: "radial-gradient(circle, rgb(var(--glow-2)/0.4), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full glow-blob animate-aurora"
        style={{ animationDelay: "-9s" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,rgb(var(--bg))_100%)]" />
    </div>
  );
});
