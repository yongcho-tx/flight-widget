/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3)",
      },
    },
  },
  plugins: [],
}
