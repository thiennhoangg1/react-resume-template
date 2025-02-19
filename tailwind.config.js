// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        darkBlue: '#0A192F',
        lightBlue: '#112240',
        offWhite: '#f8f9fa',
        textDark: '#333',
        textLight: '#ffffff',
        accent: '#ff6600',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
