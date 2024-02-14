import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        body: "#C5E4E7",
        "light-blue": "#F3F9FA",
        green: "#00474B",
        "light-green": "#9EBBBD",
        teal: "#26C2AE",
        turquoise: "#5E7A7D",
        gray: "#7F9D9F",
      },
    },
  },
  plugins: [],
}
