'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const flavors = [
  {
    name: 'Bold Cola',
    emoji: '🥤',
    tagline: 'Classic Cola Zing',
    description: 'The taste you love, packed into a pocket-sized energy chew. Bold, fizzy, and totally addictive.',
    gradient: 'from-cola-brown to-cola',
    accent: 'bg-cola',
    border: 'border-cola/30',
    shadow: 'shadow-cola',
    text: 'text-cola-brown',
    bg: 'bg-cola/5',
    badge: 'bg-cola/10 text-cola-brown',
  },
  {
    name: 'Mint Lime',
    emoji: '🍃',
    tagline: 'Refreshing & Cool',
    description: 'A cool burst of mint with a hint of lime. Perfect for that mid-day refresh when you need a pick-me-up.',
    gradient: 'from-mint to-mint-vibrant',
    accent: 'bg-mint-vibrant',
    border: 'border-mint-vibrant/30',
    shadow: 'shadow-mint',
    text: 'text-mint-dark',
    bg: 'bg-mint/10',
    badge: 'bg-mint/20 text-mint-dark',
  },
  {
    name: 'Green Apple',
    emoji: '🍏',
    tagline: 'Zingy & Sweet',
    description: 'Sweet meets tangy in this crowd-favorite. A crisp green apple burst that wakes up your taste buds.',
    gradient: 'from-apple to-apple-vibrant',
    accent: 'bg-apple-vibrant',
    border: 'border-apple-vibrant/30',
    shadow: 'shadow-apple',
    text: 'text-apple-dark',
    bg: 'bg-apple/10',
    badge: 'bg-apple/20 text-apple-dark',
  },
];

export default function Flavors() {
  const [active, setActive] = useState(1);

  return (
    <section id="flavors" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-brand-dark">
            Pick Your Flavor 🎉
          </h2>
          <p className="section-subtitle">
            Three amazing tastes, same powerful energy boost. Which one are you reaching for?
          </p>
        </motion.div>

        {/* Flavor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {flavors.map((flavor, idx) => (
            <motion.button
              key={flavor.name}
              type="button"
              onClick={() => setActive(idx)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative text-left rounded-3xl p-8 transition-all duration-300 border-2 ${
                active === idx
                  ? `${flavor.bg} ${flavor.border} ${flavor.shadow}`
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-brand'
              }`}
            >
              {/* Active indicator */}
              {active === idx && (
                <motion.div
                  layoutId="flavor-indicator"
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full ${flavor.accent}`}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* Pouch render */}
              <div className={`w-20 h-28 rounded-2xl bg-gradient-to-b ${flavor.gradient} flex items-center justify-center mb-6 mx-auto`}>
                <span className="text-4xl">{flavor.emoji}</span>
              </div>

              {/* Flavor info */}
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${flavor.badge}`}>
                  {flavor.tagline}
                </span>
                <h3 className={`font-display text-2xl font-black mb-2 ${flavor.text}`}>
                  {flavor.name}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {flavor.description}
                </p>
              </div>

              {/* CTA */}
              <div className={`mt-6 text-center font-bold text-sm ${flavor.text}`}>
                {active === idx ? '✓ Selected' : 'Tap to explore →'}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Taste Profile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 card p-8 text-center"
          >
            <p className="text-brand-muted text-lg">
              <span className="font-bold text-brand-dark">
                {flavors[active].name}
              </span>{' '}
              — {flavors[active].description}
            </p>
            <div className="flex justify-center gap-8 mt-6">
              {[
                { label: 'Sweetness', value: active === 0 ? 70 : active === 1 ? 40 : 75 },
                { label: 'Coolness', value: active === 0 ? 20 : active === 1 ? 90 : 10 },
                { label: 'Energy', value: 100 },
              ].map((bar) => (
                <div key={bar.label} className="text-center">
                  <div className="text-xs text-brand-muted mb-2">{bar.label}</div>
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.value}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full ${flavors[active].accent}`}
                    />
                  </div>
                  <div className="text-xs font-bold text-brand-dark mt-1">{bar.value}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
