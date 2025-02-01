import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBlue: "var(--primary-blue)",
        lavenderLight: "var(--lavender-light)",
        lavenderLighter: "var(--lavender-lighter)",
      },
      dropShadow: {
        mainDropShadow: "var(--primary-drop-shadow)",
      },
      borderColor: {},
    },
  },
  plugins: [],
} satisfies Config;
