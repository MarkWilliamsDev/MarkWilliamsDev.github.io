module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: { center: true },
    colors: {
      primary: '#608E7F',
      secondary: '#606F8E',
      light: '#FFFFF0',
    },
    fontFamily: {
      serif: ['noto-serif'],
      sans: ['montserrat'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
