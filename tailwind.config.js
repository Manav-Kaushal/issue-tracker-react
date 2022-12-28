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
        react: "#61DBFB",
        preact: "#673ab8",
        tailwind: "#4dc0b5",
        typescript: "#007acc",
      },
      boxShadow: {
        badge: "4px 6px 12px 1px rgba(0, 0, 0, 0.2)",
        innerBadge: "4px 4px 8px 2px rgba(0, 0, 0, 0.23)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
