import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0B0F17',
        'brand-lime': '#CCFF00',
        'brand-cyan': '#00F0FF',
        'brand-slate': '#111827',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        md: '12px',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(204,255,0,0.12), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(0,240,255,0.1), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(204,255,0,0.06), transparent 60%)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
export default config
