import React from 'react';
import { Hero } from '@/components/features/hero/Hero';
import { ProductGrid } from '@/components/features/products/ProductGrid';
import { Faq } from '@/components/features/faq/Faq';
import { SectionHeader } from '@/components/shared/SectionHeader';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            number="01"
            title="Nosso Cardápio"
            subtitle="Descubra os sabores que tornam a Maday Pizza Bar única. Pizzas artesanais com ingredientes de alta qualidade."
            center
          />
          <ProductGrid />
        </div>
      </section>

      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <Faq />
        </div>
      </section>
    </div>
  );
}
