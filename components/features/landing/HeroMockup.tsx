'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeroMockup - App preview image for the Hero section
 * Uses Next.js Image with priority for FCP optimization
 * Has gradient fade at bottom and responsive sizing
 */
export function HeroMockup() {
  const [activeTab, setActiveTab] = useState<'app' | 'web'>('app');

  const mockupAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={mockupAnimation}
      initial="hidden"
      animate="visible"
      className="relative mt-12 w-full max-w-7xl lg:mt-0 lg:max-w-xl xl:max-w-7xl"
    >
      {/* Product Tabs */}
      <div className="mb-4 flex justify-end gap-4 text-sm">
        <button
          onClick={() => setActiveTab('app')}
          className={`pb-1 transition-colors ${
            activeTab === 'app'
              ? 'border-foreground text-foreground border-b-2'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Decoy Phrase Generator
        </button>
        <button
          onClick={() => setActiveTab('web')}
          className={`pb-1 transition-colors ${
            activeTab === 'web'
              ? 'border-foreground text-foreground border-b-2'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Permanent Storage
        </button>
      </div>

      {/* App Mockup Container */}
      <div className="relative max-h-[70vh] overflow-hidden lg:max-h-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Image
              src={
                activeTab === 'app'
                  ? '/preview-decoyphrase-app.webp'
                  : '/preview-decoyphrase-web.webp'
              }
              alt={
                activeTab === 'app'
                  ? 'Decoy Phrase Generator Application Preview'
                  : 'Permanent Storage Web Preview'
              }
              width={1920}
              height={1080}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Fade at Bottom */}
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent" />
      </div>
    </motion.div>
  );
}
