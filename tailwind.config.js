module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Fira Sans"', 'sans-serif'],
      footer: ['"Cubano"', 'sans-serif'],
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    // minHeight: (theme) => ({
    //   0: '0',
    //   ...theme('spacing'),
    //   full: '100%',
    //   screen: 'calc(var(--vh) * 100)',
    // }),
  },
  plugins: [],
}
