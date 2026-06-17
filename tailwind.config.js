/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1C3B',
          dark: '#1f2028',
          light: '#142D52',
          50: '#EDF1F8',
          100: '#D3DCED',
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
          DEFAULT: '#dac37f',
          dark: '#c4a95f',
          light: '#e8d49f',
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
