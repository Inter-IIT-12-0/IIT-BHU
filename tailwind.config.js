module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        disappear: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100vw)' },
        }
      }
    },
  },
  plugins: [],
}