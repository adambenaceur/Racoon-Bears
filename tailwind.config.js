const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        "brand-light": "var(--clr-white)",
        "brand-background": "var(--clr-background)",
      }
    },
  },
  plugins: [],
}

