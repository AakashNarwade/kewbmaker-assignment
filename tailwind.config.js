module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          '"Helvetica Neue"',
          '"Noto Sans"',
          '"Liberation Sans"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        15: "15px", // Custom border width of 15px
      },
      colors: {
        orange: "#E70000", // Custom orange color
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #FF9119, #E70000)",
      },
    },
  },
  plugins: [],
};
