/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/views/**/*.ejs",
    "./src/public/**/*.{js,css,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'general': "url('/images/background.png')",
        'login-img': "url('/images/login-imageBackground.jpeg')",
        'logo-fitParking': "url('/images/logoFitP.png')",
      },
      colors: {
        'main-yellow': '#F6C90E',
        'main-black': '#1f2937 ',
        'secundary-light': '#EEEEEE',
        'secundary-dark': '#3A4750',
      }
    },
  },
  plugins: [],
}

