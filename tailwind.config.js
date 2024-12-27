/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation:{
        'vertical-scroll': 'vertical-scroll 10s linear infinite',
        blink: 'blink 1s steps(2, start) infinite',
        'scroll-left-right': 'scroll-left-right 20s linear infinite',
        fade: 'fadeIn 1.5s ease-in-out',
        scroll: 'scroll 6s ease-in-out infinite',
        borderRun: "borderRun 2s linear infinite",
      },
      textShadow: {
        glow: '0 0 10px rgba(4, 228, 255, 0.5)', // Add your custom glow effect here
      },
      fontFamily: {
        jakarta: ['"Jakarta Sans"', 'sans-serif', ],
        // dancing: ['"Dancing Script"', 'serif'], 
        roboto : ["Roboto Condensed"],
        times: ['"Times New Roman"', 'italic'],
        playwright: ['"Playwright México Guides"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        'vertical-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        scroll: {
          '0%, 33%': { transform: 'translateY(0%)' }, // First h1 is visible
          '33.33%, 66%': { transform: 'translateY(-100%)' }, // Second h1 is visible
          '66.66%, 100%': { transform: 'translateY(-200%)' }, // Third h1 is visible
        },
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
        borderRun: {
          "0%": { top: "0%", left: "0%", width: "0%", height: "2px" },
          "25%": { top: "0%", left: "0%", width: "100%", height: "2px" },
          "50%": { top: "0%", right: "0%", width: "2px", height: "100%" },
          "75%": { bottom: "0%", right: "0%", width: "100%", height: "2px" },
          "100%": { bottom: "0%", left: "0%", width: "2px", height: "100%" },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),require('tailwindcss-textshadow')], 
}

