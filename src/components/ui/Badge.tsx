import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'outline' | 'success';
  className?: string;
}

export const Badge = ({ children, variant = 'blue', className }: BadgeProps) => {
  const variants = {
    blue: 'bg-brand text-white',
    outline: 'bg-transparent text-foreground border border-border',
    success: 'bg-green-600 text-white',
  };

  return (
    <span className={cn(
      'px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
