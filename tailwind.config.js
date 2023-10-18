/** @type {import('tailwindcss').Config} */
export default {
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
      orange: "#ee7e4c",
      yellow: "#ead56c",
      green: "#0a996f",
      gray: "#898b75",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: ["tw-elements/dist/plugin.cjs"],
};
