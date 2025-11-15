/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        branch: {
          light: "#a3724f",
          dark: "#5b3c29",
        },
        leaf: {
          green1: "#5ccf73",
          green2: "#39b662",
        }
      },

      boxShadow: {
        glow: "0 0 25px rgba(0, 255, 200, 0.25)",
      },

      keyframes: {
        windSway: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(2deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        floatUp: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        leafMove: {
          "0%": { transform: "translateX(0px) rotate(0deg)" },
          "50%": { transform: "translateX(4px) rotate(2deg)" },
          "100%": { transform: "translateX(0px) rotate(0deg)" },
        },
      },

      animation: {
        wind: "windSway 4s ease-in-out infinite",
        float: "floatUp 1s ease-out forwards",
        leaf: "leafMove 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
