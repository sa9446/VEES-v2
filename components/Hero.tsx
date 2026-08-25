'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, Truck, Leaf } from 'lucide-react';
import { useFlavor } from '@/contexts/FlavorContext';
import Image from 'next/image';

const pouchImages: Record<string, string> = {
  cola: '/pouch-cola.svg',
  mint: '/pouch-mint.svg',
  apple: '/pouch-apple.svg',
};

const flavorNames: Record<string, string> = {
  cola: 'Bold Cola',
  mint: 'Mint Lime',
  apple: 'Green Apple',
};

export default function Hero() {
  const { colors, activeFlavor } = useFlavor();

  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 transition-colors duration-600">
      {/* Warm background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-32 left-4 lg:left-12 z-10 hidden lg:block"
      >
        <div className="badge float">
          <Leaf className="w-4 h-4" />
          100% Vegetarian
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-48 right-4 lg:right-12 z-10 hidden lg:block"
      >
        <div className="badge float" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-4 h-4" />
          Zero Sugar · Low Cal
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-32 left-8 lg:left-20 z-10 hidden lg:block"
      >
        <div className="badge float" style={{ animationDelay: '1s' }}>
          <Truck className="w-4 h-4" />
          Pocket-Sized Energy
        </div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="font-display tracking-[0.15em] text-sm uppercase font-bold transition-colors duration-500"
                style={{ color: colors.accent }}>
                VEES Energy Chews
              </span>
              <span className="badge text-xs !px-3 !py-1">
                <Star className="w-3 h-3 fill-current" />
                ★ 4.9/5
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              style={{ color: colors.text }}
            >
              The Gods
              <br />
              <span className="gradient-hero">Ran On This</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-xl lg:text-2xl font-medium max-w-lg transition-colors duration-500"
              style={{ color: colors.accentLight }}
            >
              Melts fast, works faster.{' '}
              <span className="font-bold" style={{ color: colors.accent }}>Only ₹10</span>{' '}
              per chew.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-3 text-base"
              style={{ color: colors.accentLight }}
            >
              {[
                { icon: '⚡', text: 'Kicks in 5 minutes' },
                { icon: '💰', text: '₹10 vs ₹120 energy drinks' },
                { icon: '🏃', text: 'Fits in your pocket — no sloshy stomach' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button type="button" onClick={scrollToBuy} className="btn-primary">
                Order Your Pack — ₹10
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex items-center gap-2 text-sm"
              style={{ color: colors.accentLight }}
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-medium">4.9/5 from early chewers</span>
            </motion.div>
          </motion.div>

          {/* Right: Centered Product Pouch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFlavor}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: [-6, 6, -6] }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    rotateY: { duration: 0.4 },
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="relative"
                >
                  {/* Glow behind pouch */}
                  <div
                    className="absolute inset-0 rounded-full blur-3xl opacity-40 transition-colors duration-600"
                    style={{ backgroundColor: colors.accent }}
                  />

                  {/* Product image */}
                  <div className="relative w-64 h-80 lg:w-80 lg:h-[26rem] mx-auto">
                    <Image
                      src={pouchImages[activeFlavor]}
                      alt={`VEES ${flavorNames[activeFlavor]} pouch`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Flavor label */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="text-center mt-4"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeFlavor}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold transition-colors duration-500"
                    style={{ backgroundColor: `${colors.accent}18`, color: colors.accent }}
                  >
                    {flavorNames[activeFlavor]} — ₹10
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
