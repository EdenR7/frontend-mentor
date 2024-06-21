/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-700": "hsl(256, 26%, 20%)",
        "primary-300": "hsl(216, 30%, 68%)",
        "base-700": "hsl(270, 9%, 17%)",
        "base-500": "hsl(273, 4%, 51%)",
        "base-110": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "dm-serif": ['"DM Serif Display"', "serif"],
        karla: ['"Karla"', "sans-serif"],
      },
      screens: {
        tablet: "768px",
        laptop: "1024px",
        "laptop-l": "1440px",
        "6xl": "1152px",
      },
      spacing: {
        128: "32rem",
        "6xl": "1152px",
        "7xl": "1280px",
      },
    },
  },
  plugins: [],
};
