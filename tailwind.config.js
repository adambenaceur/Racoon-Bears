const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        coiny: ['Coiny', ... defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-purple": "var(--clr-purple)",
        "brand-pink": "var(--clr-pink)",
        "brand-yellow": "var(--clr-yellow)",
        "brand-blue": "var(--clr-blue)",
        "brand-green": "var(--clr-green)",
      }
    },
  },
  plugins: [],
}

