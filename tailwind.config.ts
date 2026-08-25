import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        'cream-dark': '#F5EDE0',
        cola: '#3E1F0D',
        'cola-brown': '#6B3A1F',
        'cola-light': '#8B5E3C',
        mint: '#A8E6CF',
        'mint-dark': '#7BC8A4',
        'mint-vibrant': '#00C9A7',
        apple: '#B8E986',
        'apple-dark': '#8FD16B',
        'apple-vibrant': '#6ABF4B',
        lime: '#C8E64B',
        'brand-dark': '#1A1A2E',
        'brand-text': '#2D2D3A',
        'brand-muted': '#6B7280',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-warm': 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(168,230,207,0.2), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(184,233,134,0.15), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,248,240,0.6), transparent 60%)',
        noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'brand': '0 4px 30px rgba(0,0,0,0.08)',
        'brand-lg': '0 10px 50px rgba(0,0,0,0.12)',
        'mint': '0 4px 20px rgba(168,230,207,0.4)',
        'apple': '0 4px 20px rgba(184,233,134,0.4)',
        'cola': '0 4px 20px rgba(107,58,31,0.3)',
      },
    },
  },
  plugins: [],
}
export default config
