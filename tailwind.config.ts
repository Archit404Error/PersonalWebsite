import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-gray",
    "text-white",
    "bg-red-500",
    "bg-green-500",
    "text-purple-500",
    "text-yellow-300",
    "delay-0",
    "delay-200",
    "delay-400",
    "delay-600",
    "delay-800",
    "delay-1000",
    "delay-1200",
    "w-0",
    "w-full",
    ...[...Array(100).keys()].map((i) => `top-[${i * 10}px]`),
    ...[...Array(100).keys()].map((i) => `left-[${i * 10}px]`),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: "#8492a6",
      },
      fontSize: {
        section: "4.5rem",
      },
      transitionDelay: {
        "0": "0ms",
        "200": "200ms",
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      transitionProperty: {
        width: "width",
      },
      screens: {
        macpro: "1512px",
        "3xl": "2100px",
      },
    },
  },
  variants: {
    extend: {
      transitionDelay: ["transform"],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
