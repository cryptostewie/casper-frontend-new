module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/img/hero.svg')",
        'btn-outline' : "url('/img/button-outline.svg')",
        'btn-hover' : "url('/img/button-hover.svg')",
       }),

      backgroundColor: theme => ({
        'card': '#342E3C'
      }),

      transitionDelay: {
        '900': '900ms',
        '1100': '1100ms',
        '1300': '1300ms',
        '1500': '1500ms',
       }
    },
  },
  variants: {},
  plugins: [],
};
