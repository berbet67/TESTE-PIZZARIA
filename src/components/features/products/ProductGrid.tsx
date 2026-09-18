'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ShoppingCart } from 'lucide-react';
import { PRODUCTS, BRAND_INFO } from '@/constants';
import Image from 'next/image';

export const ProductGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="bg-tech-grid absolute inset-0 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Nossas <span className="text-brand">Especialidades</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ingredientes selecionados e massa de longa fermentação para um sabor inigualável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface border border-border p-4 rounded-2xl hover:border-brand/50 transition-all duration-300"
            >
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="blue">{product.category}</Badge>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-brand transition-colors">
                {product.title}
              </h3>
              <p className="text-muted text-sm mb-6 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-foreground">
                  R$ {product.price.toFixed(2)}
                </span>
                <a href={BRAND_INFO.ctaLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm" className="p-2">
                    <ShoppingCart size={18} />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
