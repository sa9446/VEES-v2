'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const PITCH_DECK_URL =
  'https://docs.google.com/presentation/d/1DLTtfgtZkxHz8rDRjKAKxrRoHZksbzCv/preview';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16 pb-12">
      <div className="absolute inset-0 bg-hero-glow" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{ backgroundImage: 'var(--tw-gradient-stops)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-brand-lime tracking-[0.2em] text-sm uppercase font-bold"
            >
              VEES
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="gradient-text">Energy,</span>
              <br />
              Evolved.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 font-medium"
            >
              The{' '}
              <span className="text-brand-lime font-bold">
                ₹10 Daily Caffeine Chew
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-md leading-relaxed"
            >
              60mg of fast-acting caffeine via sublingual absorption.
              Pocket-sized. Zero bloat.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="flex flex-col gap-3 text-sm text-gray-300"
            >
              {[
                {
                  iconClass: 'text-brand-lime',
                  text: '₹10 vs ₹110+ energy drinks',
                },
                {
                  iconClass: 'text-brand-cyan',
                  text: 'Hits in 5–10 minutes',
                },
                {
                  iconClass: 'text-brand-lime',
                  text: 'Fits in a pocket — no liquid bloat',
                },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2.5">
                  <Zap className={`w-5 h-5 shrink-0 ${item.iconClass}`} />
                  <span>{item.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button type="button" onClick={scrollToWaitlist} className="btn-primary">
                Join Early Access
              </button>
              <a
                href={PITCH_DECK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Pitch Deck
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 lg:w-[22rem] lg:h-[22rem]">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-brand-lime to-brand-cyan rounded-full blur-3xl"
              />

              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 glass rounded-full flex items-center justify-center pulse-glow"
              >
                <div className="text-center select-none">
                  <div className="font-display text-6xl lg:text-7xl font-extrabold text-brand-lime mb-1 tracking-tight">
                    VEES
                  </div>
                  <div className="text-sm text-gray-300 tracking-wide">
                    60mg Caffeine
                  </div>
                  <div className="text-xl font-bold text-brand-cyan mt-1">
                    ₹10
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
