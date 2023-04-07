/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        "2xl": "2000px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

