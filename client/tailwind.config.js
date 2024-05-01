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
      },
      fontFamily: {
        sans: "Cousine",
      },
    },
  },
  plugins: [],
};
