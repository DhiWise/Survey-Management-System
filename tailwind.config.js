module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        black_900_a0: "#000000a0",
        gray_901: "#171717",
        gray_900_75: "#17171775",
        gray_902: "#181818",
        gray_900: "#262627",
        black_900_90: "#00000090",
        gray_300: "#dfdfdf",
        gray_900_19: "#26262719",
        black_900_1e: "#0000001e",
        white_A700_87: "#ffffff87",
        black_900_87: "#00000087",
        black_900_65: "#00000065",
        yellow_600: "#ffce38",
        black_900_99: "#00000099",
        black_900_dd: "#000000dd",
        black_900: "#000000",
        white_A700: "#ffffff",
        gray_900_90: "#17171790",
      },
      borderRadius: { radius6: "6px", radius10: "10px", radius50: "50%" },
      letterSpacing: { ls1: "1px" },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
