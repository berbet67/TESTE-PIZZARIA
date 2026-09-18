import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

export const SectionHeader = ({ number, title, subtitle, center = false }: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12",
      center ? "text-center" : "text-left"
    )}>
      <span className="text-brand font-mono text-sm font-bold uppercase tracking-widest">
        {number}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-2 mb-4">
        {title}
      </h2>
      <p className={cn(
        "text-muted max-w-2xl",
        center ? "mx-auto" : "text-left"
      )}>
        {subtitle}
      </p>
    </div>
  );
};
