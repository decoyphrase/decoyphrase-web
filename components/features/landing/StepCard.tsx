'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icons: ReactNode;
  isReversed?: boolean;
  isActive?: boolean;
}

/**
 * StepCard - Individual step in the How It Works flow
 * Supports zig-zag layout with reversible content order
 */
export function StepCard({
  stepNumber,
  title,
  description,
  icons,
  isReversed = false,
  isActive = false,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex flex-col gap-6 py-8 lg:flex-row lg:items-start lg:gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''} `}
    >
      {/* Text Content */}
      <div className={`flex-1 ${isReversed ? 'lg:text-right' : ''}`}>
        <div className="mb-2 flex items-center gap-3">
          <span
            className={`flex h-8 w-8 items-center justify-center text-sm font-bold transition-all duration-300 ${
              isActive ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground'
            } `}
          >
            {stepNumber}
          </span>
          <h3 className="text-foreground text-lg font-bold tracking-tight">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed lg:max-w-md">{description}</p>
      </div>

      {/* Icons/Illustrations */}
      <div
        className={`flex flex-1 items-center gap-4 ${isReversed ? 'lg:justify-start' : 'lg:justify-end'} `}
      >
        <div
          className={`text-muted-foreground flex items-center gap-3 transition-all duration-300 ${isActive ? 'text-foreground' : ''} `}
        >
          {icons}
        </div>
      </div>
    </motion.div>
  );
}
