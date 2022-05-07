module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rating-1': '#e76c53',
        'rating-2': '#efd077',
        'rating-3': '#26948b',
        'rating-4': '#00fca8',
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
    fontFamily: {
      body: ['"Proxima Nova"', 'sans-serif'],
      footer: ['"Cubano"', 'sans-serif'],
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
  },
  plugins: [],
}
