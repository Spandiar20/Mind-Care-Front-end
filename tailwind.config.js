/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'iransansx': ["'IRANSansX'", 'sans'],
        // 'iransans': ["'Iranian Sans'", 'sans'],
      },
    },
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1279px'},
    },
  },
  plugins: [],
}