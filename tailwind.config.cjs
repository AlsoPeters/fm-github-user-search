/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Space: ['Space Mono', 'monospace'],
      },
      colors: {
        'DM-blue': '#0079ff',
        'DM-white': '#ffffff',
        'DM-black': '#141d2f',
        'DM-dark-blue': '#1e2a47',
        'LM-blue': '#0079ff',
        'LM-grey': '#697c9a',
        'LM-slate': '#4b6a9b',
        'LM-black': '#2b3442',
        'LM-light-grey': '#f6f8ff',
        'LM-white': '#fefefe',
      },
    },
  },
  plugins: [],
};
