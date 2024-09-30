/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gucina: ["Gucina"],
        sans: ["Open Sans"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
