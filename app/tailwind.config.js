/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lag: "1440px",
      md: "1280px",
      sm: "772px",
    },
    extend: {
      rotate: {
        360: "360deg",
      },
      fontFamily: {
        cop: ["Copernicus", "sans-serif"],
        int: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
