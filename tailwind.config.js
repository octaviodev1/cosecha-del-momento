/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#d94052",
      "deep-red": "#ff0000",
      orange: "#ee7e4c",
      yellow: "#ead56c",
      green: "#0a996f",
      "green-light": "#e7fdf7",
      gray: "#898b75",
      transparent: "#ffffff00",
    },
    extend: {
      fontFamily: {
        'new-font' : ['PT Sans', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
