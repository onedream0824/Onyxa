/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
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
          950: '#451a03',
        },
        luxury: {
          dark: '#0a0a0a',
          charcoal: '#1a1a1a',
          slate: '#2d2d2d',
          gold: '#d4af37',
          'gold-light': '#f4e4bc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        slideUp: "slideUp 2s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out",
        slideIn: "slideIn 0.8s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 175, 55, 0.1)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.15)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
};
