/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5500",
          "orange-hover": "#E04B00",
          "orange-text": "#C84300", // Muted/darker orange for text
          "orange-light": "#FF7733",
          "orange-soft": "#FFF0E6",
          cream: "#FAF7F2",
          "cream-surface": "#F1ECE1",
          "cream-card": "#FFFFFF",
          "cream-border": "#E7E0D3",
          "cream-dark": "#1C1917",
          "cream-muted": "#57534E",
          dark: "#141416",
          "dark-surface": "#222226",
          "dark-border": "#3F3F46",
          light: "#FAF7F2",
          surface: "#F1ECE1",
          elevated: "#FFFFFF",
          card: "#FFFFFF",
          border: "#E7E0D3",
          "border-active": "rgba(255, 85, 0, 0.4)",
        },
        technical: {
          muted: "#57534E",
          slate: "#78716C",
          dark: "#1C1917",
          accent: "#FF5500",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-lg": "60px 60px",
        "grid-sm": "24px 24px",
        "dots-sm": "16px 16px",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
