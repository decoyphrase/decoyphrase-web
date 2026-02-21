/**
 * useCounterAnimation Hook
 *
 * High-performance counter animation using requestAnimationFrame.
 * Provides smooth 60 FPS "odometer" effect for live metrics.
 *
 * Features:
 * - requestAnimationFrame-based (not CSS transitions)
 * - Configurable easing function
 * - Handles rapid value changes gracefully
 * - No external dependencies
 */

import { useState, useEffect, useRef, useCallback } from 'react';

// =============================================================================
// Types
// =============================================================================

interface UseCounterAnimationOptions {
  /** Animation duration in ms (default: 1000) */
  duration?: number;
  /** Number of decimal places (default: 0) */
  decimals?: number;
  /** Easing function (default: easeOutQuart) */
  easing?: (t: number) => number;
  /** Start animation from this value instead of 0 (default: 0) */
  startFrom?: number;
}

interface UseCounterAnimationReturn {
  /** Current animated value */
  displayValue: number;
  /** Formatted display string */
  formattedValue: string;
  /** Whether animation is currently running */
  isAnimating: boolean;
}

// =============================================================================
// Easing Functions
// =============================================================================

/** Ease-out quart: decelerates smoothly */
export function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

/** Ease-out expo: fast start, slow end */
export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/** Linear: constant speed */
export function linear(t: number): number {
  return t;
}

// =============================================================================
// Number Formatting Utilities
// =============================================================================

/**
 * Format number with commas and optional decimals
 */
export function formatNumber(value: number, decimals: number = 0): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Format number to compact form (K, M, B)
 */
export function formatCompact(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)}K`;
  }
  return value.toString();
}

/**
 * Format as currency
 */
export function formatCurrency(value: number, decimals: number = 2): string {
  return `$${formatNumber(value, decimals)}`;
}

// =============================================================================
// Hook Implementation
// =============================================================================

export function useCounterAnimation(
  targetValue: number,
  options: UseCounterAnimationOptions = {}
): UseCounterAnimationReturn {
  const { duration = 1000, decimals = 0, easing = easeOutQuart, startFrom = 0 } = options;

  const [displayValue, setDisplayValue] = useState(startFrom);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for animation state (avoids re-renders during animation)
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startValueRef = useRef<number>(startFrom);
  const currentTargetRef = useRef<number>(startFrom);

  // Store latest duration and easing in refs
  const durationRef = useRef(duration);
  const easingRef = useRef(easing);

  // Update refs when options change
  useEffect(() => {
    durationRef.current = duration;
    easingRef.current = easing;
  }, [duration, easing]);

  // Cancel any running animation
  const cancelAnimation = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  // Start animation when target changes
  useEffect(() => {
    // If we are already at the target, do nothing
    // We use a small epsilon for float comparison if needed, but strict equality is fine for now
    if (targetValue === displayValue && !isAnimating) return;

    // Capture start value
    startValueRef.current = displayValue;
    currentTargetRef.current = targetValue;
    startTimeRef.current = 0;
    setIsAnimating(true);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      // Ensure specific duration is used, fallback to 1000 if 0/undefined
      const safeDuration = durationRef.current || 1000;
      const progress = Math.min(elapsed / safeDuration, 1);
      const easedProgress = easingRef.current(progress);

      const nextValue =
        startValueRef.current + (currentTargetRef.current - startValueRef.current) * easedProgress;

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(currentTargetRef.current);
        setIsAnimating(false);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return cancelAnimation;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValue, cancelAnimation]); // Removed displayValue from deps to avoid loop. Rely on startValueRef.

  // Cleanup on unmount
  useEffect(() => {
    return cancelAnimation;
  }, [cancelAnimation]);

  // Format the display value
  const formattedValue = formatNumber(displayValue, decimals);

  return {
    displayValue,
    formattedValue,
    isAnimating,
  };
}

export default useCounterAnimation;
