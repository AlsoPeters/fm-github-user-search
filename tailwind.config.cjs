/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [],
};
