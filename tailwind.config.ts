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
    fontFamily: {
      inter: ["Inter"],
      quicksand: ["Quicksand"],
    },
    fontSize: {
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      xs: ["0.75rem", { lineHeight: "1.125rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.875rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.045rem" }],
      "5xl": ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.06rem" }],
      "6xl": ["3.75rem", { lineHeight: "4.5rem", letterSpacing: "-0.075rem" }],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "5.625rem",
          letterSpacing: "0.125rem",
        },
      ],
    },
    zIndex: {
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      current: "currentColor",
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
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
