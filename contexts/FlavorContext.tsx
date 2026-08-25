'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Flavor = 'cola' | 'mint' | 'apple';

interface FlavorColors {
  bg: string;
  bgLight: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  text: string;
  badge: string;
  gradient: string;
  shadow: string;
  heroGlow: string;
  cardBorder: string;
  btnBg: string;
  btnHover: string;
}

const flavorSchemes: Record<Flavor, FlavorColors> = {
  cola: {
    bg: '#FDF6EE',
    bgLight: '#FAF0E4',
    accent: '#6B3A1F',
    accentLight: '#8B5E3C',
    accentDark: '#3E1F0D',
    text: '#2D1A0E',
    badge: '#F5E6D8',
    gradient: 'linear-gradient(135deg, #6B3A1F 0%, #8B5E3C 50%, #C4956A 100%)',
    shadow: '0 4px 20px rgba(107,58,31,0.3)',
    heroGlow: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(139,94,60,0.15), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(196,149,106,0.12), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(253,246,238,0.6), transparent 60%)',
    cardBorder: 'border-[#C4956A]/30',
    btnBg: '#6B3A1F',
    btnHover: '#3E1F0D',
  },
  mint: {
    bg: '#EEFBF5',
    bgLight: '#E0F8ED',
    accent: '#00C9A7',
    accentLight: '#7BC8A4',
    accentDark: '#009B82',
    text: '#0A2E1F',
    badge: '#D1F5EA',
    gradient: 'linear-gradient(135deg, #00C9A7 0%, #7BC8A4 50%, #A8E6CF 100%)',
    shadow: '0 4px 20px rgba(0,201,167,0.35)',
    heroGlow: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(168,230,207,0.25), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(0,201,167,0.15), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(238,251,245,0.6), transparent 60%)',
    cardBorder: 'border-[#7BC8A4]/30',
    btnBg: '#00C9A7',
    btnHover: '#009B82',
  },
  apple: {
    bg: '#F2FBEB',
    bgLight: '#E8F8DE',
    accent: '#6ABF4B',
    accentLight: '#8FD16B',
    accentDark: '#4A9A2E',
    text: '#1A2E0E',
    badge: '#DCF5CC',
    gradient: 'linear-gradient(135deg, #6ABF4B 0%, #8FD16B 50%, #B8E986 100%)',
    shadow: '0 4px 20px rgba(106,191,75,0.35)',
    heroGlow: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(184,233,134,0.2), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(106,191,75,0.15), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(242,251,235,0.6), transparent 60%)',
    cardBorder: 'border-[#8FD16B]/30',
    btnBg: '#6ABF4B',
    btnHover: '#4A9A2E',
  },
};

interface FlavorContextType {
  activeFlavor: Flavor;
  setActiveFlavor: (flavor: Flavor) => void;
  colors: FlavorColors;
}

const FlavorContext = createContext<FlavorContextType>({
  activeFlavor: 'mint',
  setActiveFlavor: () => {},
  colors: flavorSchemes.mint,
});

export function useFlavor() {
  return useContext(FlavorContext);
}

export function FlavorProvider({ children }: { children: React.ReactNode }) {
  const [activeFlavor, setActiveFlavor] = useState<Flavor>('mint');
  const colors = flavorSchemes[activeFlavor];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--flavor-bg', colors.bg);
    root.style.setProperty('--flavor-bg-light', colors.bgLight);
    root.style.setProperty('--flavor-accent', colors.accent);
    root.style.setProperty('--flavor-accent-light', colors.accentLight);
    root.style.setProperty('--flavor-accent-dark', colors.accentDark);
    root.style.setProperty('--flavor-text', colors.text);
    root.style.setProperty('--flavor-badge', colors.badge);
    root.style.setProperty('--flavor-gradient', colors.gradient);
    root.style.setProperty('--flavor-shadow', colors.shadow);
    root.style.setProperty('--flavor-hero-glow', colors.heroGlow);
    root.style.setProperty('--flavor-card-border', colors.cardBorder);
    root.style.setProperty('--flavor-btn-bg', colors.btnBg);
    root.style.setProperty('--flavor-btn-hover', colors.btnHover);
    document.body.style.backgroundColor = colors.bg;
    document.body.style.color = colors.text;
  }, [colors]);

  return (
    <FlavorContext.Provider value={{ activeFlavor, setActiveFlavor, colors }}>
      {children}
    </FlavorContext.Provider>
  );
}
