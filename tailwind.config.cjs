module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Nunito', 'ui-rounded', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        bubbly: '0 8px 0 rgba(0, 0, 0, .08), 0 15px 25px -5px rgba(0, 0, 0, .05)',
        'bubbly-lg': '0 10px 0 rgba(0, 0, 0, .08), 0 20px 30px -5px rgba(0, 0, 0, .08)',
        'bubbly-primary': '0 6px 0 #0284c7',
        'bubbly-purple': '0 6px 0 #6d28d9',
        'bubbly-green': '0 6px 0 #059669',
        'bubbly-yellow': '0 6px 0 #d97706',
        'bubbly-orange': '0 6px 0 #ea580c',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pop: {
          '0%': { transform: 'scale(.8)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        pop: 'pop .3s cubic-bezier(.175, .885, .32, 1.275)',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
