'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const FORM_ENDPOINT =
  'https://formsubmit.co/ajax/samanvay.agrawal@yahoo.com';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'VEES — New early access signup',
          message: `New early access signup: ${email}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(
          data?.message || 'Failed to submit. Please try again.'
        );
      }
    } catch {
      setError('Error submitting form. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section id="waitlist" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="container mx-auto max-w-2xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="gradient-text">Be the First</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Join the early access waitlist — we&apos;ll email you when VEES
            launches.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 space-y-4"
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cyan pointer-events-none" />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-lime text-white placeholder-gray-500 transition-colors"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading || submitted}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading
              ? 'Joining...'
              : submitted
                ? '✓ You\'re on the list!'
                : 'Join Early Access'}
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-brand-lime text-sm"
            >
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>
                Thanks — you&apos;re on the list. We&apos;ll be in touch.
              </span>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          No spam — launch updates only.
        </motion.p>
      </div>
    </section>
  );
}
