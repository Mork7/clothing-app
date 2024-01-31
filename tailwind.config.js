/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    keyframes: {
      fadeInLeft: {
        from: {
          opacity: "0",
          transform: "translateX(-100%)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
    },
    animation: {
      fadeInLeft: "fadeInLeft 1s ease forwards",
    },
  },
  plugins: [],
}

