/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gucina: ["Gucina"],
        sans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
