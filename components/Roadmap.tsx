'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap } from 'lucide-react';

const roadmapItems = [
  {
    phase: 'Current',
    title: 'Product Development',
    description: 'Perfecting the VEES formula and packaging design',
    status: 'in-progress',
    icon: Zap,
  },
  {
    phase: 'H2 2026',
    title: 'Company Registration',
    description: 'Official business registration & regulatory compliance',
    status: 'upcoming',
    icon: Clock,
  },
  {
    phase: 'H2 2026',
    title: 'Manufacturing Setup',
    description: 'Partner with food production facilities & FSSAI certification',
    status: 'upcoming',
    icon: Clock,
  },
  {
    phase: 'Early 2027',
    title: 'Soft Launch',
    description: 'Beta release to early access community & select markets',
    status: 'upcoming',
    icon: Clock,
  },
  {
    phase: 'Mid 2027',
    title: 'Official Launch',
    description: 'Full public release and retail partnerships across India',
    status: 'upcoming',
    icon: Clock,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Our Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to market. Here's our roadmap to bringing VEES to every pocket in India.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-lime via-brand-cyan to-brand-lime" />

          <div className="space-y-12">
            {roadmapItems.map((item, idx) => {
              const Icon = item.icon;
              const isInProgress = item.status === 'in-progress';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`md:flex gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Left/Right Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ translateY: -5 }}
                      className="glass rounded-2xl p-8 border-2 border-transparent hover:border-brand-lime transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${isInProgress ? 'bg-brand-lime/20 text-brand-lime' : 'bg-brand-cyan/20 text-brand-cyan'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-bold px-3 py-1 rounded-full ${isInProgress ? 'bg-brand-lime/20 text-brand-lime' : 'bg-brand-cyan/20 text-brand-cyan'}`}>
                              {item.phase}
                            </span>
                            {isInProgress && (
                              <span className="text-xs text-brand-lime font-semibold animate-pulse">● In Progress</span>
                            )}
                          </div>
                          <h3 className="text-2xl font-black text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex justify-center my-8 md:my-0">
                    <motion.div
                      animate={{
                        scale: isInProgress ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isInProgress ? Infinity : 0,
                      }}
                      className={`w-6 h-6 rounded-full border-4 ${isInProgress ? 'border-brand-lime bg-brand-dark' : 'border-brand-cyan bg-brand-dark'} relative z-10`}
                    />
                  </div>

                  {/* Placeholder for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Status Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 border-l-4 border-brand-lime"
        >
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-brand-lime flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Current Status</h4>
              <p className="text-gray-300">
                VEES is currently in the pre-launch phase as a startup concept. We're actively developing the product formula and securing early adopters through this waitlist. Timeline depends on development progress, but we're targeting launch in 2026-2027. Upon company registration, all early access members will receive exclusive benefits and priority access to the first batch. <strong className="text-brand-lime">Your support today helps us build the future of caffeine.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
