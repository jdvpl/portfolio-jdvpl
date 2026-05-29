"use client";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Holographic "robotic" portrait. HUD rings counter-rotate, a scan-line sweeps
 * and the image churns — all scrubbed by scroll via GSAP ScrollTrigger.
 * Adds a cursor 3D tilt on top. Uses a plain <img> so GSAP can drive filters.
 */
export function RoboticAvatar() {
  const root = useRef<HTMLDivElement>(null);
  const ring1 = useRef<SVGSVGElement>(null);
  const ring2 = useRef<SVGSVGElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  const scan = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl.to(ring1.current, { rotate: 240, ease: "none" }, 0)
        .to(ring2.current, { rotate: -300, ease: "none" }, 0)
        .fromTo(photo.current, { scale: 1.18 }, { scale: 1, ease: "none" }, 0)
        .fromTo(scan.current, { yPercent: -140 }, { yPercent: 240, ease: "none" }, 0);
      // Recalculate once Lenis/layout settle.
      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt(`perspective(700px) rotateX(${py * -16}deg) rotateY(${px * 16}deg)`);
  };
  const onLeave = () => setTilt("");

  const ticks = Array.from({ length: 36 });

  return (
    <div
      ref={root}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto h-64 w-64 md:h-72 md:w-72"
    >
      <div
        style={{ transform: tilt }}
        className="relative h-full w-full transition-transform duration-200 ease-out will-change-transform"
      >
        {/* Glow */}
        <div className="absolute -inset-6 rounded-full glow-blob opacity-70" aria-hidden />

        {/* Outer HUD ring */}
        <svg ref={ring1} viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgb(var(--accent) / 0.45)" strokeWidth="0.4" strokeDasharray="1.5 3" />
          {ticks.map((_, i) => {
            const a = (i / ticks.length) * Math.PI * 2;
            const long = i % 3 === 0;
            const r1 = long ? 44 : 46;
            // Round to 3 decimals so SSR and client render identical strings
            // (avoids float ULP hydration mismatches).
            const f = (v: number) => v.toFixed(3);
            return (
              <line
                key={i}
                x1={f(50 + Math.cos(a) * r1)}
                y1={f(50 + Math.sin(a) * r1)}
                x2={f(50 + Math.cos(a) * 48)}
                y2={f(50 + Math.sin(a) * 48)}
                stroke="rgb(var(--accent) / 0.5)"
                strokeWidth={long ? 0.6 : 0.3}
              />
            );
          })}
        </svg>

        {/* Inner counter-ring */}
        <svg ref={ring2} viewBox="0 0 100 100" className="absolute inset-[18px] h-[calc(100%-36px)] w-[calc(100%-36px)]" aria-hidden>
          <circle cx="50" cy="50" r="48" fill="none" stroke="rgb(var(--glow-2) / 0.5)" strokeWidth="0.5" strokeDasharray="14 6" />
        </svg>

        {/* Photo */}
        <div className="absolute inset-[30px] overflow-hidden rounded-full bg-[rgb(var(--bg))] ring-1 ring-accent/30">
          <img
            ref={photo}
            src="/assets/perfil.jpeg"
            alt="Juan Daniel Suárez"
            className="h-full w-full object-cover object-center [filter:grayscale(0.35)_contrast(1.15)_brightness(1.05)]"
          />
          {/* Robotic duotone */}
          <div className="pointer-events-none absolute inset-0 bg-accent/30 mix-blend-color" />
          <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen bg-[linear-gradient(130deg,rgb(var(--glow-1)/0.5),transparent_60%,rgb(var(--glow-2)/0.5))]" />
          {/* Scanlines */}
          <div className="pointer-events-none absolute inset-0 opacity-25 bg-[repeating-linear-gradient(0deg,transparent_0_2px,rgba(0,0,0,0.55)_2px_3px)]" />
          {/* Sweeping scan bar (scroll-driven) */}
          <div
            ref={scan}
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(to_bottom,transparent,rgb(var(--glow-2)/0.55),transparent)]"
          />
          {/* Grain */}
          <div className="pointer-events-none absolute inset-0 noise" />
        </div>

        {/* Corner brackets */}
        {[
          "left-1 top-1 border-l-2 border-t-2",
          "right-1 top-1 border-r-2 border-t-2",
          "left-1 bottom-1 border-l-2 border-b-2",
          "right-1 bottom-1 border-r-2 border-b-2",
        ].map((c) => (
          <span key={c} className={`absolute h-5 w-5 rounded-[3px] border-accent/60 ${c}`} aria-hidden />
        ))}

        {/* Status chip */}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full glass-strong px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
          ● scanning
        </span>

        {/* Floating badge */}
        <div className="absolute -right-1 top-3 z-10 grid h-10 w-10 place-items-center rounded-2xl glass-strong text-accent shadow-glow">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
