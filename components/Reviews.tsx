'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useFlavor } from '@/contexts/FlavorContext';

const reviews = [
  { name: 'Aditya M.', role: 'College Student', avatar: '🧑‍🎓', text: 'VEES replaced my 3am coffee during exam prep. Melts in seconds and I actually feel focused without the jittery crash.', flavor: 'Mint Lime' },
  { name: 'Priya K.', role: 'Fitness Enthusiast', avatar: '💪', text: 'Pre-workout game changed. Pop a Green Apple 10 mins before the gym and I\'m ready to go. No bloated stomach.', flavor: 'Green Apple' },
  { name: 'Rahul S.', role: 'Night Shift Worker', avatar: '🌙', text: 'At ₹10 it\'s a no-brainer. I was spending ₹3,600/month on Red Bull. VEES does the same for ₹300. Pocket-sized lifesaver.', flavor: 'Bold Cola' },
  { name: 'Sneha T.', role: 'Freelance Designer', avatar: '🎨', text: 'Love that it\'s vegetarian and doesn\'t have all the sugar. The Cola flavor is genuinely delicious — tastes like a treat that works.', flavor: 'Bold Cola' },
  { name: 'Vikram P.', role: 'MBA Student', avatar: '📚', text: 'Carry it in my pocket to lectures. No need to find a café or carry a heavy bottle. Just pop and go. Total game changer.', flavor: 'Mint Lime' },

];

export default function Reviews() {
  const { colors } = useFlavor();

  return (
    <section id="reviews" className="py-24 px-4 transition-colors duration-500"
      style={{ backgroundColor: colors.bg }}>
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
            <span className="font-bold ml-2 transition-colors duration-500"
              style={{ color: colors.text }}>4.9/5</span>
          </div>
          <h2 className="section-title" style={{ color: colors.text }}>
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
              className="card-hover p-6 border-2"
              style={{ borderColor: `${colors.accent}25` }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: `${colors.accent}30` }} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: colors.text }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{review.avatar}</span>
                  <div>
                    <p className="font-bold text-sm" style={{ color: colors.text }}>{review.name}</p>
                    <p className="text-xs" style={{ color: colors.accentLight }}>{review.role}</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${colors.accent}12`, color: colors.accent }}>
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
