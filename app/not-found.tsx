'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// =============================================================================
// Not Found Page (404)
// =============================================================================

export default function NotFound() {
  const [glitchText, setGlitchText] = useState('404');

  // Subtle text glitch effect for the "404"
  useEffect(() => {
    const chars = '014X-/_';
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchText((prev) =>
          prev
            .split('')
            .map((_, i) =>
              Math.random() > 0.8 ? chars[Math.floor(Math.random() * chars.length)] : '404'[i]
            )
            .join('')
        );
        setTimeout(() => setGlitchText('404'), 100);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      {/* Decorative Grid Background (Subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Large Glitched 404 */}
        <h1
          className="relative text-8xl font-black tracking-tighter sm:text-9xl"
          aria-label="404 Error: Not Found"
        >
          <span className="text-foreground relative z-10">{glitchText}</span>
          {/* Glitch offsets */}
          <span className="absolute top-0 left-0 -z-10 translate-x-1 translate-y-1 text-red-500/30 opacity-70 blur-sm">
            404
          </span>
          <span className="absolute top-0 left-0 -z-20 -translate-x-1 -translate-y-1 text-blue-500/30 opacity-70 blur-sm">
            404
          </span>
        </h1>

        {/* Status Badge */}
        <div className="border-border bg-muted/50 mx-auto mt-4 mb-8 inline-flex items-center gap-2 border px-3 py-1 text-xs font-bold tracking-widest uppercase">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Status: Mapping Error 0x404
        </div>
      </div>

      {/* Error Message */}
      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-bold tracking-tight uppercase">Data Fragment Missing</h2>
        <p className="text-muted-foreground leading-relaxed">
          The resource you are looking for has been purged or moved. The mapping file for this path
          is corrupted or does not exist in our index.
        </p>
      </div>

      {/* Action Links */}
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="bg-foreground text-background hover:bg-foreground/90 w-full rounded-none px-8 py-3 text-sm font-bold tracking-widest uppercase transition-colors sm:w-auto"
        >
          Return to Decoy Phrase
        </Link>
        <Link
          href="/download"
          className="border-border hover:bg-muted w-full rounded-none border px-8 py-3 text-sm font-bold tracking-widest uppercase transition-colors sm:w-auto"
        >
          Download Generator
        </Link>
      </div>

      {/* Thematic Footer Info */}
      <div className="text-muted-foreground/30 mt-20 font-mono text-[10px] tracking-[0.2em] uppercase">
        System Index: Arweave-Permaweb-Mirror // Recovery-Mode: Enabled
      </div>
    </div>
  );
}
