'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How fast does VEES work?',
    answer: 'Most people feel the energy kick in about 5 minutes. Since VEES dissolves sublingually (under the tongue), the caffeine absorbs directly into your bloodstream — way faster than coffee or energy drinks.',
  },
  {
    question: 'How much caffeine is in one chew?',
    answer: 'Each VEES chew contains 60mg of caffeine — about the same as a strong cup of coffee, but without the liquid volume or stomach bloat.',
  },
  {
    question: 'Is VEES vegetarian/vegan?',
    answer: 'VEES is 100% vegetarian. We use no gelatin or animal-derived ingredients. Our formula is designed to be inclusive for all dietary preferences.',
  },
  {
    question: 'What does VEES taste like?',
    answer: 'VEES comes in three delicious flavors: Bold Cola (fizzy and zingy), Mint Lime (cool and refreshing), and Green Apple (sweet and tangy). Think candy that actually works.',
  },
  {
    question: 'How much does VEES cost?',
    answer: 'Just ₹10 per chew. That\'s one-tenth the price of an energy drink and one-eighth of your daily coffee. We also offer multi-pack options for even better value.',
  },
  {
    question: 'Can I carry VEES in my pocket?',
    answer: 'Absolutely! Each VEES chew comes in a tiny, pocket-sized pouch. No liquid, no cup, no mess. Just pop it in your pocket, bag, or wallet and go.',
  },
  {
    question: 'When will VEES be available?',
    answer: 'We\'re currently in pre-launch. Sign up for early access and be among the first to get your hands on VEES when we launch.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      viewport={{ once: true }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-brand-dark group-hover:text-mint-vibrant transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-brand-muted shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-brand-muted text-sm leading-relaxed pb-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-brand-dark">
            Got Questions? 🙋
          </h2>
          <p className="section-subtitle">
            Everything you need to know about VEES energy chews.
          </p>
        </motion.div>

        <div className="card p-8">
          {faqs.map((faq, idx) => (
            <FAQItem key={faq.question} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
