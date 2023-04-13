/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
        satoshi: ["Satoshi"],
      },
      colors: {
        darkgrey: "#121212",
        gray: "#7E7E7E",
        cultured: "#F4F4F4",
        primary: "#1E854A",
        secondary: "#F5FCF8",
      },
    },
  },
  plugins: [],
};
