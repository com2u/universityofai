/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'foreground-1': '#61b3dc',
        'foreground-2': '#61dca3',
        'accent': '#2b4539',
      },
    },
  },
  plugins: [],
}
