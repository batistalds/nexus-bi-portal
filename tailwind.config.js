/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        background: "#f8f8fc",
        foreground: "#20223a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#20223a",
        },
        muted: {
          DEFAULT: "#f0f0f8",
          foreground: "#6d6f8a",
        },
        border: "#e6e6f0",
        primary: {
          50: "#f2f2fc",
          100: "#e5e6f9",
          200: "#cdcef2",
          300: "#aaace8",
          400: "#8386dc",
          500: "#666acf",
          600: "#5257bd",
          700: "#44489c",
          800: "#393c7d",
          900: "#31335f",
          DEFAULT: "#5257bd",
          foreground: "#ffffff",
        },
        mint: {
          DEFAULT: "#7fd9c4",
          foreground: "#0f3d33",
        },
        peach: {
          DEFAULT: "#f3b98c",
          foreground: "#5c3418",
        },
      },
      borderRadius: {
        xl: "1.25rem",
        lg: "0.9rem",
        md: "0.6rem",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgba(32,34,58,0.04), 0 1px 3px 0 rgba(32,34,58,0.06)",
        card: "0 1px 2px 0 rgba(32,34,58,0.03), 0 8px 24px -6px rgba(32,34,58,0.10)",
        glow: "0 0 0 1px rgba(82,87,189,0.08), 0 20px 40px -12px rgba(82,87,189,0.25)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
