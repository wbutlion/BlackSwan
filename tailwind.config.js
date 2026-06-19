/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1f2028',
          dark: '#141418',
          light: '#2a2b35',
          50: '#f0f0f2',
          100: '#d5d5da',
        },
        cream: {
          DEFAULT: '#f7f8fa',
          dark: '#FDF0E6',
        },
        slate: {
          DEFAULT: '#64748B',
          light: '#8898AA',
        },
        tangerine: {
          DEFAULT: '#d4af37',
          dark: '#b8962e',
          light: '#e2c96a',
        },
        charcoal: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'slide-right': 'slideRight 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
