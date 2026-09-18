'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Pizza } from 'lucide-react';
import { BRAND_INFO } from '@/constants';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/10 text-brand text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            SABOR ARTESANAL EM CAMPO MOURÃO
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            A verdadeira pizza <br />
            <span className="text-brand">italiana no seu lar.</span>
          </h1>

          <p className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            No {BRAND_INFO.name}, combinamos tradição, ingredientes de primeira
            e massa de longa fermentação para criar a experiência perfeita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={BRAND_INFO.ctaLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group">
                Peça Agora
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button variant="secondary" size="lg">
              Ver Cardápio
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-30 pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden border border-border group">
            <Image
              src="/images.jpg"
              alt="Pizza Maday"
              width={600}
              height={600}
              priority
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
