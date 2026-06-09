/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#FDF9F3',
        charcoal: '#1A202C',
        terracotta: '#C85D3D',
        'terracotta-dark': '#A84A2E',
        'terracotta-light': '#E8866B',
        sage: '#7D8C7E',
        'sage-light': '#E8EDE8',
        'warm-beige': '#F5EFE6',
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        '3xl': '48rem',
        '6xl': '72rem',
      },
      animation: {
        'cta-glow': 'cta-glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        'cta-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 93, 61, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(200, 93, 61, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
