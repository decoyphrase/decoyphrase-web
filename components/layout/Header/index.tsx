/**
 * Header Component
 * Main navigation header with responsive mobile menu
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { mainNavItems, languages, type LanguageCode } from '@/lib/data/navigation';
import { useLanguageStore } from '@/lib/store/language';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLang, setLanguage, t } = useLanguageStore();

  return (
    <header className="glass sticky top-0 z-30 w-full border-x-0 border-t-0">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo Area (Left) */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Logo className="h-8 w-8" />
          <div className="flex flex-col font-mono leading-none font-bold tracking-tight">
            <span className="text-md">Decoy</span>
            <span className="text-md">Phrase</span>
          </div>
        </Link>

        {/* Desktop Navigation (Center) */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNavItems.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </nav>

        {/* Actions Area (Right) */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="hidden items-center gap-1 text-sm sm:flex">
            <GlobeIcon />
            <select
              value={currentLang}
              onChange={(e) => setLanguage(e.target.value as LanguageCode)}
              className="cursor-pointer border-none bg-transparent text-sm font-medium focus:ring-0 focus:outline-none"
              aria-label={t.header.language}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="bg-background text-foreground">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* Login Button */}
          <a
            href="https://decoyphrasestorage.arweave.net/"
            className="bg-muted hover:bg-foreground hover:text-background hidden items-center justify-center rounded-none px-6 py-2 text-sm font-bold tracking-widest uppercase transition-all sm:inline-flex"
          >
            {t.header.login}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="hover:bg-muted rounded-none p-2 transition-colors lg:hidden"
            aria-label={t.header.menu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mainNavItems}
      />
    </header>
  );
}

/** Globe icon for language selector */
function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

/** Hamburger menu icon */
function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
