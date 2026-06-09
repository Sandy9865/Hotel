/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        night: "#152128",
        forest: "#244239",
        moss: "#6f8666",
        rust: "#b86645",
        sun: "#e9b85c",
        paper: "#fffdf7",
        cloud: "#f3f0e8",
        mist: "#e6ebe5",
        ink: "#182329",
        text: "#415058",
        muted: "#6d7b80",
        line: "rgba(24, 35, 41, 0.14)"
      },
      fontFamily: {
        heading: ["Cambria", "Georgia", "\"Times New Roman\"", "serif"],
        body: ["Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 44px rgba(21, 33, 40, 0.10)",
        lift: "0 24px 58px rgba(21, 33, 40, 0.16)",
        header: "0 10px 28px rgba(21, 33, 40, 0.06)",
        card: "0 12px 28px rgba(21, 33, 40, 0.06)"
      },
      borderRadius: {
        hotel: "8px"
      }
    }
  },
  plugins: []
};
