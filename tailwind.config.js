/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "palette-red": "#d94052",
        "palette-orange": "#ee7e4c",
        "palette-yellow": "#ead56c",
        "palette-green": "#94c5a5",
        "palette-gray": "#898b75",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#d94052",
      orange: "#ee7e4c",
      yellow: "#ead56c",
      green: "#0a996f",
      gray: "#898b75",
    },
  },
  darkMode: "class",
  plugins: ["tw-elements/dist/plugin.cjs"],
};
