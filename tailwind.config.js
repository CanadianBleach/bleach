/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // use system preference
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /^dark:/, // ensures all dark: classes are included in the build
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};