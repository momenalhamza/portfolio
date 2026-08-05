import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { max: "550px" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#06060a",
        },
        foreground: {
          light: "#0a0a0f",
          dark: "#f4f4f8",
        },
        surface: "rgb(var(--surface) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
          alt: "rgb(var(--accent-alt) / <alpha-value>)",
        },
      },
      backgroundColor: {
        primary: "rgb(var(--color-background))",
      },
      textColor: {
        primary: "rgb(var(--color-foreground))",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%, 100%": {
            transform: "translate3d(0,0,0) scale(1)",
            opacity: "0.5",
          },
          "33%": {
            transform: "translate3d(6%,-4%,0) scale(1.1)",
            opacity: "0.75",
          },
          "66%": {
            transform: "translate3d(-5%,5%,0) scale(0.95)",
            opacity: "0.6",
          },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
