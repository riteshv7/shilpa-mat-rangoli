/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kumkum: {
          50: '#fdf2f3',
          100: '#fbe4e7',
          200: '#f7ccd3',
          300: '#f1a5b2',
          400: '#e77388',
          500: '#d74462',
          600: '#be2648',
          700: '#9e1a38',
          800: '#841932',
          900: '#71182e',
          950: '#420815',
        },
        marigold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        peacock: {
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
        },
        festive: {
          gold: '#d4af37',
          darkgold: '#b8941f',
          lightgold: '#fef9e7',
          cream: '#fffdfa',
          ivory: '#fbf8f1',
          border: '#f3e8d2'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
