module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'primary': '#fc6500',
      'secondary': '#048c69',
      "gray":"#b0b0b0",
      "white":"#ffffff",
      "red":"#c97541"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
