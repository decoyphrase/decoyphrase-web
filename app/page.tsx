/**
 * Landing Page - Decoy Phrase
 * Main entry point for the platform
 */

import dynamic from 'next/dynamic';
import {
  HeroSection,
  ProsConsGrid,
  FeaturesSection,
  HowItWorksSection,
} from '@/components/features/landing';

// Lazy load below-fold interactive section for performance
const SecurityDemoSection = dynamic(
  () =>
    import('@/components/features/landing/SecurityDemoSection').then(
      (mod) => mod.SecurityDemoSection
    ),
  { ssr: true }
);

const FAQSection = dynamic(
  () => import('@/components/features/landing/FAQSection').then((mod) => mod.FAQSection),
  { ssr: true }
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProsConsGrid />
      <FeaturesSection />
      <HowItWorksSection />
      <SecurityDemoSection />
      <FAQSection />
    </main>
  );
}
