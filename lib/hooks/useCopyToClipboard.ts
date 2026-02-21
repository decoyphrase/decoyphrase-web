/**
 * useCopyToClipboard Hook
 * Copy text to clipboard with feedback state
 */

'use client';

import { useState, useCallback } from 'react';

interface UseCopyToClipboardReturn {
  /** Whether the copy was successful (resets after timeout) */
  copied: boolean;
  /** Copy text to clipboard */
  copy: (text: string) => Promise<boolean>;
  /** Reset copied state */
  reset: () => void;
}

/**
 * Fallback copy method using document.execCommand for older browsers
 */
function fallbackCopyToClipboard(text: string): boolean {
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.error('Fallback: Could not copy text', err);
  }

  document.body.removeChild(textArea);
  return success;
}

/**
 * Hook for copying text to clipboard with visual feedback
 *
 * @param resetDelay - Time in ms before copied state resets (default: 2000)
 */
export function useCopyToClipboard(resetDelay = 2000): UseCopyToClipboardReturn {
  const [copied, setCopied] = useState(false);

  const reset = useCallback(() => {
    setCopied(false);
  }, []);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      let success = false;

      // Try modern Clipboard API first
      if (navigator?.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          success = true;
        } catch (error) {
          console.warn('Clipboard API failed, trying fallback:', error);
          success = fallbackCopyToClipboard(text);
        }
      } else {
        // Use fallback for older browsers
        success = fallbackCopyToClipboard(text);
      }

      if (success) {
        setCopied(true);
        // Auto-reset after delay
        setTimeout(reset, resetDelay);
      } else {
        setCopied(false);
      }

      return success;
    },
    [resetDelay, reset]
  );

  return { copied, copy, reset };
}
