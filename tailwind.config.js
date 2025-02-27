/** @type {import('tailwindcss').Config} */
const nativewind = require('nativewind/preset');

module.exports = {
  content: [
    './App/**/*.{js,jsx,ts,tsx}',
    './assets/**/*.{js,jsx,ts,tsx}',
    './widgets/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [nativewind],
  theme: {
    extend: {
      fontFamily: {
        F1Italic400: ['F1Italic400'],
        F1Regular400: ['F1Regular400'],
        F1Regular400Wide: ['F1Regular400Wide'],
        F1Regular700: ['F1Regular700'],
        F1Regular900: ['F1Regular900'],
        F1Digits400: ['F1Digits400'],
      },
      colors: {
        formulaRed: '#E10600',
        formulaDarkGrey: '#15151E',
      },
    },
  },
  plugins: [],
};
