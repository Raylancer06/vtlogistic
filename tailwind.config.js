/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d9b',
          800: '#0b2055',
          900: '#08173d',
          950: '#050c20',
        },
        navy: {
          deep: '#060B14',
          card: '#0B1528',
          border: '#162544',
          light: '#1E293B',
        },
        accent: {
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          orange: '#FF7A00',
        },
        whatsapp: {
          green: '#25D366',
          hover: '#20BA5A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(0, 82, 204, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
        'premium-hover': '0 25px 50px -12px rgba(0, 82, 204, 0.22), 0 0 1px 1px rgba(0, 102, 255, 0.2)',
        'glow-blue': '0 0 25px rgba(0, 102, 255, 0.35)',
        'glow-amber': '0 0 25px rgba(245, 158, 11, 0.35)',
      },
    },
  },
  plugins: [],
};
