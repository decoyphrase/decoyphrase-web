/**
 * useScrollReveal Hook
 * GPU-accelerated scroll reveal animations using Intersection Observer
 *
 * Features:
 * - Native Intersection Observer (no external libraries)
 * - will-change: transform for GPU acceleration
 * - Respects prefers-reduced-motion
 * - Configurable threshold and animation styles
 */

'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';
import { useReducedMotion } from './useReducedMotion';

// =============================================================================
// Types
// =============================================================================

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

export interface UseScrollRevealOptions {
  /** Threshold for triggering animation (0-1) */
  threshold?: number;
  /** Direction of reveal animation */
  direction?: RevealDirection;
  /** Animation duration in ms */
  duration?: number;
  /** Delay before animation starts in ms */
  delay?: number;
  /** Distance to travel in pixels */
  distance?: number;
  /** Only animate once (default: true) */
  once?: boolean;
  /** Root margin for Intersection Observer */
  rootMargin?: string;
}

export interface UseScrollRevealReturn {
  /** Ref to attach to the element */
  ref: React.RefObject<HTMLElement | null>;
  /** Whether element is visible */
  isVisible: boolean;
  /** Styles to apply to the element */
  style: CSSProperties;
}

// =============================================================================
// Hook
// =============================================================================

const DEFAULT_OPTIONS: Required<UseScrollRevealOptions> = {
  threshold: 0.1,
  direction: 'up',
  duration: 600,
  delay: 0,
  distance: 30,
  once: true,
  rootMargin: '0px',
};

/**
 * Hook for scroll-triggered reveal animations
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}): UseScrollRevealReturn {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  // Initialize as visible if reduced motion is preferred
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  const { threshold, direction, duration, delay, distance, once, rootMargin } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  useEffect(() => {
    // If reduced motion, element is already visible (via initial state)
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion, threshold, rootMargin, once]);

  // Calculate initial transform based on direction
  const getInitialTransform = (): string => {
    if (prefersReducedMotion) return 'none';

    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      case 'fade':
      default:
        return 'none';
    }
  };

  const style: CSSProperties = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      };

  return { ref, isVisible, style };
}
