'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const benefits = [
  {
    icon: '💸',
    title: 'No ₹120 Price Tag',
    subtitle: 'Only ₹10 per chew',
    description: 'Energy drinks cost ₹120. Coffee costs ₹80. VEES gives you the same kick for one-tenth the price.',
  },
  {
    icon: '🫧',
    title: 'No Sloshy Stomach',
    subtitle: 'Zero liquid needed',
    description: 'Pop a chew, skip the 250ml can or hot cup. Your stomach stays happy while you stay energized.',
  },
  {
    icon: '⚡',
    title: 'Kicks in 5 Minutes',
    subtitle: 'Fastest energy on the go',
    description: 'Coffee takes 20-30 minutes. Energy drinks take 35-45. VEES melts fast and hits your system even faster.',
  },
  {
    icon: '👖',
    title: 'Fits in Your Pocket',
    subtitle: 'No bag, no cup, no mess',
    description: 'A tiny pouch that slides right into your pocket, wallet, or bag. Take energy anywhere without the bulk.',
  },
  {
    icon: '🌱',
    title: '100% Vegetarian',
    subtitle: 'No gelatin, no guilt',
    description: 'Made with plant-based ingredients. No animal products. Perfect for vegetarians and vegans alike.',
  },
  {
    icon: '🍬',
    title: 'Low Sugar, Low Cal',
    subtitle: 'Sweet without the crash',
    description: 'Tastes like candy, works like caffeine. Zero sugar spike, no crash, just clean sustained energy.',
  },
];

export default function Comparison() {
  return (
    <section id="why-vees" className="py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-brand-dark">
            Why Ditch Coffee &amp;
            <br className="hidden sm:block" /> Energy Drinks? 🤔
          </h2>
          <p className="section-subtitle">
            VEES solves every problem with traditional caffeine sources. Here&apos;s why thousands are switching.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="card-hover p-8"
            >
              <span className="text-4xl mb-4 block">{benefit.icon}</span>
              <h3 className="font-display text-xl font-black text-brand-dark mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm font-semibold text-mint-vibrant mb-3">
                {benefit.subtitle}
              </p>
              <p className="text-brand-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick comparison row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 card p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VEES */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint-vibrant text-white font-bold mb-4">
                <Check className="w-4 h-4" /> VEES
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-mint-vibrant" /> ₹10 per dose
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-mint-vibrant" /> 5 min onset
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-mint-vibrant" /> Pocket-sized
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-mint-vibrant" /> Zero bloat
                </li>
              </ul>
            </div>

            {/* Energy Drink */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-brand-muted font-bold mb-4">
                Energy Drink
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> ₹120+ per can
                </li>
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> 35-45 min onset
                </li>
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Heavy 250ml can
                </li>
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Severe bloat
                </li>
              </ul>
            </div>

            {/* Coffee */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-brand-muted font-bold mb-4">
                ☕ Coffee
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> ₹80+ per cup
                </li>
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> 20-30 min onset
                </li>
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Hot cup needed
                </li>
                <li className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Moderate bloat
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
