/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.25)',
        brown: 'rgb(30, 30, 17);',
      },
    },
    backgroundImage: {
      back: 'url(./assets/background.svg)',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
};
