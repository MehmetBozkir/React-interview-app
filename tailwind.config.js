/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-custom": "#8FB2F5",
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      minHeight: {
        'screen': '92vh',
      }
    },
  },
  plugins: [require("daisyui")],
};
