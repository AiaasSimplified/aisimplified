import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ai: {
          50: "#eef4ff",
          100: "#dfe9ff",
          200: "#bed3ff",
          300: "#95b5ff",
          400: "#6991ff",
          500: "#3c63f3",
          600: "#2f4fd1",
          700: "#283ea6",
          800: "#273985",
          900: "#1f2d66"
        },
        accent: {
          500: "#06b6d4",
          600: "#0891b2"
        }
      },
      boxShadow: {
        soft: "0 14px 40px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(60,99,243,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.10), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
