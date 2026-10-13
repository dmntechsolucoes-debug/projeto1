/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#080b12', electric: '#6d8dff' }, fontFamily: { sans: ['Manrope', 'sans-serif'] } } },
  plugins: [],
}
