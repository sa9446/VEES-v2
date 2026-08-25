'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Aditya M.',
    role: 'College Student',
    avatar: '🧑‍🎓',
    rating: 5,
    text: 'VEES replaced my 3am coffee during exam prep. Melts in seconds and I actually feel focused without the jittery crash.',
    flavor: 'Mint Lime',
    color: 'border-mint-vibrant/30',
  },
  {
    name: 'Priya K.',
    role: 'Fitness Enthusiast',
    avatar: '💪',
    rating: 5,
    text: 'Pre-workout game changed. Pop a Green Apple 10 mins before the gym and I\'m ready to go. No bloated stomach from chugging energy drinks.',
    flavor: 'Green Apple',
    color: 'border-apple-vibrant/30',
  },
  {
    name: 'Rahul S.',
    role: 'Night Shift Worker',
    avatar: '🌙',
    rating: 5,
    text: 'At ₹10 it\'s a no-brainer. I was spending ₹3,600/month on Red Bull. VEES does the same thing for ₹300. Pocket-sized lifesaver.',
    flavor: 'Bold Cola',
    color: 'border-cola/30',
  },
  {
    name: 'Sneha T.',
    role: 'Freelance Designer',
    avatar: '🎨',
    rating: 5,
    text: 'Love that it\'s vegetarian and doesn\'t have all the sugar. The Cola flavor is genuinely delicious — tastes like a treat that works.',
    flavor: 'Bold Cola',
    color: 'border-cola/30',
  },
  {
    name: 'Vikram P.',
    role: 'MBA Student',
    avatar: '📚',
    rating: 5,
    text: 'Carry it in my pocket to lectures. No need to find a café or carry a heavy bottle. Just pop and go. Total game changer.',
    flavor: 'Mint Lime',
    color: 'border-mint-vibrant/30',
  },
  {
    name: 'Kavya R.',
    role: 'Startup Founder',
    avatar: '🚀',
    rating: 5,
    text: 'We keep a box of VEES at the office. Our team loves it — better than the coffee machine and way cheaper for the company.',
    flavor: 'Green Apple',
    color: 'border-apple-vibrant/30',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
            <span className="font-bold text-brand-dark ml-2">4.9/5</span>
          </div>
          <h2 className="section-title text-brand-dark">
            What Early Chewers Say 🗣️
          </h2>
          <p className="section-subtitle">
            Real people, real energy. Here&apos;s what our community thinks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`card-hover p-6 border-2 ${review.color}`}
            >
              <Quote className="w-8 h-8 text-cream-dark mb-4" />
              <p className="text-brand-text text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{review.avatar}</span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{review.name}</p>
                    <p className="text-xs text-brand-muted">{review.role}</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-cream-dark text-brand-muted">
                  {review.flavor}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
