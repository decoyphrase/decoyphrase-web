/**
 * useReducedMotion Hook
 * Detects user preference for reduced motion (accessibility)
 *
 * @returns true if user prefers reduced motion
 */

'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback: () => void): () => void {
  const mediaQuery = window.matchMedia(QUERY);

  // Modern browsers
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
  }

  // Legacy browsers
  mediaQuery.addListener(callback);
  return () => mediaQuery.removeListener(callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false; // SSR default
}

/**
 * Hook to detect if user has enabled reduced motion preference
 * Uses useSyncExternalStore for proper external state subscription
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
