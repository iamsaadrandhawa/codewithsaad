/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070A0F',
          900: '#0B0F14',
          850: '#0F1620',
          800: '#131C28',
          700: '#1A2533',
          600: '#243041',
          500: '#334155',
        },
        accent: {
          DEFAULT: '#22D3EE',
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
        },
        signal: {
          DEFAULT: '#818CF8',
          400: '#A5B4FC',
          500: '#818CF8',
          600: '#6366F1',
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(34, 211, 238, 0.18)',
        'glow-sm': '0 0 12px rgba(34, 211, 238, 0.12)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSignal: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(8px,-6px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        dash: {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fiberPulse: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        portBlink: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-rise': 'fadeRise 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'pulse-signal': 'pulseSignal 2.4s ease-in-out infinite',
        drift: 'drift 9s ease-in-out infinite',
        dash: 'dash 1.4s linear infinite',
        blink: 'blink 1.1s step-end infinite',
        'fiber-pulse': 'fiberPulse 3s linear infinite',
        'port-blink': 'portBlink 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
