"use client";
import { useRef } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface MagneticResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
}

/**
 * Magnetic interaction — the element is gently pulled toward the cursor with
 * spring physics. `strength` controls how far it follows (0–1).
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  strength = 0.4
): MagneticResult<T> {
  const ref = useRef<T>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.5 });

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave };
}
