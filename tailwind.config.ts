import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        128: "32rem",
      },
      lineHeight: {
        1: "1.125rem",
        2: "1.25rem",
        3: "1.5rem",
        4: "1.75rem",
        5: "1.875rem",
        6: "2rem",
        7: "2.375rem",
        8: "2.75rem",
        9: "3.75rem",
        10: "4.5rem",
      },
      colors: {
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#25384A",
          900: "#111A23",
        },
        green: {
          25: "#F1F9F5",
          50: "#E3F3EC",
          100: "#D6EDE3",
          200: "#C8E6D9",
          300: "#A0D4BD",
          400: "#77C2A1",
          500: "#4FAF85",
          600: "#3C8766",
          700: "#306C52",
          800: "#2A5E47",
          900: "#1E4333",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
