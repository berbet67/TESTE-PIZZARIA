'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem = ({ question, answer, index }: FaqItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border rounded-2xl overflow-hidden bg-surface"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-border/30 transition-colors"
      >
        <span className="font-bold text-lg tracking-tight">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-muted leading-relaxed border-t border-border/50">
          {answer}
        </div>
      )}
    </motion.div>
  );
};

export const Faq = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Dúvidas <span className="text-brand">Frequentes</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre nossa entrega e pizzas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-4">
          {FAQ.map((item, index) => (
            <FaqItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
