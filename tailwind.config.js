// const autoprefixer = require("autoprefixer");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },
    colors: {
      gray: { 100: "#808080", 200: "#343640", 300: "#1d1e24" },
      white: "#fff",
      cyan: "#14ffec",
      red: "#d6436e",
      green: "#25da72",
      fav: "#282931",
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".scrollbar-thin": {
    //       scrollbarWidth: "thin",
    //       scrollbarColor: "rgb(31 29 29) white",
    //     },
    //     ".scrollbar-webkit": {
    //       "&::-webkit-scrollbar": {
    //         width: "0px",
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         background: "white",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         background: "rgb(31 41 55)",
    //         borderRadius: "20px",
    //         border: "1px solid white",
    //       },
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // },
  ],
};
