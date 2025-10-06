/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#DC2626",
          yellow: "#FBBF24",
          orange: "#F97316",
        },
      },
    },
  },
  plugins: [],
};
