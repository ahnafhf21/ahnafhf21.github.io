/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./_layouts/**/*.html', './_includes/**/*.html', './_posts/**/*.{md,markdown,html}', './_pages/**/*.{md,markdown,html}', './*.{md,markdown,html}'],
  darkMode: 'class',
  theme: { extend: {
    colors: {
      ink: { 950: '#171715', 900: '#22221f', 800: '#30302b' },
      paper: { 50: '#fbfaf7', 100: '#f2f0e9', 200: '#e6e2d8' },
      ember: { 400: '#e9a77c', 500: '#c8754a', 600: '#a95d38' },
    },
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], serif: ['Lora', 'Georgia', 'serif'] },
    maxWidth: { reading: '72ch' },
    boxShadow: { soft: '0 18px 60px -30px rgb(25 24 21 / 0.22)' },
  } },
  plugins: [],
};
