/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bodyBG' : '#FCFCFC',
        'btn' : '#006492',
        'footer' : '#185A8E',
        'textColor' : '#003F72',
        'bullets' : '#005A90',
        'FooterCol' : '#195A8F',
        'dropDownArrow' : '#C4262E',
        'menuBtn' : '#056795',
        'darkMode' : '#2A2B2E',
      }
    },
  },
  plugins: [],
}
