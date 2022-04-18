const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        "blue-gray": colors.blueGray,
        "cool-gray": colors.coolGray,
        gray: colors.gray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        "light-blue": colors.lightBlue,
        blue: colors.blue,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        plant: {
          white: "#FAFAF9",
          offwhite: "#E4DBD6",
          tan: "#C6A061",
          rust: "#935433",
          army: "#2a38df",
          'leaf-light': "#79A87C",
          leaf: "#394E51",
          'leaf-dark': "#0F2322",
          copper: "#A76143",
          blood: "#581910",
          pink:"#ff035e"
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
