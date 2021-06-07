module.exports = {
  purge: [
    './**/*.html',
    './**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: '#F2DDDE'
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
       }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
