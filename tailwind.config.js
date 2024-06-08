/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "show-down": {
          "0%": { opacity: "0", transform: "translate3d(0, -15px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "show-down": "show-down 0.5s ease-in-out", // Você pode ajustar a duração e o timing function conforme necessário
      },
    },
  },
  plugins: [],
};
