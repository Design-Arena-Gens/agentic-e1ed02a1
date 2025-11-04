import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          50: "#f4f6ff",
          100: "#e5ecff",
          200: "#ced9ff",
          300: "#a5b8ff",
          400: "#7b92ff",
          500: "#556cff",
          600: "#3647ff",
          700: "#2738d9",
          800: "#1f2da6",
          900: "#1b2882"
        },
        accent: "#ff7f50"
      },
      boxShadow: {
        glow: "0 0 50px rgba(85, 108, 255, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
