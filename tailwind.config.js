/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '768px'
      },
      fontFamily: {
        vazir: ['vazir', 'sans-serif']
      }
    }
  },
  plugins: []
};
