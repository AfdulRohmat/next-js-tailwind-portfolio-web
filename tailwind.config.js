module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        tealPrimary: "#14b8a6",
        darkPrimary: "#0f172a",
      },
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
};
