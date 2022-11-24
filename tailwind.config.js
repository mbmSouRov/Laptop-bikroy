/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ABB3",

          secondary: "#3C4048",

          accent: "#B2B2B2",

          neutral: "#414558",

          "base-100": "#EAEAEA",

          info: "#8BE8FD",

          success: "#52FA7C",

          warning: "#F1FA89",

          error: "#FF5757",
        },
      },
    ],
  },
};
