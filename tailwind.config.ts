/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Lora', 'serif'],
      monospace: ['Share Tech Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};
