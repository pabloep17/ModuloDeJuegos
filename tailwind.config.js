/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#f7f7f7",
        fondo_dark: "#000000",
        section: "#FFFFFF",
        section_dark: "#0a0a0a"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

