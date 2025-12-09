/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1e3a8a', // Dark blue
          light: '#3b82f6', // Bright blue
          dark: '#0f172a', // Very dark blue/slate
          gray: '#f3f4f6', // Light gray bg
        }
      }
    },
  },
  plugins: [],
}
