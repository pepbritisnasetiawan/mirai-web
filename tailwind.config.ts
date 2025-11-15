// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna kita
        'cream': '#FAF8F5',
        'charcoal': '#2F2F2F',
        'gold': '#C08552',
        'grey-soft': '#E0E0E0',
      },
      fontFamily: {
        // Font kita (menggunakan CSS variable yang akan kita atur di layout)
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config