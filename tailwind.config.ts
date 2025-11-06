import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
 // ✅ Force Light Mode (no auto dark)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      // You can still add custom colors later if needed
    },
  },
  plugins: [],
};

export default config;
