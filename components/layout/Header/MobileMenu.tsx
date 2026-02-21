/**
 * MobileMenu Component
 * Accessible mobile navigation drawer
 */

'use client';

import { useEffect } from 'react';
import { NavLink } from './NavLink';
import type { NavItem } from '@/lib/data/navigation';
import { useLanguageStore } from '@/lib/store/language';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: ReadonlyArray<NavItem>;
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const { t } = useLanguageStore();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
    return undefined;
  }, [isOpen, onClose]);

  // Focus trap - focus first focusable element when menu opens
  useEffect(() => {
    if (isOpen) {
      const closeButton = document.getElementById('mobile-menu-close');
      closeButton?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="bg-background/80 fixed inset-0 z-40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="bg-background border-border fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={t.header.menu}
      >
        {/* Header */}
        <div className="border-border flex items-center justify-between border-b p-4">
          <span className="font-mono font-bold">{t.header.menu}</span>
          <button
            id="mobile-menu-close"
            type="button"
            onClick={onClose}
            className="hover:bg-muted rounded-none p-2 transition-colors"
            aria-label="Close menu"
          >
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="max-h-[calc(100vh-140px)] overflow-y-auto p-4">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink item={item} mobile />
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Actions */}
        <div className="border-border bg-background absolute right-0 bottom-0 left-0 border-t p-4">
          <a
            href="https://decoyphrase.vercel.app/"
            className="bg-foreground text-background hover:bg-foreground/80 block w-full rounded-none py-3 text-center font-bold tracking-widest uppercase transition-all"
          >
            {t.header.login}
          </a>
        </div>
      </div>
    </>
  );
}
