/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: "#FFE5D1",
        mint: "#D9F2EA",
        lavender: "#E9E3F9",
        brand: {
          pink: "#F472B6"
        }
      }
    },
  },
  plugins: [],
}
