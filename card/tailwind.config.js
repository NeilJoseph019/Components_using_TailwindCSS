/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        'mainText': ['Josefin Sans', 'sans-serif'],
        'description' : ['Borel', 'cursive']
      }
    },
  },
  plugins: [],
}

