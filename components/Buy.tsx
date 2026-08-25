'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, ShoppingBag, Star } from 'lucide-react';

const FORM_ENDPOINT =
  'https://formsubmit.co/ajax/samanvay.agrawal@yahoo.com';

export default function Buy() {
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
          _subject: 'VEES — New order interest',
          message: `New order interest: ${email}`,
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
    <section id="buy" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-apple/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto max-w-4xl relative">
        <div className="card p-8 lg:p-12 border-2 border-mint/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Value proposition */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="font-bold text-brand-dark text-sm">4.9/5</span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-black text-brand-dark mb-4">
                Ready to Ditch
                <br />
                Your Coffee? ☕→🍬
              </h2>

              <p className="text-brand-muted mb-6 leading-relaxed">
                Sign up for early access and be the first to get VEES.
                We&apos;ll notify you the moment we launch — plus you&apos;ll get
                exclusive early-bird pricing.
              </p>

              <div className="space-y-3">
                {[
                  '✅ Only ₹10 per chew',
                  '✅ 3 delicious flavors',
                  '✅ Free shipping on first order',
                  '✅ 100% vegetarian, zero sugar',
                ].map((item) => (
                  <p key={item} className="text-sm font-medium text-brand-dark">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mint-vibrant pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="w-full pl-12 pr-4 py-4 bg-cream border border-gray-200 rounded-xl focus:outline-none focus:border-mint-vibrant text-brand-dark placeholder-brand-muted transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {loading
                    ? 'Signing up...'
                    : submitted
                      ? '✓ You\'re on the list!'
                      : 'Get Early Access — ₹10'}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-mint-vibrant text-sm"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>
                      Awesome — you&apos;re in! We&apos;ll email you when VEES launches.
                    </span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </form>

              <p className="text-center text-brand-muted text-xs mt-4">
                No spam — just launch updates and exclusive deals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
