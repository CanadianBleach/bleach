export default {
    darkMode: 'media', // ✅ this enables system-based theming
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                anton: ['Anton', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
