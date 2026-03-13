/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#fbbe07',
        surface: '#0a0a0a',
      },
      fontFamily: {
        cabinet: ['"Cabinet Grotesk"', 'sans-serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
      animation: {
        shine: 'shine 3s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
