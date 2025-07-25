// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <– passe ggf. Pfade an
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}