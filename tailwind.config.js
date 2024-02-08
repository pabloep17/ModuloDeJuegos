/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        fondo: ""
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

