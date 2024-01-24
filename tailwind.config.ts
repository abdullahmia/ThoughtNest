import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      container: {
        center: true,
        screens: {
          desktop: '1270px',
        },
      },
      colors: {
        primary: 'var(--primary-text-color)',
        secondary: 'var(--secondary-text-color)',
        white: 'var(--white-color)',
        lightGray: 'var(--light-gray)',
        deepGray: 'var(--deep-gray)',
        dangerColor: 'var(--danger-color)',
        fill: {
          primary: 'var(--primary-fill-color)',
          secondary: 'var(--secondary-fill-color)',
          white: 'var(--white-fill-color)',
          info: 'var(--info-fill-color)',
          warning: 'var(-warning-fill-color)',
        },
      },
    },
  },
  plugins: [],
}
export default config
