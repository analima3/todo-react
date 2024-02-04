/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4EA8DE",
        purple: "#8284FA",
        "blue-dark": "#1E6F9F",
        "purple-dark": "#5E60CE",
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        danger: "#E25858",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        form: "1fr 80px",
        card: "1fr 36px",
      },
      transitionProperty: {
        "ring-brightness": "box-shadow, -webkit-box-shadow, brightness",
        ring: "box-shadow, -webkit-box-shadow",
      },
      boxShadow: {
        card: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)",
      },
      keyframes: {
        slideLeftToRight: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translateY(-20%)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideLeftToRight: "slideLeftToRight 300ms ease-out",
        fadeInDown: "fadeInDown 300ms both",
      },
    },
  },
  plugins: [],
};
