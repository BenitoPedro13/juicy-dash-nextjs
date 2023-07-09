/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'metrics': '2px 2px 2px 0px rgba(16, 24, 40, 0.06);',
        'metrics-hover': '2px 2px 0px 0px #000000;'
      },
      fontFamily: {
        'Balgin': 'Balgin',
        'Balgin-Text': 'Balgin Text',
        'Balgin-Expanded': 'Balgin Expanded',
        'Balgin-Display': 'Balgin Display',
        'Inter': '__Inter_0ec1f4',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
