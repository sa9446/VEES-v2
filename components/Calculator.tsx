'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Coffee, Zap } from 'lucide-react';

export default function Calculator() {
  const [weeklyCups, setWeeklyCups] = useState(7);

  const energyDrinkPrice = 120;
  const coffeePrice = 80;
  const veesPrice = 10;
  const avgPrice = (energyDrinkPrice + coffeePrice) / 2;

  const monthlySavings = Math.round((avgPrice - veesPrice) * weeklyCups * 4.33);
  const yearlySavings = Math.round((avgPrice - veesPrice) * weeklyCups * 52);
  const yearlyCoffees = weeklyCups * 52;

  return (
    <section id="calculator" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-brand-dark">
            Calculate Your Coffee Savings ☕→🍬
          </h2>
          <p className="section-subtitle">
            See how much you&apos;ll save by swapping your daily coffee for VEES. (Spoiler: a lot.)
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
              <label className="text-xl font-bold text-brand-dark flex items-center gap-2">
                <Coffee className="w-6 h-6 text-cola-brown" />
                How many energy drinks or coffees per week?
              </label>
              <span className="text-3xl font-black text-mint-vibrant">{weeklyCups}</span>
            </div>
            <input
              type="range"
              min="1"
              max="21"
              value={weeklyCups}
              onChange={(e) => setWeeklyCups(parseInt(e.target.value))}
              className="w-full h-3 bg-cream-dark rounded-lg appearance-none cursor-pointer accent-mint-vibrant"
            />
            <div className="flex justify-between text-sm text-brand-muted">
              <span>1 drink/week</span>
              <span>21 drinks/week (3/day)</span>
            </div>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {/* Monthly Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 bg-mint/10 border-2 border-mint/30 hover:border-mint-vibrant transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-mint-vibrant" />
                <h3 className="text-sm font-semibold text-brand-muted">Monthly Savings</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-mint-vibrant">₹{monthlySavings.toLocaleString()}</p>
                <p className="text-sm text-brand-muted">
                  saved every month 🎉
                </p>
              </div>
            </motion.div>

            {/* Yearly Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 bg-apple/10 border-2 border-apple/30 hover:border-apple-vibrant transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-apple-vibrant" />
                <h3 className="text-sm font-semibold text-brand-muted">Yearly Savings</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-apple-vibrant">₹{yearlySavings.toLocaleString()}</p>
                <p className="text-sm text-brand-muted">
                  that&apos;s a vacation fund 💰
                </p>
              </div>
            </motion.div>

            {/* Coffees Replaced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 bg-cola/5 border-2 border-cola/20 hover:border-cola-brown transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-cola-brown" />
                <h3 className="text-sm font-semibold text-brand-muted">Coffees Replaced</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-cola-brown">{yearlyCoffees}</p>
                <p className="text-sm text-brand-muted">
                  cups of coffee per year
                </p>
              </div>
            </motion.div>
          </div>

          {/* Friendly micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-brand-muted text-sm pt-4"
          >
            💡 That&apos;s based on average coffee (₹80) and energy drink (₹120) prices vs VEES (₹10).
          </motion.p>
        </div>
      </div>
    </section>
  );
}
