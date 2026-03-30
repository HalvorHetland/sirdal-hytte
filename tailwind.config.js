/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f2',
          100: '#e0ede0',
          200: '#c2dbc3',
          300: '#96c098',
          400: '#639f66',
          500: '#3f7d43',
          600: '#2e6332',
          700: '#264f29',
          800: '#1f3f22',
          900: '#1a341c',
          950: '#0d1e0e',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        wood: {
          50: '#fdf6ee',
          100: '#f9e8d1',
          200: '#f2cfa0',
          300: '#e9b06c',
          400: '#df8f3f',
          500: '#d47224',
          600: '#bb591a',
          700: '#9a4118',
          800: '#7d361b',
          900: '#672e19',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

