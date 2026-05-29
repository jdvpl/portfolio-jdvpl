import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge conditional class names and dedupe conflicting Tailwind classes.
 * The single source of truth for className composition across the premium UI.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between a min and max. */
export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

/** Linear interpolation — the backbone of smooth inertial motion. */
export const lerp = (start: number, end: number, amount: number) =>
  start * (1 - amount) + end * amount;

/** Map a value from one range to another. */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
