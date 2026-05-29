import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      poppins: ["var(--font-poppins)"],
      // Premium display / body stacks (Geist-like fallback chain)
      display: ["var(--font-display)", "var(--font-montserrat)", "sans-serif"],
      sans: ["var(--font-sans)", "var(--font-poppins)", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        // Theme-aware accent driven by CSS variables (set in globals.css)
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
          contrast: "rgb(var(--accent-contrast) / <alpha-value>)",
        },
        // Unified violet/blue AI brand scale
        brand: {
          50: "#f2f1ff",
          100: "#e8e6ff",
          200: "#d3ceff",
          300: "#b3a8ff",
          400: "#8b78ff",
          500: "#6d4bff",
          600: "#5b2ff0",
          700: "#4c20cc",
          800: "#3f1da6",
          900: "#351c83",
          950: "#1f0f54",
        },
        cyanic: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        // Preserve legacy tokens used across existing components
        dark: {
          bg: "#030014",
          card: "#0a0a1a",
          text: "#ffffff",
          border: "#7042f88b",
        },
        light: {
          bg: "#f5f7fb",
          card: "#ffffff",
          cardAlt: "#f8f9ff",
          text: "#1e293b",
          textSecondary: "#475569",
          border: "#e2e8f0",
          accent: "#6366f1",
          accentLight: "#818cf8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "light-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "light-subtle": "linear-gradient(to bottom, #f8f9ff 0%, #e9ecf5 100%)",
        // Premium aurora / mesh gradients
        aurora:
          "radial-gradient(40% 60% at 20% 20%, rgba(109,75,255,0.18), transparent 60%), radial-gradient(40% 60% at 80% 0%, rgba(56,189,248,0.14), transparent 55%), radial-gradient(50% 50% at 50% 100%, rgba(91,47,240,0.14), transparent 60%)",
        "grid-fade":
          "linear-gradient(to right, rgba(127,127,160,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(127,127,160,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(109,75,255,0.18), 0 18px 60px -20px rgba(109,75,255,0.45)",
        "glow-cyan": "0 0 60px -12px rgba(56,189,248,0.45)",
        "inset-soft": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.9" },
          "50%": { transform: "translate3d(2%, -2%, 0) scale(1.08)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
        aurora: "aurora 14s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "dash-flow": "dash-flow 20s linear infinite",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.6, 0.6, 0, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
