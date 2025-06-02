export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /dark:/, // ✅ Keeps all `dark:` variants
    },
  ],
  theme: { extend: {} },
  plugins: [],
};
