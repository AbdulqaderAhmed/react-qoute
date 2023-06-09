/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        joker: "url('./src/assets/img/joker.jpg')",
        anime: "url('./src/assets/img/anime.jpg')",
        sunset: "url('./src/assets/img/sunset.jpg')",
      },
    },
  },
  plugins: [],
};
