'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFlavor, Flavor } from '@/contexts/FlavorContext';

const flavorData: Record<Flavor, {
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  gradient: string;
}> = {
  cola: {
    name: 'Bold Cola',
    emoji: '🥤',
    tagline: 'Classic Cola Zing',
    description: 'The taste you love, packed into a pocket-sized energy chew. Bold, fizzy, and totally addictive.',
    gradient: 'linear-gradient(180deg, #8B5E3C, #3E1F0D)',
  },
  mint: {
    name: 'Mint Lime',
    emoji: '🍃',
    tagline: 'Refreshing & Cool',
    description: 'A cool burst of mint with a hint of lime. Perfect for that mid-day refresh when you need a pick-me-up.',
    gradient: 'linear-gradient(180deg, #A8E6CF, #00C9A7)',
  },
  apple: {
    name: 'Green Apple',
    emoji: '🍏',
    tagline: 'Zingy & Sweet',
    description: 'Sweet meets tangy in this crowd-favorite. A crisp green apple burst that wakes up your taste buds.',
    gradient: 'linear-gradient(180deg, #B8E986, #6ABF4B)',
  },
};

const flavorOrder: Flavor[] = ['cola', 'mint', 'apple'];

export default function Flavors() {
  const { activeFlavor, setActiveFlavor, colors } = useFlavor();

  return (
    <section id="flavors" className="py-24 px-4 transition-colors duration-500"
      style={{ backgroundColor: `${colors.bgLight}` }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title" style={{ color: colors.text }}>
            Pick Your Flavor 🎉
          </h2>
          <p className="section-subtitle">
            Three amazing tastes, same powerful energy boost. Which one are you reaching for?
          </p>
        </motion.div>

        {/* Flavor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {flavorOrder.map((flavor, idx) => {
            const f = flavorData[flavor];
            const isActive = activeFlavor === flavor;

            return (
              <motion.button
                key={flavor}
                type="button"
                onClick={() => setActiveFlavor(flavor)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative text-left rounded-3xl p-8 transition-all duration-500"
                style={{
                  backgroundColor: isActive ? `${colors.bgLight}` : '#FFFFFF',
                  border: `2px solid ${isActive ? colors.accent : 'rgba(0,0,0,0.06)'}`,
                  boxShadow: isActive ? colors.shadow : '0 4px 30px rgba(0,0,0,0.06)',
                }}
              >
                {/* Active pulse ring */}
                {isActive && (
                  <motion.div
                    layoutId="flavor-ring"
                    className="absolute -inset-1 rounded-3xl"
                    style={{ border: `3px solid ${colors.accent}`, opacity: 0.4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Pouch render */}
                <div
                  className="w-20 h-28 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  style={{ background: f.gradient }}
                >
                  <span className="text-4xl">{f.emoji}</span>
                </div>

                {/* Flavor info */}
                <div className="text-center">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 transition-colors duration-500"
                    style={{ backgroundColor: `${colors.accent}18`, color: colors.accent }}
                  >
                    {f.tagline}
                  </span>
                  <h3
                    className="font-display text-2xl font-black mb-2 transition-colors duration-500"
                    style={{ color: colors.accent }}
                  >
                    {f.name}
                  </h3>
                  <p className="text-sm leading-relaxed transition-colors duration-500"
                    style={{ color: colors.accentLight }}>
                    {f.description}
                  </p>
                </div>

                {/* CTA */}
                <div
                  className="mt-6 text-center font-bold text-sm transition-colors duration-500"
                  style={{ color: isActive ? colors.accent : colors.accentLight }}
                >
                  {isActive ? '✓ Selected — Site colors changed!' : 'Tap to explore →'}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Taste Profile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 card p-8 text-center"
            style={{ borderColor: `${colors.accent}30` }}
          >
            <p className="text-lg" style={{ color: colors.accentLight }}>
              <span className="font-bold" style={{ color: colors.accent }}>
                {flavorData[activeFlavor].name}
              </span>{' '}
              — {flavorData[activeFlavor].description}
            </p>
            <div className="flex justify-center gap-8 mt-6">
              {[
                { label: 'Sweetness', value: activeFlavor === 'cola' ? 70 : activeFlavor === 'mint' ? 40 : 75 },
                { label: 'Coolness', value: activeFlavor === 'cola' ? 20 : activeFlavor === 'mint' ? 90 : 10 },
                { label: 'Energy', value: 100 },
              ].map((bar) => (
                <div key={bar.label} className="text-center">
                  <div className="text-xs mb-2" style={{ color: colors.accentLight }}>{bar.label}</div>
                  <div className="w-24 h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${colors.accent}15` }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.value}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: colors.accent }}
                    />
                  </div>
                  <div className="text-xs font-bold mt-1" style={{ color: colors.accent }}>{bar.value}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
