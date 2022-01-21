module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        colors: {
          'regal-blue': '#243c5a'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
