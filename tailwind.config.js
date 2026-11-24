/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { forest: '#123d2b', leaf: '#2f8b57', lime: '#b9e769', mist: '#f2f7f1', ink: '#183329' },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
    boxShadow: { soft: '0 18px 55px rgba(18,61,43,.10)' }
  } },
  plugins: []
};
