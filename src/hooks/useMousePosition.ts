"use client";
import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the pointer position. Pass `relativeTo` ref to get coordinates
 * relative to an element (used for spotlight / glow-follow effects).
 */
export function useMousePosition(relativeTo?: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (relativeTo?.current) {
          const rect = relativeTo.current.getBoundingClientRect();
          setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        } else {
          setPosition({ x: e.clientX, y: e.clientY });
        }
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handle);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [relativeTo]);

  return position;
}
