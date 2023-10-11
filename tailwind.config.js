/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        "violet-dark": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
      },
      neutral: {
        "violet-very-dark": "hsl(270, 9%, 17%)",
        "grayish-violet-dark": "hsl(273, 4%, 51%)",
        "gray-very-light": "hsl(0, 0%, 98%)",
      },
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
  },
  plugins: [],
};
