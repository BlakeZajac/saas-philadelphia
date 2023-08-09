/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient-light': 'radial-gradient(circle at 0 0, #e2e296, #a1cfff)',
        'radial-gradient-dark': 'radial-gradient(circle at 50% 100%, #3b5477, #000)',
        'linear-gradient-light': 'linear-gradient(45deg, #1ab4d7, #ff9084)',
      },
    },

    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      'gray': {
        DEFAULT: '#030712',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },

      'blue': {
        DEFAULT: '#5B6CFF',
        50: '#E0E3FF',
        100: '#D5DAFF',
        200: '#C1C7FF',
        300: '#ADB5FF',
        400: '#98A3FF',
        500: '#8491FF',
        600: '#6F7EFF',
        700: '#5B6CFF',
        800: '#1E35FF',
        900: '#0017E0',
        950: '#0014C1'
      },
    }
  },
  plugins: [],
};
