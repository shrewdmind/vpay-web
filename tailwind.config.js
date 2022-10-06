/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%': { 
            transform: 'translateY(0)'
          },
          '50%': { transform: 'translateY(-5%)'},
          '100%': { transform: 'translateY(0)'},
        }
      },
      animation: {
        'updown-motion': 'updown 3s linear infinite',
      }
    },
    fontFamily: {
      poppings: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
}
