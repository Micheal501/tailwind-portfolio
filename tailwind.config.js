/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        headline: '#fffffe',
        buttonText: '#fffffe',
        paragraph: '#a7a9be',
        button: '#ff8906',
        highlight: '#ff8906',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
