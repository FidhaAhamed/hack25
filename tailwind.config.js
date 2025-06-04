/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nebula: ['Nebula', 'sans-serif'],  
        moonwalkmiss: ['Moonwalk Miss', 'cursive'],
        csclairemonodrawn: ['CSClaireMonoDrawn', 'monospace'],
      },
    },
  },
  plugins: [],
}