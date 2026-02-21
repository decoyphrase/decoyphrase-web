/**
 * NavLink Component
 * Navigation link with optional dropdown indicator
 */

'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import type { NavItem } from '@/lib/data/navigation';
import { useLanguageStore } from '@/lib/store/language';

interface NavLinkProps {
  item: NavItem;
  /** Mobile mode - renders differently */
  mobile?: boolean;
}

export function NavLink({ item, mobile = false }: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasChildren = item.children && item.children.length > 0;
  const { t } = useLanguageStore();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
    return undefined;
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
    return undefined;
  }, [isOpen]);

  // Simple link (no children)
  if (!hasChildren && item.href) {
    return (
      <Link
        href={item.href}
        className={`hover:text-muted-foreground font-medium transition-colors ${mobile ? 'block py-3 text-lg' : 'px-3 py-2 text-sm'} `}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
      >
        {t.nav[item.label]}
        {item.external && <span className="sr-only"> (opens in new tab)</span>}
      </Link>
    );
  }

  // Dropdown trigger
  return (
    <div ref={dropdownRef} className={`relative ${mobile ? 'w-full' : ''}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={`hover:text-muted-foreground flex items-center gap-1 font-medium transition-colors ${mobile ? 'w-full justify-between py-3 text-lg' : 'px-3 py-2 text-sm'} `}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {t.nav[item.label]}
        <ChevronIcon isOpen={isOpen} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={` ${
            mobile
              ? 'border-border ml-2 border-l pl-4'
              : 'border-border bg-card absolute top-full left-0 z-50 mt-1 min-w-[180px] rounded-none border shadow-lg'
          } `}
          role="menu"
        >
          {item.children?.map((child, index) => (
            <Link
              key={index}
              href={child.href ?? '#'}
              className={`hover:text-primary block transition-colors ${
                mobile
                  ? 'text-muted-foreground py-2'
                  : 'hover:bg-muted px-4 py-2.5 text-sm first:rounded-none last:rounded-none'
              } `}
              role="menuitem"
              target={child.external ? '_blank' : undefined}
              rel={child.external ? 'noopener noreferrer' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {t.nav[child.label]}
              {child.external && <span className="sr-only"> (opens in new tab)</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/** Chevron icon for dropdown indicator */
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
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
      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
