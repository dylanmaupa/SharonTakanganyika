/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8ED',
          100: '#F9EFDB',
          200: '#F2DEB8',
          300: '#EBC890',
          400: '#E3B06E',
          500: '#D4AF37',
          600: '#B8952F',
          700: '#9A7B28',
          800: '#7C6122',
          900: '#5E481A',
        },
        earth: {
          50: '#F7F3F0',
          100: '#E8E0D8',
          200: '#D1C0B1',
          300: '#B5A089',
          400: '#9A8066',
          500: '#8B7355',
          600: '#6F5A44',
          700: '#5A4A3A',
          800: '#453A2F',
          900: '#302A24',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};