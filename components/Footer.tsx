'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Savings', href: '#calculator' },
  { label: 'Compare', href: '#comparison' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Waitlist', href: '#waitlist' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-brand-lime" />
              <span className="font-display text-2xl font-extrabold text-brand-lime">
                VEES
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Energy, evolved. The ₹10 daily caffeine chew.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand-lime transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4">Founder</h4>
            <p className="text-sm text-gray-300 font-semibold mb-3">
              Samanvay Agrawal
            </p>
            <a
              href="mailto:samanvay.agrawal@yahoo.com"
              className="inline-flex items-center gap-2 text-sm text-brand-lime hover:text-brand-cyan transition-colors"
            >
              <Mail className="w-4 h-4" />
              samanvay.agrawal@yahoo.com
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm text-center md:text-left"
          >
            © {currentYear} VEES. Early-stage startup concept. All rights
            reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
