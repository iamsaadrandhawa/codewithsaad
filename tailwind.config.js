/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      extend: {
        keyframes: {
          armSwingLeft: { '0%': { transform: 'rotate(-18deg)' }, '100%': { transform: 'rotate(18deg)' } },
          armSwingRight: { '0%': { transform: 'rotate(18deg)' }, '100%': { transform: 'rotate(-18deg)' } },
          legSwingLeft: { '0%': { transform: 'rotate(-14deg)' }, '100%': { transform: 'rotate(14deg)' } },
          legSwingRight: { '0%': { transform: 'rotate(14deg)' }, '100%': { transform: 'rotate(-14deg)' } },
        },
      },
      colors: {
        ink: {
          950: 'rgb(var(--ink-950) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          850: 'rgb(var(--ink-850) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
        },
        white: 'rgb(var(--white) / <alpha-value>)',
        slate: {
          200: 'rgb(var(--slate-200) / <alpha-value>)',
          300: 'rgb(var(--slate-300) / <alpha-value>)',
          400: 'rgb(var(--slate-400) / <alpha-value>)',
          500: 'rgb(var(--slate-500) / <alpha-value>)',
          600: 'rgb(var(--slate-600) / <alpha-value>)',
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
        orbitSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitSpinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        navPulse: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(40px) scale(0.4)', opacity: '0' },
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
        'orbit-spin': 'orbitSpin 24s linear infinite',
        'orbit-spin-reverse': 'orbitSpinReverse 24s linear infinite',
        'nav-pulse': 'navPulse 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
