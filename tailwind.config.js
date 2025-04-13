/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#000000',
        'netflix-dark': '#141414',
        'netflix-gray': '#303030',
        red: {
          600: '#DC2626',
          700: '#B91C1C'
        },
        zinc: {
          800: '#27272A'
        },
        gray: {
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280'
        }
      },
    },
  },
  plugins: [],
} 