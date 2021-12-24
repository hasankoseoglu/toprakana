const theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      playfair : ['"Playfair Display"', ...theme.fontFamily.sans],
      lato : ['"Lato"', ...theme.fontFamily.sans],
      montserrat : ['"Montserrat"', ...theme.fontFamily.sans],
    },
  },
  plugins: [], 
} 