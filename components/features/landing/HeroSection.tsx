'use client';

import Image from 'next/image';
import { HeroText } from './HeroText';
import { HeroActions } from './HeroActions';
import { HeroMockup } from './HeroMockup';
import { PageGradient } from '@/components/ui';

/**
 * HeroSection - Main hero section for the landing page
 * Combines HeroText, HeroActions, and HeroMockup components
 * Features radial gradient background and "Powered by" badges
 */
export function HeroSection() {
  return (
    <section className="bg-background relative min-h-[90vh] overflow-hidden">
      {/* Subtle Radial Gradient Background */}
      <PageGradient />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 lg:px-8">
        {/* Text & CTA */}
        <HeroText />
        <HeroActions />

        {/* App Mockup */}
        <HeroMockup />

        {/* Powered By Badges */}
        <div className="mt-12 items-center justify-center gap-6">
          <div className="mb-4 flex justify-center">
            <span className="text-lg font-bold">Powered by</span>
          </div>
          <div className="flex items-center gap-6">
            {/* Arweave Logo */}
            <Image
              src="/arweave-logo.svg"
              alt="Arweave"
              width={64 * 3}
              height={64}
              className="opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            {/* AO Logo */}
            <Image
              src="/ao-logo.svg"
              alt="AO"
              width={(64 * 3) / 2}
              height={64}
              className="opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

            {/* ar.io Logo */}
            <Image
              src="/ario-logo.svg"
              alt="ar.io"
              width={64 * 2}
              height={64}
              className="opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
