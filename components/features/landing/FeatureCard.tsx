'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  illustration: ReactNode;
  className?: string;
}

/**
 * FeatureCard - Glassmorphism card for feature pillars
 * Features hover lift effect with glowing shadow
 */
export function FeatureCard({
  title,
  description,
  illustration,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={`group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] ${className} `}
    >
      {/* Illustration Area */}
      <div className="relative flex min-h-[180px] flex-1 items-center justify-center overflow-hidden p-6">
        {illustration}
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-6 pt-0">
        <h3 className="text-foreground mb-3 text-lg font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="via-foreground/20 absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
