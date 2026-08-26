'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useFlavor } from '@/contexts/FlavorContext';

const navLinks = [
  { label: 'Shop Flavors', href: '#flavors' },
  { label: 'Why VEES', href: '#why-vees' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const { colors } = useFlavor();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? `${colors.bg}ee` : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? `0 2px 20px rgba(0,0,0,0.06)` : 'none',
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <span
              className="font-display text-2xl lg:text-3xl font-black transition-colors duration-500"
              style={{ color: colors.accent }}
            >
              VEES
            </span>
            <span className="hidden sm:inline text-xs font-semibold tracking-widest uppercase transition-colors duration-500"
              style={{ color: colors.accentLight }}>
              Energy Chews
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-semibold transition-colors duration-300"
                style={{ color: colors.accentLight }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.accentLight)}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#buy')}
              className="btn-buy flex items-center gap-2 text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition-colors duration-500"
            style={{ color: colors.accent }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-lg pt-24 px-6 md:hidden"
            style={{ backgroundColor: `${colors.bg}f5` }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-bold text-left transition-colors duration-500"
                  style={{ color: colors.accent }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#buy')}
                className="btn-buy flex items-center justify-center gap-2 text-lg mt-4"
              >
                <ShoppingBag className="w-5 h-5" />
                Buy Now — ₹15
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
