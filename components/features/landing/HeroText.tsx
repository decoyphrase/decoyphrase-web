'use client';

import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/store/language';

/**
 * HeroText - Main heading and subtitle for the Hero section
 * Uses framer-motion for staggered fade-in-up animations
 */
export function HeroText() {
  const { t } = useLanguageStore();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full max-w-xl self-start text-left lg:max-w-7xl"
    >
      {/* Main Heading */}
      <motion.h2
        variants={item}
        className="text-foreground mb-6 text-3xl leading-tight font-bold tracking-tight md:text-2xl lg:text-3xl"
      >
        {t.hero.titlePart1} <br></br> {t.hero.titlePart2}{' '}
        <span className="text-muted-foreground">{t.hero.titleHighlight}</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={item}
        className="text-muted-foreground/80 max-w-xl text-lg sm:text-xl lg:max-w-7xl"
      >
        {t.hero.subtitle}
      </motion.p>
    </motion.div>
  );
}
