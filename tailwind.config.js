/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl:"1300px"
    },
    extend: {
      colors: {
        primary: "#EE4D38",
        purplishColor: "#F8F8FF",
        darkBlueColor: "#1A194D",
        lightGray: "#62618F",
        borderColor: "#CBCBD9",
        receiptshadowColor: "rgb(223, 223, 253, 0.6)",
      },
      boxShadow: {
        "3xl": " 0px 8px 19px rgba(223, 223, 253, 0.6)",
      },
    },
  },
  plugins: [],
};
