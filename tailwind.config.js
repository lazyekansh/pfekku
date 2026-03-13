/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['var(--font-comfortaa)', 'cursive'],
        fira: ['var(--font-fira)', 'monospace'],
        clash: ['var(--font-clash)', 'sans-serif'],
      },
      colors: {
        primary: '#2DD4BF',
        secondary: '#8B949E',
        surface: 'rgba(255,255,255,0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'bars': 'bars 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        bars: {
          '0%, 100%': { height: '12px' },
          '50%': { height: '20px' },
        }
      }
    },
  },
  plugins: [],
}
