/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "url('/images/background.png')",
        checkerboard: "url('/images/checkerboard.png')",
        "lucky-colors": "url('/images/lucky-colors.png')",
        bag: "url('/images/in-bag.png')",
      },
    },
  },
  plugins: [],
};
