/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2828',
          dark: '#b91c1c',
          light: '#ef4444',
        },
        accent: {
          DEFAULT: '#F59E0B',
          gold: '#FFD700',
          dark: '#D97706',
        },
        background: {
          light: '#f8f6f6',
          dark: '#201212',
        },
        surface: {
          light: '#ffffff',
          dark: '#2a1a1a',
        },
        burgundy: {
          deep: '#2a0a0a',
          light: '#5c1010',
        },
        charcoal: '#1A1A1A',
        slate: '#64748B',
        cream: '#FAFAF9',
      },
      fontFamily: {
        display: ['Inter', 'Noto Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)',
        medium: '0 8px 24px rgba(0, 0, 0, 0.12)',
        hard: '0 12px 36px rgba(0, 0, 0, 0.16)',
        crimson: '0 8px 24px rgba(220, 40, 40, 0.3)',
        glow: '0 0 20px rgba(220, 40, 40, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(220, 40, 40, 0.5)' },
          '50%': { boxShadow: '0 0 25px rgba(220, 40, 40, 0.8)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}
