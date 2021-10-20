const Tailwind = require('tailwindcss');
const Autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [Tailwind, Autoprefixer],
    },
  },
};
