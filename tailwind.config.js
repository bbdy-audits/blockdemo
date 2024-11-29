/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounce-once 1s ease-in-out',
      },
    },
  },
  plugins: [],
};