/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    colors:{
      'primary':'#309255',
      'black':'#212832',
      'section_color':'#e7f8ee',
      'button_default':'#E7F8EE'
    },
    extend: {
       animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}