'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Code2, Route } from 'lucide-react';

const useCases = [
  {
    icon: Dumbbell,
    title: 'Pre-Workout Fuel',
    description: 'Quick 60mg kick 10 minutes before hitting the gym floor. No bloat, pure performance.',
    color: 'brand-lime',
  },
  {
    icon: Code2,
    title: 'All-Nighter Focus',
    description: 'Zero-fuss caffeine for late-night coding sessions and exam cramming marathons.',
    color: 'brand-cyan',
  },
  {
    icon: Route,
    title: 'Daily Commute',
    description: 'Pocket-friendly alertness without hunting for a coffee shop during your morning rush.',
    color: 'brand-lime',
  },
];

export default function UseCases() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="use-cases" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Built for Your Lifestyle</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you&apos;re grinding at the gym, pulling an all-nighter, or just need a quick pick-me-up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            const isLime = useCase.color === 'brand-lime';

            return (
              <motion.button
                key={idx}
                type="button"
                onClick={scrollToWaitlist}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="text-left glass-hover rounded-2xl p-8 space-y-4 group border-2 border-transparent hover:border-brand-lime/60 transition-all"
              >
                <div
                  className={`w-16 h-16 glass rounded-xl flex items-center justify-center ${isLime ? 'text-brand-lime' : 'text-brand-cyan'} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white">
                  {useCase.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-semibold">
                  <span className={isLime ? 'text-brand-lime' : 'text-brand-cyan'}>
                    Join waitlist
                  </span>
                  <span className="text-xl" aria-hidden>
                    →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}