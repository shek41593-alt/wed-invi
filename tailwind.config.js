/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A31D36', // Deep Crimson Maroon
          dark: '#8B0000',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          light: '#F5EFE6',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#AA7C11',
        },
        espresso: '#211611',
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #AA7C11 100%)',
      },
      boxShadow: {
        'gold': '0 4px 15px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
