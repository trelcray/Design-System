/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      colors: {
        gray: {
          900: "#121214",
          800: "#202024",
          400: "#7c7c8a",
          200: "#c4c4cc",
          100: "#e1e1e6",
        },

        cyan: {
          500: "#81d8f7",
          300: "#9be1fb",
        },
      },
      keyframes: {
        progress: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        }
      },
      animation: {
        progress: 'progress 5s ease-in infinite',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '5000': '5000ms',
      }
    },
  },
  plugins: [],
};
