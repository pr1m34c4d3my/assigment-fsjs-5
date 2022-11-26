/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./src/assets/background.jpg') #030A15",
      },
      colors: {
        primary: "#FE8C12",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
