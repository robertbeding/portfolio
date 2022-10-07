/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        second: '#64748b',
        black: '#0f172a',
      },
      screens: {
        '2x1': '1320px',
      },
    },
  },
  plugins: [],
}
