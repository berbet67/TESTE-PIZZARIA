import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BRAND_INFO } from '@/constants';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
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
            <p className="text-muted max-w-sm mb-6 leading-relaxed">
              {BRAND_INFO.location}. <br />
              A melhor experiência em pizza artesanal da região, com ingredientes selecionados e massa de longa fermentação.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-muted hover:text-brand transition-colors text-sm">Início</Link></li>
                <li><Link href="/cardapio" className="text-muted hover:text-brand transition-colors text-sm">Cardápio</Link></li>
                <li><Link href="/sobre" className="text-muted hover:text-brand transition-colors text-sm">Sobre Nós</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-4">
                <li className="text-muted text-sm">Campo Mourão - PR</li>
                <li className="text-muted text-sm">(44) 3810-9000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} {BRAND_INFO.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted hover:text-foreground text-xs transition-colors">Privacidade</Link>
            <Link href="#" className="text-muted hover:text-foreground text-xs transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
