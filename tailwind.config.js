/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#8FA68A',
          light: '#B5C9B0',
          dark: '#6B8566',
        },
        cream: {
          DEFAULT: '#FAF6EE',
          warm: '#F5EDDF',
        },
        ivory: '#FFFFF0',
        dustyrose: {
          DEFAULT: '#C9A4A0',
          light: '#DBBAB7',
          dark: '#A67F7B',
        },
        gold: {
          DEFAULT: '#C8A96A',
          light: '#E2C97E',
          dark: '#9E7B3F',
        },
        beige: {
          DEFAULT: '#E8DED0',
          warm: '#D9CCBA',
        },
        charcoal: '#3A3530',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        envelope: '0 25px 60px rgba(58,53,48,0.25)',
        card: '0 4px 24px rgba(58,53,48,0.10)',
        'gold-sm': '0 2px 8px rgba(200,169,106,0.25)',
      },
      animation: {
        'wax-pulse': 'waxPulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 1.5s ease forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        waxPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,169,106,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(200,169,106,0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
