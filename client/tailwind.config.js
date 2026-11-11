/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#13251C',
          900: '#09130E',
          800: '#13251C',
          700: '#1E3A2B',
        },
        cream: '#F6F1E7',
        paper: '#FFFDF7',
        lime: '#D8F25A',
        moss: '#3D6A4B',
        clay: '#E57858',
        sand: '#E7DDCB',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(19, 37, 28, 0.35)',
        lift: '0 30px 80px -35px rgba(19, 37, 28, 0.5)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
