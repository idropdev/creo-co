/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        creo: {
          dark:    '#253937', // Dark Grey/Green
          primary: '#576E51', // Dark Olive Green
          accent:  '#B25F6F', // Mauve/Dusty Rose
          teal:    '#6697A6', // Muted Blue/Teal
          light:   '#F8F9F6', // Tinted Off-white
          muted:   '#6D7A73', // Gray/Green
          border:  '#C0D4AF', // Pale Green/Beige
          green:   '#8EC499', // Light Green
          burgundy:'#743A39', // Brown/Burgundy
          khaki:   '#B8B781', // Mustard/Khaki
        },
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body:    ['Nunito Sans', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        'float':      'float 4s ease-in-out infinite',
        'ticker':     'ticker 35s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

