/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'beige': '#F5F5DC',
        'black-dark': '#00000050',
      },

      spacing:{
        'auto': 'auto',
      }
    },
  },
  plugins: [],
}

