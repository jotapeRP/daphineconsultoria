/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Barlow Condensed", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
