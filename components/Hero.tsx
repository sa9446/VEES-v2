'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, Truck, Leaf } from 'lucide-react';

export default function Hero() {
  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
      {/* Warm background glow */}
      <div className="absolute inset-0 bg-hero-warm" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-32 left-4 lg:left-12 z-10 hidden lg:block"
      >
        <div className="badge-mint float">
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
        <div className="badge-apple float" style={{ animationDelay: '0.5s' }}>
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
        <div className="badge-cola float" style={{ animationDelay: '1s' }}>
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
              <span className="font-display text-brand-dark tracking-[0.15em] text-sm uppercase font-bold">
                VEES Energy Chews
              </span>
              <span className="badge-mint text-xs !px-3 !py-1">
                <Star className="w-3 h-3 fill-current" />
                ★ 4.9/5
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-brand-dark"
            >
              Fun, Fast &
              <br />
              <span className="gradient-hero">Delicious</span>
              <br />
              Daily Energy.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-xl lg:text-2xl text-brand-muted font-medium max-w-lg"
            >
              Melts fast, works faster.{' '}
              <span className="text-mint-vibrant font-bold">Only ₹10</span>{' '}
              per chew.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-3 text-base text-brand-muted"
            >
              {[
                { icon: '⚡', text: 'Kicks in 5 minutes', color: 'text-mint-vibrant' },
                { icon: '💰', text: '₹10 vs ₹120 energy drinks', color: 'text-apple-vibrant' },
                { icon: '🏃', text: 'Fits in your pocket — no sloshy stomach', color: 'text-cola-brown' },
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
              className="flex items-center gap-2 text-sm text-brand-muted"
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-medium">4.9/5 from early chewers</span>
            </motion.div>
          </motion.div>

          {/* Right: Pouch Renders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Three flavored pouch cards */}
              <div className="flex gap-4 lg:gap-6">
                {/* Cola Pouch */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-28 h-40 lg:w-36 lg:h-52 rounded-3xl bg-gradient-to-b from-cola-brown to-cola flex flex-col items-center justify-center shadow-cola border-2 border-cola/20"
                >
                  <span className="text-4xl lg:text-5xl mb-2">🥤</span>
                  <span className="font-display font-black text-white text-sm lg:text-base">Cola</span>
                  <span className="text-cola-light/80 text-xs mt-1">Bold & Zingy</span>
                </motion.div>

                {/* Mint Lime Pouch */}
                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="w-28 h-40 lg:w-36 lg:h-52 rounded-3xl bg-gradient-to-b from-mint to-mint-vibrant flex flex-col items-center justify-center shadow-mint border-2 border-mint-vibrant/20 -mt-6 lg:-mt-8"
                >
                  <span className="text-4xl lg:text-5xl mb-2">🍃</span>
                  <span className="font-display font-black text-white text-sm lg:text-base">Mint Lime</span>
                  <span className="text-white/80 text-xs mt-1">Refreshing</span>
                </motion.div>

                {/* Green Apple Pouch */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="w-28 h-40 lg:w-36 lg:h-52 rounded-3xl bg-gradient-to-b from-apple to-apple-vibrant flex flex-col items-center justify-center shadow-apple border-2 border-apple-vibrant/20"
                >
                  <span className="text-4xl lg:text-5xl mb-2">🍏</span>
                  <span className="font-display font-black text-white text-sm lg:text-base">Green Apple</span>
                  <span className="text-white/80 text-xs mt-1">Zingy & Sweet</span>
                </motion.div>
              </div>

              {/* Price badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-cola text-white font-black text-xl px-6 py-3 rounded-2xl shadow-cola"
              >
                Only ₹10/chew
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
