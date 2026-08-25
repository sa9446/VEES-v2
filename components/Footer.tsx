'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Shop Flavors', href: '#flavors' },
  { label: 'Why VEES', href: '#why-vees' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-black text-white">
                VEES
              </span>
              <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
                Energy Chews
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The Gods On This. The ₹10 chew that&apos;s replacing
              coffee for thousands of Indians.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-mint-vibrant transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-bold mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-300 font-semibold mb-3">
              Samanvay Agrawal — Founder
            </p>
            <a
              href="mailto:samanvay.agrawal@yahoo.com"
              className="inline-flex items-center gap-2 text-sm text-mint-vibrant hover:text-mint transition-colors"
            >
              <Mail className="w-4 h-4" />
              samanvay.agrawal@yahoo.com
            </a>
            <div className="flex gap-3 mt-6">
              {['100% Veg', 'Zero Sugar', '₹10'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm text-center flex items-center justify-center gap-1"
          >
            © {currentYear} VEES Energy Chews. Made with{' '}
            <Heart className="w-3 h-3 text-red-400 fill-red-400 inline" /> in India.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
