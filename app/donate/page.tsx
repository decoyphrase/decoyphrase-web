/**
 * Donation Page
 * @route /donate
 *
 * Features:
 * - Storage Fund card with Arweave wallet
 * - Team Fund card with multi-chain support
 * - Interactive storage calculator
 * - Trust & transparency focused design
 */

import type { Metadata } from 'next';
import { DonatePageContent } from '@/components/features/donation/DonatePageContent';

export const metadata: Metadata = {
  title: 'Donate | Decoy Phrase',
  description:
    'Support Decoy Phrase - Free, non-profit, no paywall. Your donation funds permanent storage on Arweave.',
  openGraph: {
    title: 'Support Decoy Phrase',
    description: 'Fund permanent, indestructible seed phrase storage.',
  },
};

export default function DonatePage() {
  return <DonatePageContent />;
}
