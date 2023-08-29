/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F43F5E",

          secondary: "#bbd142",

          accent: "#74f7dd",

          neutral: "#291d2a",

          "base-100": "#323135",

          info: "#43b7e5",

          success: "#156634",

          warning: "#f3d449",

          error: "#f02f28",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
