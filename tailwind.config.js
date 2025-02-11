
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {colors: {
        darkBg: "#020307",
      },},
    },
    plugins: [require('tailwind-scrollbar')],
  };
  