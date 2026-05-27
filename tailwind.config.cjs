// Tailwind scans the Vite entry file and React source tree for utility classes.
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      width: {
        "40rem": "40rem",
        "45rem": "45rem",
        "70rem": "70rem",
      },
    },
  },
  plugins: [],
};
