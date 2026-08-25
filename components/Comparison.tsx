'use client';

import React from 'react';
import { motion } from 'framer-motion';
const comparisonData = [
  {
    feature: 'Price per dose',
    vees: '₹10',
    energyDrink: '₹120',
    coffee: '₹80',
  },
  {
    feature: 'Onset time',
    vees: '5-10 min',
    energyDrink: '35-45 min',
    coffee: '20-30 min',
  },
  {
    feature: 'Portability',
    vees: '✓ Pocket-sized',
    energyDrink: '✗ Heavy can',
    coffee: '✗ Hot cup',
  },
  {
    feature: 'Liquid volume',
    vees: '0 ml',
    energyDrink: '250 ml',
    coffee: '150 ml',
  },
  {
    feature: 'Stomach bloat',
    vees: '✓ None',
    energyDrink: '✗ Severe',
    coffee: '✗ Moderate',
  },
  {
    feature: 'Caffeine dose',
    vees: '60 mg',
    energyDrink: '80-120 mg',
    coffee: '95 mg',
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">VEES vs The Competition</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See why VEES is the superior choice for on-the-go energy.
          </p>
        </motion.div>

        {/* Desktop Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:block glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left font-bold text-gray-300">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-brand-lime">VEES</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-400">Energy Drink</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-400">Coffee</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300 font-semibold">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-brand-lime font-bold">{row.vees}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{row.energyDrink}</td>
                    <td className="px-6 py-4 text-center text-gray-400">{row.coffee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-4"
            >
              <h3 className="font-bold text-gray-300 mb-3">{row.feature}</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">VEES:</span>
                  <span className="text-brand-lime font-bold">{row.vees}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Energy Drink:</span>
                  <span className="text-gray-300">{row.energyDrink}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Coffee:</span>
                  <span className="text-gray-300">{row.coffee}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="inline-block glass rounded-full px-6 py-3 border-2 border-brand-lime">
            <span className="text-brand-lime font-bold">✓ BEST VALUE PROPOSITION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}