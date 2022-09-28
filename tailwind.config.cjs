/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-purple': '#171821',
        'gray-purple-accent': '#1C1C25',
      },
    },
  },
  plugins: [],
};
