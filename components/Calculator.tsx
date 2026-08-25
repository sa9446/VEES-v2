'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Coffee, Zap } from 'lucide-react';
import { useFlavor } from '@/contexts/FlavorContext';

export default function Calculator() {
  const [weeklyCups, setWeeklyCups] = useState(7);
  const { colors } = useFlavor();

  const energyDrinkPrice = 120;
  const coffeePrice = 80;
  const veesPrice = 10;
  const avgPrice = (energyDrinkPrice + coffeePrice) / 2;

  const monthlySavings = Math.round((avgPrice - veesPrice) * weeklyCups * 4.33);
  const yearlySavings = Math.round((avgPrice - veesPrice) * weeklyCups * 52);
  const yearlyCoffees = weeklyCups * 52;

  return (
    <section id="calculator" className="py-24 px-4 transition-colors duration-500"
      style={{ backgroundColor: colors.bgLight }}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title" style={{ color: colors.text }}>
            Calculate Your Coffee Savings ☕→🍬
          </h2>
          <p className="section-subtitle">
            See how much you&apos;ll save by swapping your daily coffee for VEES.
          </p>
        </motion.div>

        <div className="card p-8 lg:p-12 space-y-8">
          {/* Slider Control */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <label className="text-xl font-bold flex items-center gap-2" style={{ color: colors.text }}>
                <Coffee className="w-6 h-6" style={{ color: colors.accentLight }} />
                How many energy drinks or coffees per week?
              </label>
              <span className="text-3xl font-black transition-colors duration-500"
                style={{ color: colors.accent }}>{weeklyCups}</span>
            </div>
            <input
              type="range"
              min="1"
              max="21"
              value={weeklyCups}
              onChange={(e) => setWeeklyCups(parseInt(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{ accentColor: colors.accent, backgroundColor: `${colors.accent}20` }}
            />
            <div className="flex justify-between text-sm" style={{ color: colors.accentLight }}>
              <span>1 drink/week</span>
              <span>21 drinks/week (3/day)</span>
            </div>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border-2 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: `${colors.accent}10`, borderColor: `${colors.accent}30` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6" style={{ color: colors.accent }} />
                <h3 className="text-sm font-semibold" style={{ color: colors.accentLight }}>Monthly Savings</h3>
              </div>
              <p className="text-4xl font-black transition-colors duration-500"
                style={{ color: colors.accent }}>₹{monthlySavings.toLocaleString()}</p>
              <p className="text-sm mt-1" style={{ color: colors.accentLight }}>saved every month 🎉</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border-2 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: `${colors.accent}08`, borderColor: `${colors.accent}20` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6" style={{ color: colors.accent }} />
                <h3 className="text-sm font-semibold" style={{ color: colors.accentLight }}>Yearly Savings</h3>
              </div>
              <p className="text-4xl font-black transition-colors duration-500"
                style={{ color: colors.accent }}>₹{yearlySavings.toLocaleString()}</p>
              <p className="text-sm mt-1" style={{ color: colors.accentLight }}>that&apos;s a vacation fund 💰</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 border-2 transition-all duration-500 hover:scale-[1.02]"
              style={{ backgroundColor: `${colors.accent}06`, borderColor: `${colors.accent}15` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6" style={{ color: colors.accent }} />
                <h3 className="text-sm font-semibold" style={{ color: colors.accentLight }}>Coffees Replaced</h3>
              </div>
              <p className="text-4xl font-black transition-colors duration-500"
                style={{ color: colors.accent }}>{yearlyCoffees}</p>
              <p className="text-sm mt-1" style={{ color: colors.accentLight }}>cups of coffee per year</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-sm pt-4"
            style={{ color: colors.accentLight }}
          >
            💡 Based on average coffee (₹80) and energy drink (₹120) prices vs VEES (₹10).
          </motion.p>
        </div>
      </div>
    </section>
  );
}
