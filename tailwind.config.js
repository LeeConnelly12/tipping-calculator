import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: "#26C2AE",
        "light-blue": "#F3F9FA",
        green: "#00474B",
        "light-green": "#9EBBBD",
        teal: "#26C2AE",
      },
    },
  },
  plugins: [],
};
