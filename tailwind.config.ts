import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        appcolors: {
          secondaryBg: '#f8f9fa',
          darkGray: '#343a40',
        },
      },
    },
  },
  plugins: [],
}
export default config

