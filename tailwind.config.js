/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#FFC0CB',
        customPink: '#FFC0CB',
      },
    },
  },
  plugins: [],
}


