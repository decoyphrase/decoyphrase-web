'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/store/language';

/**
 * HeroActions - CTA buttons for the Hero section
 * Primary: "Get Started Now" with dropdown for Decoy Generator & Permanent Storage
 * Secondary: "Watch Tutorials" linking to YouTube
 */
export function HeroActions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useLanguageStore();

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col items-start gap-4 self-start sm:flex-row"
    >
      {/* Primary CTA - Get Started Now with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
          className="group bg-foreground text-background focus:ring-foreground focus:ring-offset-background flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          {t.heroActions.getStarted}
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="border-border bg-card absolute top-full left-0 z-10 mt-2 w-56 border shadow-lg">
            <Link
              href="/download"
              className="text-card-foreground hover:bg-muted flex items-center gap-3 px-4 py-3 text-sm transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {t.heroActions.generator}
            </Link>
            <Link
              href="https://decoyphrasestorage.arweave.net/"
              className="text-card-foreground hover:bg-muted flex items-center gap-3 px-4 py-3 text-sm transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              {t.heroActions.storage}
            </Link>
          </div>
        )}
      </div>

      {/* Secondary CTA - Watch Tutorials */}
      <a
        href="http://www.youtube.com/@DecoyPhrase"
        target="_blank"
        rel="noopener noreferrer"
        className="group border-foreground text-foreground hover:bg-foreground hover:text-background focus:ring-foreground focus:ring-offset-background flex items-center gap-2 border bg-transparent px-6 py-3 text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {t.heroActions.watchTutorials}
      </a>
    </motion.div>
  );
}
