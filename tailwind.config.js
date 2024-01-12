/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        'karla': ['var(--font-karla)'],
      },
      colors: {
        'anti-flash-white':  '#F5F7FB',
        'delft-blue':  '#293264',
        'yinmn-blue':  '#4D5B9E',
        'lavender':  '#D6DBF5',
        'alice-blue':  '#DEEBF8',
        'lemon':  '#FFFAD1',
        'tea-rose':  '#F8BCBC',
        'danger':  '#F8BCBC',
        'success':  '#94D7A2',
      }
    },
  },
  plugins: [],
}
