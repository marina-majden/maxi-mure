/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        text: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
}