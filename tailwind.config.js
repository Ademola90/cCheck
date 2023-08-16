/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryCol: '#F6673A',
        TFramcol: '#FEEFEA',
        bnbcol: '#2F75FD',
        startTodayCol: '#F6673A',
        footercol: '#FEEFEA',
      }
    },
  },
  plugins: [],
}
