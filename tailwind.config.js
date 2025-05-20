/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',   // Next.js app directory
    './src/pages/**/*.{js,ts,jsx,tsx}', // se usi pages directory
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // aggiungi il plugin qui
  ],
};
