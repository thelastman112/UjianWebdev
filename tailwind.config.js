/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  important: true,
  theme: {
    extend: {}
    // screens: {
    //   sm: { max: '360px' },
    //   md: { max: '480px' },
    //   lg: { max: '720px' }
    // }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
