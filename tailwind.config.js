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
      fontFamily: {
        'Balgin': 'Balgin',
        'Balgin-Text': 'Balgin Text',
        'Balgin-Expanded': 'Balgin Expanded',
        'Inter': '__Inter_0ec1f4',
        'Jakarta': '__Plus_Jakarta_Sans_fd0c7c',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
