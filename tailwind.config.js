/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
      },
    },
  },
  plugins: [],
}