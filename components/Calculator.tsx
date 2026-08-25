'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Droplets, Zap } from 'lucide-react';

export default function Calculator() {
  const [weeklyCups, setWeeklyCups] = useState(7);

  const energyDrinkPrice = 120;
  const coffeePrice = 80;
  const veesPrice = 10;
  const avgPrice = (energyDrinkPrice + coffeePrice) / 2;

  const annualSavings = Math.round((avgPrice - veesPrice) * weeklyCups * 52);
  const liquidBloatAvoided = Math.round((250 + 150) / 2 * weeklyCups * 52 / 1000);
  const totalCaffeine = weeklyCups * 7 * 60;

  return (
    <section id="calculator" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Your Savings Calculator</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how much you'll save by switching to VEES for your daily caffeine fix.
          </p>
        </motion.div>

        <div className="glass rounded-2xl p-8 lg:p-12 space-y-8">
          {/* Slider Control */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <label className="text-xl font-bold">Drinks per week:</label>
              <span className="text-3xl font-black text-brand-lime">{weeklyCups}</span>
            </div>
            <input
              type="range"
              min="1"
              max="21"
              value={weeklyCups}
              onChange={(e) => setWeeklyCups(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-lime"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>1 drink/week</span>
              <span>21 drinks/week</span>
            </div>
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {/* Savings Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-hover rounded-xl p-6 border-2 border-transparent hover:border-brand-lime"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-brand-lime" />
                <h3 className="text-sm font-semibold text-gray-300">Annual Savings</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-brand-lime">₹{annualSavings.toLocaleString()}</p>
                <p className="text-sm text-gray-400">
                  vs ₹{Math.round(avgPrice)}/cup average
                </p>
              </div>
            </motion.div>

            {/* Bloat Avoided Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-hover rounded-xl p-6 border-2 border-transparent hover:border-brand-cyan"
            >
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-6 h-6 text-brand-cyan" />
                <h3 className="text-sm font-semibold text-gray-300">Liquid Avoided</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-brand-cyan">{liquidBloatAvoided}L</p>
                <p className="text-sm text-gray-400">
                  liquid saved yearly
                </p>
              </div>
            </motion.div>

            {/* Total Caffeine Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-hover rounded-xl p-6 border-2 border-transparent hover:border-brand-lime"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-brand-lime" />
                <h3 className="text-sm font-semibold text-gray-300">Caffeine/Year</h3>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-brand-lime">{totalCaffeine}mg</p>
                <p className="text-sm text-gray-400">
                  {Math.round(totalCaffeine / 1000)} grams total
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}