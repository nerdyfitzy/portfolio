/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#041B15",
        "dark-blue": "#456990",
        periwinkle: "#BEB7DF",
        "light-green": "#7FD1B9",
        thistle: "#D3BCCC",
        "hooker-green": "#5A7D7C",
      },
      fontFamily: {
        sans: "Cousine",
      },
    },
  },
  plugins: [],
};
