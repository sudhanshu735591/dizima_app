/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        blink: 'blink 1s steps(2, start) infinite',
        'scroll-left-right': 'scroll-left-right 20s linear infinite',
        fade: 'fadeIn 1.5s ease-in-out',
      },
      textShadow: {
        glow: '0 0 10px rgba(4, 228, 255, 0.5)', // Add your custom glow effect here
      },
      fontFamily: {
        jakarta: ['"Jakarta Sans"', 'sans-serif', ],
        dancing: ['"Dancing Script"', 'serif'], 
        roboto : ["Roboto Condensed"],
        times: ['"Times New Roman"', 'italic'],
        playwright: ['"Playwright México Guides"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'scroll-left-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),require('tailwindcss-textshadow')], 
}

