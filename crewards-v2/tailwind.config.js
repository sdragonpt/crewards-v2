/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      userSelect: {
        'none': 'none',
      },
      screens: {
        '3xl': '1920px', // Define o novo breakpoint para telas maiores que 1920px
      },
    },
  },
  plugins: [],
}
