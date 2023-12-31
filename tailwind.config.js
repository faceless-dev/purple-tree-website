/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 0px 11px 0px rgba(168, 46, 255, 1)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#141414",
        purple: "#A82EFF",
        white: "#F5F5F5",
        gray: "##8E8E8E",
      },
      fontFamily: {
        base: "Gorga",
        light:"Gorga-Light",
        bold:"Gorga-Bold",
      },
    },
  },
  plugins: [],
};
