/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        //nav
        nav: "#ffffff",
        nav_dark: "#0a0a0a",
        body: "#fafafa",
        body_dark: "#000000",
        box: "#ffffff",
        box_dark: "#0a0a0a",
        box_border: "#e5e5e5",
        box_border_dark: "#252525"
      }
    },
  },
  plugins: [],
}

