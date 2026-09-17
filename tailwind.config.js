/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#05060c",
        surface: "#0b0d17",
        elevated: "#11142180",
        primary: {
          DEFAULT: "#7c5cff",
          50: "#f1eeff",
          100: "#e4ddff",
          200: "#cbbdff",
          300: "#ad97ff",
          400: "#907aff",
          500: "#7c5cff",
          600: "#6b3ff5",
          700: "#5a2dd6",
          800: "#4a26ac",
          900: "#3e238a",
        },
        accent: {
          DEFAULT: "#22d3ee",
          400: "#38e0f5",
          500: "#22d3ee",
          600: "#0ea5c4",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124, 92, 255, 0.55)",
        "glow-accent": "0 0 40px -10px rgba(34, 211, 238, 0.5)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        blob: "blob 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
