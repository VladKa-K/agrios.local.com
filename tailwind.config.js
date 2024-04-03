/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'src/js/**/*.js',
    'src/js/*.js',
  ],
  theme: {
    fontFamily: {
      default: ['"Manrope"', 'sans-serif'],
      'covered-by-your-grace': 'Covered By Your Grace',
    }, 
    fontSize: {
      'base': '16px',
    },
    lineHeight: {
      10: '1',
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        DEFAULT: '100%',
        xl: '1330px',
      },
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'yellow': '#EEC044',
        'green': '#4BAF47',
      },
    },
    screens: {
      // 'sm-reverse': {'max': '767px'},
      // 'mobile-laptop': {'max': '1023px'},
      // 'mobile-desktop': {'max': '1280px'},
      // 'laptop-desktop': {'min': '1024px', 'max': '1279px'},
      'sl-mobile': '480px',
      'large-mobile': '580px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'l-desktop': '1440px',
      'large': '1600px',
      'x-large': '1920px',
      'xx-large': '2000px',
    },
  },
  plugins: [],
}
