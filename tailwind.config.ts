import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
