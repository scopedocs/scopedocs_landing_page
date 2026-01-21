/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1280px', // Desktop breakpoint - preserve design at this size
      },
    },
  },
  plugins: [],
}
