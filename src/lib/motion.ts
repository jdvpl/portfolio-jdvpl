import type { Variants } from "framer-motion";

/**
 * Cinematic easing curves — the motion signature of the whole experience.
 * `expoOut` for entrances, `smooth` for hover interpolation, `springy` for overshoot.
 */
export const ease = {
  expoOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  smooth: [0.6, 0.6, 0, 1] as [number, number, number, number],
  springy: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};

/** Standard reveal: rise + fade with a cinematic expo-out curve. */
export const reveal = (delay = 0, y = 28): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: ease.expoOut },
  },
});

/** Fade only — for atmospheric layers and backgrounds. */
export const fade = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, delay, ease: ease.expoOut } },
});

/** Container that staggers its children into view. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Per-character / per-word mask reveal item. */
export const maskUp: Variants = {
  hidden: { y: "120%" },
  visible: { y: "0%", transition: { duration: 1, ease: ease.expoOut } },
};

/** Scale-in for cards and media with subtle overshoot. */
export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: ease.expoOut },
  },
});

/** Shared viewport config so reveals fire once, slightly before fully in view. */
export const inView = { once: true, margin: "0px 0px -12% 0px" } as const;
