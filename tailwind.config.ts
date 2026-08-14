import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0C0D13",
          900: "#14161F",
          800: "#1B1E2B",
          700: "#242838",
          600: "#343A52",
          500: "#4A5170",
        },
        mustard: {
          300: "#F8D77F",
          400: "#F5C64D",
          500: "#F0B429",
          600: "#D99A15",
          700: "#AD7A10",
        },
        denim: {
          300: "#AEC2E3",
          400: "#8CA8D6",
          500: "#6C8EBF",
          600: "#4F6B98",
          700: "#3B5277",
        },
        paper: {
          50: "#FBFAF5",
          100: "#F3F1E9",
          300: "#C9C4B3",
          500: "#8B8676",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(240,180,41,0.25), 0 18px 60px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "grain": "url('/images/texture/grain.svg')",
      },
      keyframes: {
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        flicker: "flicker 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
