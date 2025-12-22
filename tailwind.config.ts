import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      poppins: ["var(--font-poppins)"],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Professional light mode gradient
        "light-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "light-subtle": "linear-gradient(to bottom, #f8f9ff 0%, #e9ecf5 100%)",
      },
      colors: {
        // Dark mode colors
        dark: {
          bg: '#030014',
          card: '#0a0a1a',
          text: '#ffffff',
          border: '#7042f88b',
        },
        // Professional Light mode colors
        light: {
          bg: '#f5f7fb',        // Soft grayish-blue background
          card: '#ffffff',       // Pure white for cards
          cardAlt: '#f8f9ff',   // Very light purple tint
          text: '#1e293b',       // Deep slate for main text
          textSecondary: '#475569', // Medium slate for secondary text
          border: '#e2e8f0',     // Light slate border
          accent: '#6366f1',     // Indigo accent
          accentLight: '#818cf8', // Light indigo
        },
      },
    },
  },
  plugins: [],
};
export default config;
