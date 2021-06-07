module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#8D11C8',
        secondary: '#0D0D0D',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}