/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    'Tajawal-Light': ['Tajawal-Light', 'sans-serif'],
    'Tajawal-Medium': ['Tajawal-Medium', 'sans-serif'],
  },
}
