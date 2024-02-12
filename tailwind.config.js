/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueBase: "#3178c6",
        darkBlue: "#1d4971",
        lightBlue: "#4c8dcf",
        saturatedBlue: "#0066b2",
        desaturatedBlue: "#5394d4",
        blackBlue: "#112069",
        whiteBlue: "#2ec6e5",
        purple: "#6b41d2",
        black: "#000000",
        white: "#eeeeee",
        error: "#e70008",
        input: "#f7e9fbb3",
        darkGray: "#666666",
        lightGray: "#cccccc",
      },
      fontFamily: {
        body: "Inter_400Regular",
        subtitle: "Inter_500Medium",
        heading: "Inter_600SemiBold",
        bold: "Inter_700Bold",
      },
    },
  },
  plugins: [require("nativewind/tailwind/css")],
};
