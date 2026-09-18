'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND_INFO } from '@/constants';

const NAV_LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Cardápio', href: '/produtos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '#' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-background/80 backdrop-blur-md border-border py-3' : 'bg-transparent border-transparent py-5'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={BRAND_INFO.logo}
            alt={BRAND_INFO.name}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tighter text-foreground uppercase">
            {BRAND_INFO.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-brand transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href={BRAND_INFO.ctaLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">Pedir Agora</Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted hover:text-brand p-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href={BRAND_INFO.ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="primary" className="w-full py-4">Pedir Agora</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
