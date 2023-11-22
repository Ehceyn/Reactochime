/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "'./node_modules/tw-elements/dist/js/**/*.js'",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#fff",
        backgroundGrey: "#F5F6F9",
        backgroundRed: "#D20202",
        backgroundDarkRed: "#c72222",
        textGrey: "#000",
        textGreyLighter: "#000",
        textGreyLight: "#F9F9F9",
        textAuthGrey: "#D2CACA",
        borderColor: "#e5e7eb",
      },
      fontFamily: {
        poppins: "Poppins",
        raleway: "Raleway",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
