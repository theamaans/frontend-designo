// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0%)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
        slideDown: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
        reverseSlideUp: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
        reverseSlideDown: {
          '0%': { transform: 'translateY(0%)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-in-out forwards',
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        reverseSlideUp: 'reverseSlideUp 0.3s ease-in-out forwards',
        reverseSlideDown: 'reverseSlideDown 0.3s ease-in-out forwards',
      },
  
    },
  },
  plugins: [],
};
