"use client";
import { useEffect, useRef } from "react";

/**
 * Page-wide mouse-follow glow. A single fixed blurred blob lerps toward the
 * cursor each frame — atmospheric, GPU-cheap, pointer-events-none.
 */
export function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    pos.current = { ...target.current };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 300}px, ${
          pos.current.y - 300
        }px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[600px] w-[600px] rounded-full opacity-50 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgb(var(--glow-1) / 0.16), transparent 60%)",
        filter: "blur(40px)",
      }}
    />
  );
}
