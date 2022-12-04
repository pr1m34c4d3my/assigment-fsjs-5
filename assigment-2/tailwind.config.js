/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        parallax: "url('./src/assets/talitha.jpg')",
        porto1: "url('./src/assets/kirana.jpg')",
        porto2: "url('./src/assets/lila.jpg')",
        porto3: "url('./src/assets/talpav.jpg')",
        porto4: "url('./src/assets/shanika.jpg')",
        shape: "url('./src/assets/Shape.png')",
        testi: "url('./src/assets/Vector.jpg')",
        footer: "url('./src/assets/bg.png')",
      },
      colors: {
        primary: "#FE8C12",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
