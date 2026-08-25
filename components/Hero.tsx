'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useFlavor, Flavor } from '@/contexts/FlavorContext';
import Image from 'next/image';

const pouchImages: Record<string, string> = {
  cola: '/pouch-cola.svg',
  mint: '/pouch-mint.svg',
  apple: '/pouch-apple.svg',
};

const flavorData: Record<Flavor, {
  name: string;
  emoji: string;
  tagline: string;
  gradient: string;
}> = {
  cola: {
    name: 'Bold Cola',
    emoji: '🥤',
    tagline: 'Bold & Zingy',
    gradient: 'linear-gradient(180deg, #8B5E3C, #3E1F0D)',
  },
  mint: {
    name: 'Mint Lime',
    emoji: '🍃',
    tagline: 'Refreshing',
    gradient: 'linear-gradient(180deg, #A8E6CF, #00C9A7)',
  },
  apple: {
    name: 'Green Apple',
    emoji: '🍏',
    tagline: 'Zingy & Sweet',
    gradient: 'linear-gradient(180deg, #B8E986, #6ABF4B)',
  },
};

const flavorOrder: Flavor[] = ['cola', 'mint', 'apple'];

export default function Hero() {
  const { colors, activeFlavor, setActiveFlavor } = useFlavor();

  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 transition-colors duration-600">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />

      {/* Main content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span
                className="font-display tracking-[0.15em] text-xs sm:text-sm uppercase font-bold transition-colors duration-500"
                style={{ color: colors.accent }}
              >
                VEES Energy Chews
              </span>
              <span className="badge text-xs !px-3 !py-1">
                <Star className="w-3 h-3 fill-current" />
                ★ 4.9/5
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              style={{ color: colors.text }}
            >
              The Gods
              <br />
              <span className="gradient-hero">Ran On This</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl font-medium max-w-lg transition-colors duration-500"
              style={{ color: colors.accentLight }}
            >
              Melts fast, works faster.{' '}
              <span className="font-bold" style={{ color: colors.accent }}>Only ₹10</span>{' '}
              per chew.
            </motion.p>

            {/* Bullet points */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-3 text-sm sm:text-base"
              style={{ color: colors.accentLight }}
            >
              {[
                { icon: '⚡', text: 'Kicks in 5 minutes' },
                { icon: '💰', text: '₹10 vs ₹120 energy drinks' },
                { icon: '🏃', text: 'Fits in your pocket — no sloshy stomach' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="text-lg sm:text-xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA + Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-4 pt-2"
            >
              <button
                type="button"
                onClick={scrollToBuy}
                className="btn-primary inline-block"
              >
                Order Your Pack — ₹10
              </button>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: colors.accentLight }}
              >
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 from early chewers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Product Image + Flavor Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Centered product pouch image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [-4, 4, -4] }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative"
              >
                {/* Glow behind pouch */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30 transition-colors duration-600"
                  style={{ backgroundColor: colors.accent }}
                />
                <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-60 md:h-80">
                  <Image
                    src={pouchImages[activeFlavor]}
                    alt={`VEES ${flavorData[activeFlavor].name} pouch`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 3 Flavor selector cards */}
            <div className="flex gap-3 sm:gap-4">
              {flavorOrder.map((flavor) => {
                const f = flavorData[flavor];
                const isActive = activeFlavor === flavor;

                return (
                  <motion.button
                    key={flavor}
                    type="button"
                    onClick={() => setActiveFlavor(flavor)}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex flex-col items-center justify-center rounded-2xl p-3 sm:p-4 transition-all duration-400 cursor-pointer"
                    style={{
                      width: '5rem',
                      height: '6.5rem',
                      background: isActive ? `${colors.accent}15` : '#FFFFFF',
                      border: `2px solid ${isActive ? colors.accent : 'rgba(0,0,0,0.08)'}`,
                      boxShadow: isActive ? colors.shadow : '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    {/* Pouch thumbnail */}
                    <div
                      className="w-10 h-14 rounded-lg flex items-center justify-center mb-1"
                      style={{ background: f.gradient }}
                    >
                      <span className="text-xl">{f.emoji}</span>
                    </div>
                    <span
                      className="font-display text-xs font-black transition-colors duration-500"
                      style={{ color: isActive ? colors.accent : colors.text }}
                    >
                      {f.name}
                    </span>
                    <span
                      className="text-[10px] transition-colors duration-500"
                      style={{ color: colors.accentLight }}
                    >
                      {f.tagline}
                    </span>

                    {/* Active dot */}
                    {isActive && (
                      <motion.div
                        layoutId="hero-flavor-dot"
                        className="absolute -bottom-1.5 w-2 h-2 rounded-full transition-colors duration-500"
                        style={{ backgroundColor: colors.accent }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
