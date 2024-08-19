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
        15: "15px",
      },
      colors: {
        orange: "#E70000",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #FF9119, #E70000)",
      },
      borderImage: {
        "gradient-left": "linear-gradient(to bottom, #F5E847, #00AE44)",
      },
      colors: {
        "custom-green": "#00AE44",
        "custom-yellow": "#F5E847",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #F5E847 0%, #00AE44 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities(
        {
          ".border-gradient-left": {
            borderImage: theme("borderImage.gradient-left"),
            borderImageSlice: 1,
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
