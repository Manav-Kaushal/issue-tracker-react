/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        facebook: "#4267B2",
        instagram: "#E1306C",
        github: "#6e5494",
        twitter: "#1DA1F2",
        linkedin: "#0077B5",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
